export default class Head {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "right";
    this.speed = 20;
  }

  draw(c) {
    switch (this.direction) {
      case "right":
        this.x += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
    }
    c.fillStyle = "#C04ABC";
    c.fillRect(this.x, this.y, 20, 20);
  }

  move(keyCode) {
    switch (keyCode) {
      case 65:
        this.direction = this.direction === "right" ? "right" : "left";
        break;
      case 68:
        this.direction = this.direction === "left" ? "left" : "right";
        break;
      case 87:
        this.direction = this.direction === "down" ? "down" : "up";
        break;
      case 83:
        this.direction = this.direction === "up" ? "up" : "down";
        break;
    }
  }
}
