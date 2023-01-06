

let n_rows = 15
let margin = 15
let noise_amp = 15
let cell_size
let f = 0.25
let frequency = 2
let x,y
let phase_coef = -1.2

function setup() {

  let canva_size = windowHeight < windowWidth ? windowHeight: windowWidth
  createCanvas(canva_size, canva_size);
  cell_size = (width - margin * 2 ) / n_rows;

  rectMode(CENTER)
  angleMode(DEGREES)

  frameRate(60)

}

function draw() {

  dist()


  fill(255)
  stroke(255)
  strokeWeight(1)

  background(0);

  for (let i = 0; i < n_rows ; i++) {
    for (let j = 0; j < n_rows; j++) {
      
      x = margin + cell_size/2 + i * cell_size
      y = margin + cell_size/2 + j * cell_size
      f = sin(frameCount * frequency + phase_coef * dist(width/2, height/2, x,y))
      
      circle(
        x = x,
        y = y,
        dim = f * cell_size * 0.8
      )
    }
  }
}
