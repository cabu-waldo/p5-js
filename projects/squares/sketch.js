let n_squares = 40;
let init_size = 0.6;
let init_angle = 45;
let zoom_speed = 1.02;
let rotation_speed = 0.5;

let palet = [
  "#f7b267",
  "#f79d65",
  "#f4845f",
  "#f27059",
  "#f25c54",
  "#f27059",
  "#f4845f",
  "#f79d65",
  "#f7b267",
]

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  angleMode(DEGREES)
  window_size = (width > height ? height : width)
}

function draw() {
  background("#FFE8BA");
  noFill();
  stroke("#ff9f1c");

  size = init_size;
  angle = init_angle
  for (let i = 0; i < n_squares; i++) {
    stroke(palet[i % palet.length])
    draw_multiple_squares(width/2, height/2, size, angle)
    size *= 0.69;
    angle += 45;
  }

  if (mouseIsPressed) {
    init_angle += rotation_speed;
    init_size *= zoom_speed;
    if (init_size > 15) {
      init_size = 0.6
    }    
    
  }
}

function draw_multiple_squares(x, y, width_percent=1, angle_pos=50, angle_size=30) {
  
  n_square = map(width_percent, 0.2, 1, 15, 60)

  push()
  translate(x, y)
  rotate(angle_pos)
  for (let i = 0; i < n_square; i++) {
    rotate(angle_size / n_square);
    square(0, 0, window_size * width_percent)
  }
  pop()
  // translate(-x, -y)
}
