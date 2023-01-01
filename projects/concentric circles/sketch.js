
class CirclePlus {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.n_circles = 5;
    this.dim_coef = 50;
    // this.gray_scale = 255;
    this.gray_scale = random() < 0.66 ? 255 : 0
  }

  draw() {
    fill(this.gray_scale, 60)
    for (let i = 1; i <= this.n_circles; i++) {
      circle(this.x ,this.y , i*this.dim_coef)
    }
  }

  update() {
    this.dim_coef *= 0.9985
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(40)

  circle_plus_list = []
}

function draw() {
  background(0)
  for (const circle_plus of circle_plus_list) {
    circle_plus.draw()
    circle_plus.update()
  }
}

function mouseClicked() {
  circle_plus_list.push(new CirclePlus(mouseX, mouseY))
}
