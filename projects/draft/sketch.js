


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255)
  noStroke();
  frameRate(20)

  x = windowWidth/2;
  y = windowHeight/2;
  perturbation_amp = (windowWidth < windowHeight ? windowWidth : windowHeight) / 2 - 20;
  circle_size = 8
  
}

function draw() {

  background(0, 50);

  for (let i = 0; i < 500; i++) {

    var p_x = random(-perturbation_amp, +perturbation_amp)
    var p_y = random(-perturbation_amp, +perturbation_amp)
    
    circle(
      x+p_x,
      y+p_y,
      circle_size
    )    
  }
}
