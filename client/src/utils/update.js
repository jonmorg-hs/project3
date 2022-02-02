const getBlastPolygons = () => {
  $.getJSON(
    "https://www.haulsmart.com/apis/blastpolygons.php",
    function (geojson) {
      console.log(geojson);
      var store = getObjectStore("polygons", "readwrite");
      var req = store.clear();
      var req;
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
    }
  );
};

export default getBlastPolygons;
