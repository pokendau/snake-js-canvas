const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

function init() {
  update();
}

function update() {
  requestAnimationFrame(update);
}

init();
