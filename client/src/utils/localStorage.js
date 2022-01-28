export const getSavedBlastIds = () => {
  const savedBlastIds = localStorage.getItem("saved_blasts")
    ? JSON.parse(localStorage.getItem("saved_blasts"))
    : [];

  return savedBlastIds;
};

export const saveBlastIds = (blastIdArr) => {
  if (blastIdArr.length) {
    localStorage.setItem("saved_blasts", JSON.stringify(blastIdArr));
  } else {
    localStorage.removeItem("saved_blasts");
  }
};

export const removeBlastId = (blastId) => {
  const savedBlastIds = localStorage.getItem("saved_blasts")
    ? JSON.parse(localStorage.getItem("saved_blasts"))
    : null;

  if (!savedBlastIds) {
    return false;
  }

  const updatedSavedBlastIds = savedBlastIds?.filter(
    (savedBlastId) => savedBlastId !== blastId
  );
  localStorage.setItem("saved_blasts", JSON.stringify(updatedSavedBlastIds));

  return true;
};
