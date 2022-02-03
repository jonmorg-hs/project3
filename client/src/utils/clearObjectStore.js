const clearObjectStore = () => {
  var store = getObjectStore(window.DB_STORE_NAME, "readwrite");
  var req = store.clear();
  req.onsuccess = function (evt) {
    console.log("Store cleared");
  };
  req.onerror = function (evt) {
    console.error("clearObjectStore:", evt.target.errorCode);
    console.log(this.error);
  };
};

export default clearObjectStore;
