function broken_line(line_x1, line_y1, line_x2, line_y2, max_depth=3, depth=1) {

  var line_len = sqrt((line_x2-line_x1)**2 + (line_y2 - line_y1)**2)

  var line_mid_x = (line_x1 + line_x2) / 2
  var line_mid_y = (line_y1 + line_y2) / 2

  var step_x = random(
    line_mid_x - line_len/3.5, 
    line_mid_x + line_len/3.5
  )

  var step_y = random(
    line_mid_y - line_len/3.5, 
    line_mid_y + line_len/3.5
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


let max_depth = 7;

let start_1_x = 0;
let start_1_y = 0;

let start_2_x = 0;
let start_2_y = 0;

let start_3_x = 0;
let start_3_y = 0;


function setup() {
  
  // init
  createCanvas(windowWidth, windowHeight);
  background(0)
  stroke(255, 255)
  strokeWeight(5)
  frameRate(10)
}

function draw() {


  background(0, 200)

  if(mouseIsPressed) {

    
    
    broken_line(start_1_x, start_1_y, mouseX,  mouseY,  max_depth)
    broken_line(start_2_x,start_2_y,mouseX, mouseY, max_depth)
    broken_line(start_3_x,start_3_y,mouseX, mouseY, max_depth)

  }

}

function mousePressed() {
  // we generate 3 dots on the border
  start_1_x = 0
  start_1_y = random(0,height)

  start_2_x = width
  start_2_y = random(0,height)

  start_3_x = random(0,width)
  start_3_y = random() > 0.5 ? height : 0
}


