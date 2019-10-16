var img;
function preload() {
  img = loadImage("images/Virus.jpg"); 
}

function setup() {
  createCanvas(1400, 1400);
}
function draw() {
  background(750);
  
  fill(255, 0, 0);
  ellipse(200, 200, 200, 200);
  
  ellipse(150, 150, 180, 180);
  point(80,150);
  point(150,150);
  line(50, 50, 100, 50);
}
