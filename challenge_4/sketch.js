// a simple p5 sketch demonstrating animation


var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;
var ballA = 100;
var ballB = 200;
var ballSpeedA = 5;
var ballSpeedB = 5;

function setup() {
	createCanvas(640, 480);
	background (0,0,0);
}

function draw() {
	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;
	ballA = ballA + ballSpeedA;
	ballB = ballB + ballSpeedB;

	// don't let the ball go to far

	// right
	if (ballX > 640) {
			ballSpeedX = -ballSpeedX;
	}
	if (ballA > 640) {
			ballSpeedA = -ballSpeedA;
	}
	// bottom
	if (ballY > 480) {
			ballSpeedY = -ballSpeedY;
	}
	if (ballB > 480) {
	 		ballSpeedB = -ballSpeedB;
	}
	// left
	if (ballX < 0) {
			ballSpeedX = -ballSpeedX;
	}
	if (ballA < 0) {
			ballSpeedA = -ballSpeedA;
	}
	// top
	if (ballY < 0) {
			ballSpeedY = -ballSpeedY;
	}
	if (ballB < 0) {
		ballSpeedB = -ballSpeedB;
	}

	fill(255,255,255);
	ellipse(ballX, ballY, 50, 50);
	ellipse (ballA, ballB, 50, 50);
}
