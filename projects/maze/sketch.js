let n_row = 20
let walls = []

function setup() {

  canva_size = windowHeight < windowWidth ? windowHeight : windowWidth
  createCanvas(canva_size, canva_size);

  frameRate(30)
  
  cell_size = width / n_row

  for (let i = 0; i < n_row ** 2; i++) {
    walls.push(int(random(2)))
  }
}

function draw() {
  background(250);
  background(0)
  stroke(255)
  strokeWeight(5)

  random_wall_i = int(random(0, walls.length))

  if (walls[random_wall_i] == 0) {
    walls[random_wall_i] = 1 
  } else {
    walls[random_wall_i] = 0 
  }

  for (let i = 0; i < n_row; i += 1) {
    for (let j = 0; j < n_row; j += 1) {
      
      x = i * cell_size;
      y = j * cell_size;

      index = i * n_row + j
      
      if (walls[index]) {
        line(x, y, x + cell_size, y + cell_size)
      } else {
        line(x  +cell_size, y, x, y + cell_size)
      }
      
    }
  }
}