// a simple p5 sketch that draws a cloud thing
// at the location of the mouse cursor

function setup() {
	createCanvas(640, 480);

}

function draw() {
	background(0, 0, 0);
	noStroke();
	fill(255, 255, 255);

	for (var i = 0; i < 1; i++){
		ellipse(mouseX+random(0, 10), mouseY+random(0, 10), 50, 50);
	}
}
