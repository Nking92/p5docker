function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  smooth();
  noStroke();
}

function draw() {
  if (frameCount % 3 == 0) {
    fill(lum(1.5*frameCount), lum(2.5*frameCount), lum(2*frameCount));
    push();
    translate(windowWidth / 2, windowHeight / 2);
    rotate(radians(frameCount * 2  % 360));
    rect(0, 0, windowWidth * .35, windowWidth * .1);
    pop();
  }
}

function lum(frame) {
    if (frame % 255 < 128) {
        return frame % 255
    }
    else {
        return 255-(frame%255)
    }
}