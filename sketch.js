let sceneLayer, maskLayer;
let lightRadius = 200;

function setup() {
  createCanvas(1280, 720);
  sceneLayer = createGraphics(width, height);
  maskLayer = createGraphics(width, height);
  ghost = new Ghost(640, 300);
}

function draw() {
  // === 1. Background ===
  sceneLayer.background(3, 3, 7);
  drawMountain(sceneLayer);
  drawRoad(sceneLayer);

  // === 2. Ghost ===
  //updateGhost();
  ghost.update();
  ghost.ghostdraw(sceneLayer);

  // === 3. Flashlight ===
  maskLayer.background(0);
  maskLayer.noStroke();
  for (let i = lightRadius; i > 0; i -= 10) {
    let alpha = map(i, 0, lightRadius, 255, 0);
    alpha = pow(alpha / 255, 0.5) * 255;
    maskLayer.fill(alpha);
    maskLayer.ellipse(mouseX, mouseY, i * 2);
  }

  // === 4. Composite layers ===
  image(sceneLayer, 0, 0);
  blendMode(MULTIPLY);
  image(maskLayer, 0, 0);
  blendMode(BLEND);
}


// === Road ===
function drawRoad(pg) {
  let roadTopY = height * 0.45;
  pg.fill("#36453d");
  pg.rect(0, roadTopY, width, height * 0.55);
  pg.fill("#3e403e");
  pg.quad(width * 0.25, height, width * 0.75, height,
          width * 0.58, height * 0.45, width * 0.42, height * 0.45);
  pg.stroke(200, 180);
  pg.strokeWeight(2);
  pg.line(width / 2, height, width / 2, roadTopY);
}


// === Mountains ===
function drawMountain(pg) {
  pg.noStroke();
  pg.fill("#1d211f");
  pg.beginShape();
  for (let x = 0; x <= width; x += 10) {
    let y = height * 0.2 + noise(x * 0.002) * 60;
    pg.vertex(x, y);
  }
  pg.vertex(width, height * 0.45);
  pg.vertex(0, height * 0.45);
  pg.endShape(CLOSE);
  pg.fill("#202b21");
  pg.beginShape();
  for (let x = 0; x <= width; x += 10) {
    let y = height * 0.3 + noise(1000 + x * 0.003) * 100;
    pg.vertex(x, y);
  }
  pg.vertex(width, height * 0.45);
  pg.vertex(0, height * 0.45);
  pg.endShape(CLOSE);
}
