// // a simple p5 sketch that demonstrates for loops
//
// function setup() {
// 	createCanvas(640, 480);
// 	stroke(255,255,255);
// }
//
// function draw() {
// 	background(50, 50, 50);
// 	colorMode(HSB,100)
//
// 	for (var y = 0; y < 1; y++) {
// 		if ( y === 4){
// 			fill(100, 100, 255);
// 		} else {
// 			color('hsl(0, 100%, 50%)');
//             fill('hsl(0, 100%, 50%)');
//             // rect(590, 201, 50, 50);
//             color('hsla(0, 100%, 50%, 0.5)');
//             fill('hsla(0, 100%, 50%, 0.5)');
// 			// rect(525,201,50,50);
// 			color('hsla(0, 100%, 50%, 0.4)');
//             fill('hsla(0, 100%, 50%, 0.4)');
//             // rect(458,201,50,50);

// a simple p5 sketch that demonstrates for loops

function setup() {
	createCanvas(640, 480);
}
function draw() {
	background(50, 50, 50);
	colorMode(HSB,100)
			for (var y = 0; y <4; y++) {
	        stroke(0,0,100);
					fill(0, 100, y*10);
  		}
	    for (var x = 0; x < 10; x++) {
        	rect(x * 65.5, y+200 ,50, 50);
				}

	    	for (var x = 0; x < 10; x++) {
			rect(x * 65.5, y+200 ,50, 50);
		}

}
