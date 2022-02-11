import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import $ from "jquery";

export const uploadHole = () => {
  if (localStorage.getItem("bh_database") === "true") {
    if (navigator.onLine === true) {
      $.ajax({
        url: "https://www.haulsmart.com/apis/setHole.php",
        type: "POST",
        data: { json: JSON.stringify(window.holeObj) },
        timeout: 10000,
        error: function () {
          storeOfflineHole(window.holeObj, "UPLOAD ERROR: ");
        },
        dataType: "text",
        success: function (text) {
          $("#message")
            .html("Hole updated on HaulSmart")
            .css({ display: "table-cell" })
            .show();
          setTimeout(function () {
            $("#message").html("").hide();
          }, 3000);
        },
      });
    } else {
      storeOfflineHole(window.holeObj, "NO INTERNET: ");
    }
  }
};

function storeOfflineHole(data, error) {
  var store = window.db
    .transaction("offlineholes", "readwrite")
    .objectStore("offlineholes");
  var req;
  try {
    req = store.put(data);
  } catch (e) {
    if (e.name === "DataCloneError")
      console.log("This engine doesn't know how to clone a Blob, use Firefox");
    throw e;
  }
  req.onsuccess = function (evt) {
    showMessage(error + "Hole stored on device");
    //map.closePopup();
  };
  req.onerror = function () {
    console.error("read db error", this.error);
  };
}

function showMessage(message) {
  $("#message").html(message).css({ display: "table-cell" }).show();
  setTimeout(function () {
    $("#message").html("").hide();
  }, 3000);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
