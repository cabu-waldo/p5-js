function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(0)
  fill(0, 0)
  stroke(255)
  frameRate(25)
  rect_by_frame = 30
  
}

function draw() {

  
  if (mouseIsPressed) {
    for (let i = 0; i < rect_by_frame; i++) {
      x = random(0, windowWidth)
      y = random(0, windowHeight)
      width = random(0, 50)
      height = random(0, 50)
  
      rect(x, y, width, height)
    }

  }
  

}


