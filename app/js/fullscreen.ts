function enterFullscreen() {
  if (!document.fullscreen && window.location.href.includes("questionPage")) {
    document.documentElement.requestFullscreen();
    document.onfullscreenchange = function () {
      document.documentElement.removeEventListener(
        "mousemove",
        enterFullscreen
      );
    };
  }
}

document.documentElement.addEventListener("mousemove", enterFullscreen);