// a simple p5 sketch that draws a cloud thing
// at the location of the mouse cursor
var ballX=100;
var ballY=100;
function setup() {
	createCanvas(640, 480);

}

function draw() {
	background(0, 0, 0);
	noStroke();

	fill(255, 255, 255);
		 if (mouseX > ballX){
			 	ballX += 1;
		 } else {
			 ballX -=1;
		 }
		 if (mouseY > ballY){
			 	ballY +=1
		 } else {
			 ballY -= -1;
		 }

	for (var i = 0; i < 1; i++){
		ellipse(mouseX+random(0, 10), mouseY+random(0, 10), 50, 50);
	}
}
