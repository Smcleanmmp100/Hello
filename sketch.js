var diam1=0;
//The setup function only happens once
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background("#663366"); //an RGB color for the canvas' background circle
  fill ("#add8e69");
  stroke("#9fff00") // an RGB color for the circle's border
  strokeWeight(15);
  ellipse(250,210, diam1, diam1);
  fill("#995599"); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX, mouseY, 15,20); // center of canvas, 20px dia
  textSize(20); //text size is 20
  textFont("Georgia"); // 
  textStyle(ITALIC); // Text style is Italic
  textAlign(CENTER); // Text align centered
  text(" Hello Professor, ",240,140); // Text is, "Hello Professor"
  text (" Have a cool summer.",280,170); //Text is " Have a cool summmer."
  
}


function mousePressed (){ // Each time the mouse is pressed, the circle gets bigger and bigger..
	diam1=diam1+15;

}