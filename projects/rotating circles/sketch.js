class MyArc {

  constructor(x, y, radius, angle_start, speed) {
    this.x = x
    this.y = y
    this.radius = radius
    this.angle_start = angle_start
    this.length = 120
    this.speed = speed
  }

  draw() {
    arc(
      this.x, this.y,
      this.radius,
      this.radius,
      this.angle_start,
      this.angle_start + this.length
    )
  }

  move() {
    this.angle_start += this.speed
  }
}

class MultipleArcs {

  constructor(radius_step = 20, speed_step = 0.5) {


    this.radius_step = radius_step;
    this.speed_step = speed_step;

    this.next_radius = 20;
    this.next_speed = 1;

    this.arc_list = []
  }

  add_arc() {
    
    // add a new arc
    this.arc_list.push(
      new MyArc(width / 2, height / 2, this.next_radius, 90, this.next_speed)
    )

    // update values
    this.next_radius += this.radius_step;
    this.next_speed += this.speed_step;
  }

  draw() {
    for (const arc of this.arc_list) {
      arc.draw()
    }
  }

  move() {
    for (const arc of this.arc_list) {
      arc.move()
    }
  }


}

let arcs = new MultipleArcs(
  radius_step = 20,
  speed_step = 0.2
);

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)

  for (let i = 0; i < 20; i++) {
    arcs.add_arc();    
  }
}

function draw() {
  background(0);
  fill(0, 0)
  stroke(255)
  strokeWeight(7)
  arcs.draw()
  arcs.move()
}

