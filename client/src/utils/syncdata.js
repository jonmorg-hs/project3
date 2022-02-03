import getObjectStore from "../utils/getObjectStore";

const syncData = () => {
  alert("syncing data");
  const host = "https://www.haulsmart.com/apis/blastpolygons.php";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    credentials: "include",
    mode: "cors",
  };
  return fetch(host, requestOptions)
    .then((response) => response.json())
    .then((geojson) => getSyncData(geojson))
    .catch((err) => console.log(err));
};

function getSyncData(geojson) {
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

export default syncData;
