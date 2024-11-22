const swRegister = async () => {
  if (!("serviceWorker" in navigator)) {
    console.log("Service worker is not supported on your browser.");
    return;
  }

  try {
    await navigator.serviceWorker.register("./sw.bundle.js");
    console.log("Service worker is registered");
  } catch (error) {
    console.log("Failed to register service worker ", error);
  }
};

export default swRegister;
