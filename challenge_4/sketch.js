// a simple p5 sketch demonstrating animation


var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;

var ballA = -200;
var ballB = -100;
var ballSpeedA = -5;
var ballSpeedB = -5;

function setup() {
	createCanvas(640, 480);
}

function draw() {
	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;

	// don't let the ball go to far

	// right
	if (ballX > width) {
		ballSpeedX = -ballSpeedX;
	}

	// bottom
	if (ballY > height) {
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

}
