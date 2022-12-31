function broken_line(line_x1, line_y1, line_x2, line_y2, max_depth=3, depth=1) {

  var line_len = sqrt((line_x2-line_x1)**2 + (line_y2 - line_y1)**2)

  var line_mid_x = (line_x1 + line_x2) / 2
  var line_mid_y = (line_y1 + line_y2) / 2

  var step_x = random(
    line_mid_x - line_len/3, 
    line_mid_x + line_len/3
  )

  var step_y = random(
    line_mid_y - line_len/3, 
    line_mid_y + line_len/3
  )

  if (depth >= max_depth) {

    line(line_x1, line_y1, step_x, step_y)
    line(step_x, step_y, line_x2, line_y2)

  }
  else {

    broken_line(
      line_x1, line_y1, step_x, step_y,
      max_depth=max_depth,
      depth = depth + 1
      )
  
    broken_line(
      step_x, step_y, line_x2, line_y2, 
      max_depth=max_depth,
      depth = depth + 1
    )
  }
}

function setup() {
  
  // init
  createCanvas(windowWidth, windowHeight);
  background(0)
  stroke(255, 255)
  strokeWeight(5)
  frameRate(10)
  max_depth=7
}

function draw() {


  background(0, 200)

  if(mouseIsPressed) {
    
    broken_line(
      mouseX, 
      mouseY, 
      windowWidth/2, 
      windowHeight/2,
      max_depth
    )

  }

}


