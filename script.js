/**
 * Project 1 - Interactive Image
 * Name: David Wetzel (student version)
 * Comments: This is based on the "Frog" demos
 */

// Global Variables go here
var x = 0;
var y = 0;
var r = 0;
var s = 1;
var xSpeed = 0;
var ySpeed = 0;
var rSpeed = 0;

function setup() {
  createCanvas(400, 300);
  xSpeed = random(-2, 2);
  ySpeed = random(-2, 2);
  rSpeed = random(-.05, .05);
}


function draw() {
  //Let's draw a frog!
  background(200);
  fill(0)
  strokeWeight(1);
  textSize(20);
  text("Draw a Frog the Ed Emberley way!", 20, 40);
  translate(x, y);
  rotate(r);
  r += rSpeed;
  s = y/height;
  scale(s);
  x += xSpeed;
  if(x > width || x < 0){
    xSpeed *= -1;
  }
  y += ySpeed;
  if(y > height || y < 0){
    ySpeed *= -1;
  }
  /* Step 5 c - Color */
  fill(0, 255, 0);
  /** Step 1 - Body */
  //noFill();
  strokeWeight(5);
  stroke(0, 255, 0);
  arc(0, 30, 100, 150, PI, 0, CHORD);
  /** Step 5d - belly */
  fill(255); // white
  arc(0, 30, 90, 130, PI, 0, CHORD);
  /** Step 2 - eyes */
  ellipse(-20, -48, 25);
  ellipse(20, -48, 25);
  /** step 5e color in legs */
  fill(0, 255, 0)
  /** Step 3 - Back Legs */
  arc(-50, 30, 40, 60, PI, 0, CHORD);
  arc(50, 30, 40, 60, PI, 0, CHORD);
  /** Step 4 - Feet */
  triangle(-50, 30, -60, 50, -40, 50);
  triangle(50, 30, 40, 50, 60, 50);
  triangle(-15, 30, -25, 50, -5, 50);
  triangle(15, 30, 5, 50, 25, 50);
  /** Step 5a - front legs */
  line(-15, 30, -15, 0);
  line(15, 30, 15, 0);
  /** Step 5b - Mouth*/
  stroke(255, 0, 0); // red outline
  strokeWeight(2); // thinner outline

  if (mouseIsPressed) {
    fill(255, 0, 0); //red solid
    arc(0, -5, 55, 45, PI, 0, CHORD) // croak

  } else {
    noFill(); //transparent shape
    arc(0, -5, 55, 45, PI, 0) // frown

  }

  /* Step 6 - Eyes & Nose */
  stroke(0); // black outline
  fill(0); // fill in black
  ellipse(-20, -50, 9); // left pupil
  ellipse(20, -50, 9); // right pupil
  strokeWeight(5); //5px line
  point(-5, -45); // left nostril
  point(5, -45); // right nostril


}
  