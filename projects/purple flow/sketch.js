// constants
let n_part_generated = 30;
let pos_rand_amp = 40;
let noise_scale = 0.02;

let particles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB)
  background("white")
}

function draw() {

  // del outside particles
  particles = particles.filter(p => !p.is_out())

  // draw & update particles
  for (const particle of particles) {
    particle.draw()
    particle.update()
  }


  if (mouseIsPressed) {
    for (let i = 0; i < n_part_generated  ; i++) {
      particles.push(new Particle(
        x = mouseX + random(-pos_rand_amp,pos_rand_amp), 
        y = mouseY + random(-pos_rand_amp,pos_rand_amp),
        hue = map(noise(mouseX, mouseY) * 360, 50, 250, 210, 270)
      ))
    }
  }
}


class Particle {

  constructor(
    x=null, 
    y=null, 
    hue=200, 
    ) {
    
    this.x = x;
    this.y = y;
    this.hue = hue;

    this.speed = 1.5;
    this.dim = 2;
    this.alpha = 0.1;
  }

  draw() {
    noStroke()
    fill(color(this.hue, 100, 100, this.alpha))
    circle(this.x, this.y, this.dim)
  }

  update() {
    let n = 360*noise(noise_scale * this.x,noise_scale * this.y);
    this.x += this.speed * cos(n);
    this.y += this.speed * sin(n)
  }

  is_out() {
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      return true;
    }
    return false;
  }
  
}
