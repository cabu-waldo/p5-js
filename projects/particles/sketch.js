
let n_particles = 80;
let particles = []

let central_particle;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < n_particles; i++) {
    particles.push(new Particle(
      x=null,
      y=null,
      v_amp=1,
      dim=4,
      // p_color=color_palet[int(random(0, color_palet.length))],
      p_color="#ffffff",
      alpha=1,
      action_radius=0
    ))
  }

  central_particle = new Particle(
    x=0,
    y=0, 
    v_amp=0, 
    dim=50, 
    p_color="#ffffff", 
    alpha+1, 
    action_radius=170
  );
}

function draw() {
  background(0);

  // particles
  for (const particle of particles) {
    particle.draw()
    particle.update()
  }

  // connexions
  
  strokeWeight(1)
  stroke(255)

  for (let i = 0; i < particles.length; i++) {
    for (let j = i+1; j < particles.length; j++) {

      let pi = particles[i];
      let pj = particles[j];

      if (pi.is_connected(pj)) {
        line(pi.x, pi.y, pj.x, pj.y)
      }
    }
  }

  // central particle position
  central_particle.x = mouseX;
  central_particle.y = mouseY;

  central_particle.draw();

  strokeWeight(2)
  stroke(255)

  // central particle connexions
  for (const p of particles) {
    if (central_particle.is_connected(p)) {
      line(central_particle.x, central_particle.y, p.x, p.y)
    }
  }
  
  
}

class Particle {

  constructor(
    x=null, 
    y=null, 
    v_amp=2, 
    dim=10, 
    p_color="#ffffff", 
    alpha=1,
    action_radius=100,
    
    ) {
    
    this.dim = dim;
    this.alpha = alpha;
    this.action_radius = action_radius;
    this.p_color = p_color;

    this.vx = random(-v_amp, v_amp);
    this.vy = random(-v_amp, v_amp);

    // check position
    if (x === null) {
      this.x = random(this.dim/2, width - this.dim/2)
    }
    else {
      this.x = x
    }
    if (y === null) {
      this.y = random(this.dim/2, height - this.dim/2)
    }
    else {
      this.y = y
    }
  }

  draw() {
    let c = color(this.p_color);
    c.setAlpha(this.alpha*255);
    noStroke()
    fill(c)

    circle(this.x, this.y, this.dim)
  }

  update() {

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < this.dim/2 || this.x > width - this.dim / 2) {
      this.vx *= -1;
    }
    if (this.y < this.dim/2 || this.y > height-this.dim/2) {
      this.vy *= -1;
    }
  }

  is_connected(particle) {
    if (dist(this.x, this.y, particle.x, particle.y) < this.action_radius) {
      return true;
    }
    else {
      return false;
    }
  }
}
