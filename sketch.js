var img;
function preload() {
  img = loadImage("images/Jinx.jpg");
}
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204);
  ellipse(150, 150, 180, 180);
  point(80,150);
  point(150,150);
  line(50, 50, 100, 50);
  
}
