import $ from "jquery";

const syncData = () => {
  alert("Syncing with HaulSmart");
  var url =
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
        alert("Insertion in DB successful");
      };
      req.onerror = function () {
        alert("Insertion in DB Failed ", this.error);
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
};

export default syncData;
