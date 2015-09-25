// a simple p5 sketch demonstrating animation


var ballX = 200;
var ballY = 100;
var ballSpeedX = 4;
var ballSpeedY = 4;
var ballA = 100;
var ballB = 200;
var ballSpeedA = 4;
var ballSpeedB = 4;

function setup() {
	createCanvas(640, 480);
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

	// bottom
	if (ballY > 480) {
		ballSpeedY = -ballSpeedY;
	}

	// left
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}

	// top
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}


	background(0,0,0);
	ellipse(ballX, ballY, 50, 50);
	ellipse (ballA, ballB, 50, 50);

}
