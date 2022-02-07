import $ from "jquery";

const syncData = () => {
  //localStorage.setItem("bh_database", "false");
  if (localStorage.getItem("bh_database") === "true") {
    let message = "Syncing with HaulSmart";
    $("#message").html(message).css({ display: "table-cell" }).show();
    setTimeout(function () {
      $("#message").html("").hide();
    }, 3000);
    let url =
      "https://www.haulsmart.com/apis/blastpolygons.php?email=" +
      localStorage.getItem("email") +
      "&password=" +
      localStorage.getItem("password");
    console.log(url);
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET",
      async: true,
      success: function (geojson) {
        console.log(geojson);
        let store = window.db
          .transaction("polygons", "readwrite")
          .objectStore("polygons");
        let req;
        req = store.clear();
        try {
          req = store.add(geojson);
        } catch (e) {
          throw e;
        }
        req.onsuccess = function (evt) {
          let message = "Sync successful";
          $("#message").html(message).css({ display: "table-cell" }).show();
          setTimeout(function () {
            $("#message").html("").hide();
          }, 3000);
        };
        req.onerror = function () {
          let message = "Sync Failed " + this.error;
          $("#message").html(message).css({ display: "table-cell" }).show();
          setTimeout(function () {
            $("#message").html("").hide();
          }, 3000);
        };
      },
    });
    //$.getJSON(
    //  "https://www.haulsmart.com/apis/holedata.php?id=so_gw_295_08",
    //  function (geojson) {
    //    for (var j = 0; j < geojson.features.length; j++) {
    //      var coords = geojson.features[j].geometry.coordinates;
    //      var obj = {
    //        id: j,
    //        blast: geojson.features[j].properties.Blast,
    //        hole: geojson.features[j].properties.Hole,
    //        holetype: geojson.features[j].properties.HoleType,
    //        collar: geojson.features[j].properties.Collar,
    //        toe: geojson.features[j].properties.Toe,
    //        angle: geojson.features[j].properties.Angle,
    //        dipped: geojson.features[j].properties.Dipped,
    //        lat: coords[1],
    //        lng: coords[0],
    //      };
    //      var store = window.db
    //        .transaction(window.DB_STORE_NAME, "readwrite")
    //        .objectStore(window.DB_STORE_NAME);
    //      var req;
    //      try {
    //        req = store.add(obj);
    //      } catch (e) {
    //        if (e.name === "DataCloneError")
    //          console.log(
    //            "This engine doesn't know how to clone a Blob, " + "use Firefox"
    //          );
    //        throw e;
    //      }
    //      req.onsuccess = function (evt) {
    //        console.log("Insertion in DB successful");
    //      };
    //      req.onerror = function () {
    //        console.error("addHole error", this.error);
    //      };
    //    }
    //  }
    //);
  } else {
    let message = "Syncing with Cloud";
    $("#message").html(message).css({ display: "table-cell" }).show();
    setTimeout(function () {
      $("#message").html("").hide();
    }, 3000);
  }
};

export default syncData;
