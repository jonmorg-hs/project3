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
      success: function (data) {
        console.log(data);
        var geojson = data[0];
        var store = window.db
          .transaction("polygons", "readwrite")
          .objectStore("polygons");
        var req;
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
        var store = window.db
          .transaction("patterns", "readwrite")
          .objectStore("patterns");
        var req;
        req = store.clear();
        let holedata = data[1];
        for (let i = 0; i < holedata.length; i++) {
          var store = window.db
            .transaction("patterns", "readwrite")
            .objectStore("patterns");
          var req;
          try {
            req = store.add({
              blast: holedata[i].blast,
              hole: holedata[i].hole,
              holetype: holedata[i].holetype,
              collar: holedata[i].collar,
              toe: holedata[i].toe,
              angle: holedata[i].angle,
              dipped: holedata[i].dipped,
              lat: holedata[i].lat,
              lng: holedata[i].lng,
            });
          } catch (e) {
            throw e;
          }
          req.onsuccess = function (evt) {
            let message = "Syncing with HaulSmart";
            $("#message").html(message).css({ display: "table-cell" }).show();
            setTimeout(function () {
              $("#message").html("").hide();
            }, 3000);
            if (i === holedata.length - 1) {
              let message = "HaulSmart Sync successful";
              $("#message").html(message).css({ display: "table-cell" }).show();
              setTimeout(function () {
                $("#message").html("").hide();
              }, 3000);
            }
          };
          req.onerror = function () {
            let message = "Sync Failed " + this.error;
            $("#message").html(message).css({ display: "table-cell" }).show();
            setTimeout(function () {
              $("#message").html("").hide();
            }, 3000);
          };
        }
      },
    });
  } else {
    let message = "Syncing with Cloud";
    $("#message").html(message).css({ display: "table-cell" }).show();
    setTimeout(function () {
      $("#message").html("").hide();
    }, 3000);
  }
};

export default syncData;
