import React, { useEffect } from "react";

const checkPWA = () => {
  useEffect(() => {
    const butInstall = document.getElementById("buttonInstall");

    window.addEventListener("beforeinstallprompt", (event) => {
      console.log("👍", "beforeinstallprompt", event);
      // Store the event so it can be used later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install anchor tag.
      butInstall.style.display = "block";
    });

    window.addEventListener("appinstalled", (event) => {
      console.log("👍", "appinstalled", event);
      // Clear the prompt
      window.deferredPrompt = null;
      butInstall.style.display = "none";
    });
  }, []);
};

export default checkPWA;
