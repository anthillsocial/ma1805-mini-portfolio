let img; 

function preload() {
  img = loadImage('Antenna.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   // Draw the image.
  image(img, 0, 0);
}
