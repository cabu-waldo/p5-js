function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB)

  noStroke()

  hue = 0

  circle_x = windowWidth/2;
  circle_y = windowHeight/2;
  
  last_mouseX = circle_x
  last_mouseY = circle_y

  speed = 30
  
}

function draw() {

  delta_x = last_mouseX - circle_x;
  delta_y = last_mouseY - circle_y;

  step_x = delta_x / speed;
  step_y = delta_y / speed;

  circle_x += step_x;
  circle_y += step_y;

  fill(hue % 360,255, 128, 5)
  circle(circle_x, circle_y, 50)

  if (mouseIsPressed) {
    last_mouseX = mouseX;
    last_mouseY = mouseY;
  }

  hue += 1.5

}
