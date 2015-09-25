function setup() {
	// create a place to draw
	createCanvas(640, 480);
	strokeWeight(.5);
}

function draw() {
				// background
	  		if (mouseIsPressed) {
						background(50,50,100);
				} else {
						background(150,0,0);
				}
				// lines
						line(mouseX,0,mouseX,100);


				}
