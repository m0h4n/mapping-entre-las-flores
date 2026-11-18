
window.onload = function () {
 const layers = [
  "flor-1",
  "flor-2",
  "flor-3",
  "flor-4",
  "flor-5",
  "flor-6"
];
  window.mapper = new Maptastic({
    autoLoad: false,
    autoSave: true,
    layers: layers
  });
  let editing = false;
  window.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.code === "Space") {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (event.repeat) return;
      editing = !editing;
      window.mapper.setConfigEnabled(editing);
    }
  }, true);
};
