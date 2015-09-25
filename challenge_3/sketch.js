function setup() {
	// create a place to draw
	createCanvas(640, 480);
	stroke(255,255,255);
	strokeWeight(1);
	noFill();
}

function draw() {
				// background
	  		if (mouseIsPressed) {
						background(50,50,100);
				} else {
						background(150,0,0);
				}
				// lines
						line(mouseX,0,mouseX,480);
						line(0, mouseY, 640, mouseY);
				//ellipse
					ellipse(mouseX, mouseY,30,30);



				}
