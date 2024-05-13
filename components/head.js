export default class Head {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "right";
    this.speed = 4;
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
    c.fillStyle = "red";
    c.fillRect(this.x, this.y, 20, 20);
  }

  move(keyCode) {
    switch (keyCode) {
      case 65:
        this.direction = "left";
        break;
      case 68:
        this.direction = "right";
        break;
      case 87:
        this.direction = "up";
        break;
      case 83:
        this.direction = "down";
        break;
    }
  }
}
