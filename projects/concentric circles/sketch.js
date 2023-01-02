
class CirclePlus {

  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.n_circles = 10;

    this.dim_coef = 30;
    this.color = col
    this.color.setAlpha(1/this.n_circles)
  }

  draw() {
    fill(this.color)
    for (let i = 1; i <= this.n_circles; i++) {
      circle(this.x ,this.y , i*this.dim_coef)
    }
  }

  update() {
    this.dim_coef *= 0.998
  }
}


function setup() {
  colorMode(HSB)
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(40)

  circle_plus_list = []
}

function draw() {
  if (!mouseIsPressed) {
    background(0)
    for (const circle_plus of circle_plus_list) {
      circle_plus.draw()
      circle_plus.update()
    }
  }
  
}

function mouseClicked() {


  // pick random color
  colors = [
    color(0,0,100),
    color(201, 100, 29),
  ]
  var random_color = colors[floor(random()*colors.length)];

  circle_plus_list.push(new CirclePlus(mouseX, mouseY, random_color))
}
