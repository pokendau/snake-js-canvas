const randomColors = ["#2D3047", "#419D78", "#E0A458", "#FFDBB5", "#C04ABC"];

export default class Bodypart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = randomColors[Math.floor(Math.random() * randomColors.length)];
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(c) {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, 20, 20);
  }
}
