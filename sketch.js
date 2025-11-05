let sceneLayer, maskLayer;
let ghost = {
  x: 640,
  y: 300,
  size: 0.5,
  visible: true,
  timer: 0,
  exposure: 0, // accumulated flashlight exposure time
};
let lightRadius = 200;

function setup() {
  createCanvas(1280, 720);
  sceneLayer = createGraphics(width, height);
  maskLayer = createGraphics(width, height);
}

function draw() {
  // === 1. Background ===
  sceneLayer.background(3, 3, 7);
  drawMountain(sceneLayer);
  drawRoad(sceneLayer);

  // === 2. Ghost ===
  updateGhost();
  drawGhost(sceneLayer);

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

// === Ghost logic ===
function updateGhost() {
  let d = dist(mouseX, mouseY, ghost.x, ghost.y);

  // If touched by flashlight, increase exposure time
  if (d < lightRadius) {
    ghost.exposure++;
  } else {
    ghost.exposure = max(ghost.exposure - 1, 0);
  }

  // Disappear after being exposed for more than 1 second (60 frames)
  if (ghost.exposure > 60 && ghost.visible) {
    ghost.visible = false; // instant disappearance
    ghost.timer = 0;
    ghost.exposure = 0;
  }

  // Reappear after 2 seconds (120 frames) with a larger size
  if (!ghost.visible) {
    ghost.timer++;
    if (ghost.timer > 120) {
      ghost.visible = true;
      ghost.size += 0.15;
      ghost.x = random(width * 0.3, width * 0.7);
      ghost.y = random(height * 0.3, height * 0.6);
    }
  }

  // Reset if the ghost becomes too large
  if (ghost.size > 2.5) {
    ghost.size = 0.5;
    ghost.y = 300;
  }
}

// === Draw ghost ===
function drawGhost(pg) {
  if (!ghost.visible) return;
  pg.push();
  pg.translate(ghost.x, ghost.y);
  pg.scale(ghost.size);

  // Head
  pg.noStroke();
  pg.fill(255);
  pg.ellipse(0, 0, 50, 70);

  // Eyes
  pg.strokeWeight(2);
  pg.stroke(0);
  pg.noFill();
  pg.ellipse(-10, -10, 17, 17);
  pg.ellipse(10, -10, 17, 17);

  pg.noStroke();
  pg.fill(0);
  pg.ellipse(-10, -10, 5, 5);
  pg.ellipse(10, -10, 5, 5);

  // Mouth
  pg.strokeWeight(4);
  pg.stroke(255, 0, 0);
  pg.noFill();
  pg.bezier(-20, 10, -10, 30, 10, 30, 20, 10);

  // Body
  pg.noStroke();
  pg.fill(255);
  pg.rect(-15, 35, 30, 120);

  // Legs
  pg.rect(-10, 155, 5, 100);
  pg.rect(5, 155, 5, 100);

  // Arms
  pg.rect(-30, 45, 5, 100);
  pg.rect(25, 45, 5, 100);

  pg.pop();
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
