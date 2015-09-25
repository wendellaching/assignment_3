function setup() {
	// create a place to draw
	createCanvas(640,480);
	strokeWeight(1);

}

function draw() {
	// clear the background
	background(130, 130, 170);
	//fill color
	noFill();

	//inner Target
	var inTarget = 25;
	for (var i = 0; i < 50; i++){
						stroke(255,255,255);
	ellipse(320, 240, i * inTarget, i * inTarget);
}
	var outTarget = 50;
	for (var x = 0; x < 50; x++){
					stroke(0,0,0);
	ellipse (320,240, x * outTarget, x * outTarget);
}
}
