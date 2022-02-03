const getObjectStore = (store_name, mode) => {
  var tx = window.db.transaction(store_name, mode);
  return tx.objectStore(store_name);
};

export default getObjectStore;
