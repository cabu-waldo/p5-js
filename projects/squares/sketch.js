

class MultipleSquares {

  constructor(x, y, color, fig_width=0.6, angle=45, len_angle=30, rotation_speed=0.5) {

    this.x = x;
    this.y = y;
    this.fig_width = fig_width;
    this.angle = angle;
    this.len_angle = len_angle;
    this.color = color;

    this.zoom_speed = 1.02;
    this.rotation_speed = rotation_speed;

  }

  draw() {
    noFill();
    strokeWeight(0.7)
    stroke(this.color);  

    let n_square = map(this.fig_width, 0.2, 1, 15, 60) 
    
    push()
    translate(this.x, this.y)
    rotate(this.angle)
    for (let i = 0; i < n_square; i++) {
      rotate(this.len_angle / n_square);
      square(0, 0, window_size * this.fig_width)
    }
    pop()
  }

  update() {
    this.angle += this.rotation_speed;
    this.fig_width *= this.zoom_speed;
  }
  
}

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

let msquare_list = [];
let n_msquare = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  angleMode(DEGREES)
  window_size = (width > height ? height : width)

  let mrect_width = 0.4;
  let mrect_angle = 75;
  for (let i = 0; i < n_msquare; i++) {
    msquare_list.push(
      new MultipleSquares(
        x=width/2,
        y=height/2,
        color=palet[i%palet.length],
        fig_width=mrect_width,
        angle=mrect_angle,
        len_angle=30,
        rotation_speed = 0.5
      )

      ) 
      
    mrect_width *= 0.69;
    mrect_angle += 45;
  }

}



function draw() {
  background("#FFE8BA");
  for (const msquare of msquare_list) {
    msquare.draw()
  }
  
  //del big rects
  if (msquare_list[0].fig_width > 3) {
    msquare_list.shift()
  }
  
  if (mouseIsPressed) {
    for (const msquare of msquare_list) {
      msquare.update()
    }
  }
  
}


