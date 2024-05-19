export default class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(c) {
    c.fillStyle = "green";
    // c.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    c.fillRect(this.x, this.y, 20, 20);
  }
}
