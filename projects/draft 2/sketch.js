

let n_rows = 20
let margin = 10
let noise_amp = 10
cell_size_coef = 0.5

let cell_size

function setup() {

  let canva_size = windowHeight < windowWidth ? windowHeight: windowWidth

  createCanvas(canva_size, canva_size);
  cell_size = (width - margin * 2 ) / n_rows;
  console.log(cell_size)

  rectMode(CENTER)

  noLoop()

  
}

function draw() {


  noFill()
  stroke(255)
  strokeWeight(3)

  background(0);

  for (let i = 0; i < n_rows ; i++) {
    for (let j = 0; j < n_rows; j++) {
      // rect(
      //   x = margin + cell_size/2 + i*cell_size + random(-10, 10),
      //   y = margin + cell_size/2 + j * cell_size + random(-10, 10),
      //   w = cell_size*0.7,
      //   h = cell_size*0.7
      // )


      circle(
        x = margin + cell_size/2 + i*cell_size + random(-noise_amp, noise_amp),
        y = margin + cell_size/2 + j * cell_size + random(-noise_amp, noise_amp),
        dim = cell_size*cell_size_coef
      )
    }
  }
}
