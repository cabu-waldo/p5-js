
// let n_row = 15;
let cell_size = 40
let stroke_weight = 7
stroke_weight_decrease_coef = 0.15

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop()
}

function draw() {
  
  // 
  // cell_size = (width - margin) / n_row
  // print(n_row)

  background(255);
  fill(0)
  strokeWeight(stroke_weight)

  for (let y = 0; y <= height; y += cell_size) {
    for (let x = 0; x <= width; x += cell_size) {

      randn = int(random(4))

      if (randn < 1) {
        line(x, y, x+cell_size, y+ cell_size)
      } 
      else if (randn < 2) {
        line(x+cell_size, y, x, y+ cell_size)
      }
      else if (randn < 3) {
        line(x, y+ cell_size/2, x + cell_size, y + cell_size / 2 )
      }
      else {
        line(x+ cell_size/2, y, x + cell_size / 2, y + cell_size )
      }
    }    
  }
  
}

function mouseClicked() {

  print(cell_size)

  if (cell_size > 7) {
    cell_size -= 2
    stroke_weight -= 0.35

  }
  draw()
}
