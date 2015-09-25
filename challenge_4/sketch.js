var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;

function setup() {
	createCanvas(640, 480);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(0, 0, 0);

	// set a fill color
	fill(255, 255, 255);

	// draw the ellipse
	var diameter = random(50, 50);
	ellipse(320, 180, diameter, diameter);
}
