const installPWA = async () => {
  const butInstall = document.getElementById("buttonInstall");

  console.log("👍", "installBtn-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Show the result
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Reset the deferred prompt variable, prompt() can only be used once.
  window.deferredPrompt = null;
  butInstall.style.display = "none";
};

export default installPWA;
