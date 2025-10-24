let theText = ["some", "Text", "To", "Display"];
let word = theText[0]; 
let i = 0; 

function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  background(220);

  // The text display
  textSize(50);
  text(word, random(400), height/2); 

  // Change the value of word
  word = theText[i];
  i=i+1;
  if(i>=theText.length){
    i=0;
  }
  console.log(i)
  
}
