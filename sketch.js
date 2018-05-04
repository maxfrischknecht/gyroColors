let fallingCircles = [];
let xpos, ypos;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	background(5);

	xpos = width / 2;
  ypos = height / 2;

}

function draw() {
		xpos += sx+2; // sx
		ypos -= sy+2; // sy
		edges();

		// make the array backwards to easier remove objects
		for (let i = fallingCircles.length-1; i >= 0; i--) { // pull out every single element and call if fc, const = locked!
			let fc = fallingCircles[i];
			fc.randomWalker();
			fc.increaseSaturation();

		}

		if(fallingCircles.length > 600) {
			fallingCircles.splice(0, 1);
		}

		for (const fc of fallingCircles) {
			fc.show();
		}

		// color based on mouse pos
		let value = int(map(xpos, 0, width, 180, 330));
		fallingCircles.push(new FallingCircles(xpos, ypos, value));

}

// add by mouse pos to array
// function mouseMoved() {
// 	fallingCircles.push(new FallingCircles(xpos, ypos));
// }

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function edges(){
  if(xpos > width)xpos = 0;
  if(xpos < 0)xpos = width;
  if(ypos > height) ypos = 0;
  if(ypos < 0) ypos = height;
}

/* PREFS */
const easing = 0.5; // set between 0 - 1

/* VARS */
let rx, ry, rz, sx, sy, sz;
rx = ry = rz = sx = sy = sz = 0;

/* ONDEVICEMOTION */
// https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
window.ondevicemotion = event => {
  /* RAW VALUES */
  rx = event.accelerationIncludingGravity.x;
  ry = event.accelerationIncludingGravity.y;
  rz = event.accelerationIncludingGravity.z;

  /* SMOOTHED VALUES */
  sx = smoothVal(rx, sx);
  sy = smoothVal(ry, sy);
  sz = smoothVal(rz, sz);
};

/* VALUE MAPPING */
function mapVal(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

/* VALUE SMOOTHING */
function smoothVal(inputVal, outputVal) {
  let tarVal = inputVal;
  let calcVal = tarVal - outputVal;
  outputVal += calcVal * easing;
  return outputVal;
}