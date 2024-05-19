import Head from "./components/head.js";
import Food from "./components/food.js";
import Bodypart from "./components/bodypart.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

let bodyparts = [];
let food = [];
let running = true;

function init() {
  spawnFood();
  bodyparts.push(new Head(400, 400));
}

init();

function update() {
  if (running) {
    c.fillStyle = "#000";
    c.fillRect(0, 0, canvas.width, canvas.height);

    checkForCollisions();

    food.forEach((f) => {
      f.draw(c);
    });

    let lastPosx;
    let lastPosy;

    bodyparts.forEach((bodypart, index) => {
      if (index == 0) {
        lastPosx = bodypart.x;
        lastPosy = bodypart.y;
        bodypart.draw(c);
      } else {
        let tempPosx = bodypart.x;
        let tempPosy = bodypart.y;
        bodypart.setPosition(lastPosx, lastPosy);
        lastPosx = tempPosx;
        lastPosy = tempPosy;
        bodypart.draw(c);
      }
    });
    verifyFood();
  }
}

setInterval(() => {
  requestAnimationFrame(update);
}, 35);

document.addEventListener("keydown", (event) => {
  bodyparts[0].move(event.keyCode);
});

function spawnFood() {
  const ix = Math.floor(Math.random() * (canvas.width - 50));
  const x = ix - (ix % 20);

  const iy = Math.floor(Math.random() * (canvas.height - 50));
  const y = iy - (iy % 20);

  food.push(new Food(x, y));
}

function verifyFood() {
  food.forEach((f) => {
    if (bodyparts[0].x === f.x && bodyparts[0].y === f.y) {
      food.splice(food.indexOf(f), 1);
      bodyparts.push(
        new Bodypart(
          bodyparts[bodyparts.length - 1].x,
          bodyparts[bodyparts.length - 1].y
        )
      );
      spawnFood();
    }
  });
}

function checkForCollisions() {
  for (let i = 1; i < bodyparts.length; i++) {
    if (bodyparts[0].x == bodyparts[i].x && bodyparts[0].y == bodyparts[i].y) {
      running = false;
    }
  }
}
