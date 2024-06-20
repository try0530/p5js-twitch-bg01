let colorPatterns = [
  ["#e9edc9", "#9CA383"],
  ["#caf0f8", "#0077b6"],
  ["#fcd5ce", "#f07167"],
  ["#d1c8f4", "#C28299"], //ffafcc
  ["#ddbea9", "#cb997e"],
  ["#97BAB7", "#ffbf69"],
  ["#3a6ea5", "#fcd5ce"],
];

let getPattern;

function setup() {
  getPattern = int(random(0, 7));
  createCanvas(1600, 900);
  background(colorPatterns[getPattern][0]);
  drawBackground();
  drawBoxes();
  drawInfos();
}

// draw background
function drawBackground() {
  let x = 0;
  let y = 0;
  let gap = int(random(75, 100));
  let drawRandom = 1; //int(random(2));
  scale(0.8);

  switch (drawRandom) {
    case 0:
      for (i = 0; i < 1200; i++) {
        drawDiamond(x + i * gap, y, i);
      }
      break;
    case 1:
      for (i = 0; i < 1200; i++) {
        drawTriangle(x + i * gap, y, i);
      }
      break;
    default:
      break;
  }
}

/* background pattern */
// draw diamond
function drawDiamond(x, y, i) {
  // set start of diamond
  let x1 = x;
  let y1 = i % 2 === 0 ? y : y + 50;

  // using quad to draw diamond, ellipse to draw circle
  push();
  strokeWeight(3);
  stroke(colorPatterns[getPattern][1]);
  noFill();
  quad(x1, y1, x1 + 20, y1 + 20, x1, y1 + 40, x1 - 20, y1 + 20);
  fill(colorPatterns[getPattern][1]);
  quad(x1, y1 + 40, x1 + 15, y1 + 55, x1, y1 + 70, x1 - 15, y1 + 55);
  noFill();
  quad(x1, y1 + 70, x1 + 20, y1 + 90, x1, y1 + 110, x1 - 20, y1 + 90);
  fill(colorPatterns[getPattern][1]);
  quad(x1, y1 + 110, x1 + 15, y1 + 125, x1, y1 + 140, x1 - 15, y1 + 125);
  noFill();
  ellipse(x1, y1 + 150, 10);
  ellipse(x1, y1 + 165, 10);
  fill(colorPatterns[getPattern][1]);
  strokeWeight(1);
  quad(x1, y1 + 175, x1 + 5, y1 + 185, x1, y1 + 260, x1 - 5, y1 + 185);
  pop();
}

// draw triangle
function drawTriangle(x, y, i) {
  let x1 = x;
  let y1 = i % 2 === 0 ? y : y + 150;

  push();
  strokeWeight(3);
  stroke(colorPatterns[getPattern][1]);
  noFill();
  triangle(x1 - 36, y1 + 40, x1, y1, x1 + 36, y1 + 40);
  fill(colorPatterns[getPattern][1]);
  triangle(x1 - 27, y1 + 60, x1, y1 + 25, x1 + 27, y1 + 60);
  noFill();
  triangle(x1 - 15, y1 + 65, x1, y1 + 80, x1 + 15, y1 + 65);
  triangle(x1 - 30, y1 + 110, x1, y1 + 85, x1 + 30, y1 + 110);
  fill(colorPatterns[getPattern][1]);
  triangle(x1 - 15, y1 + 120, x1, y1 + 100, x1 + 15, y1 + 120);
  noFill();
  triangle(x1 - 10, y1 + 130, x1, y1 + 140, x1 + 10, y1 + 130);
  triangle(x1 - 24, y1 + 160, x1, y1 + 140, x1 + 24, y1 + 160);
  fill(colorPatterns[getPattern][1]);
  triangle(x1 - 12, y1 + 170, x1, y1 + 155, x1 + 12, y1 + 170);
  noFill();
  triangle(x1 - 10, y1 + 175, x1, y1 + 185, x1 + 10, y1 + 175);
  ellipse(x1, y1 + 194, 6, 6);
  ellipse(x1, y1 + 204, 4, 4);
  pop();
}

/* draw chat box and stream box */
// draw boxes
function drawBoxes() {
  streamBox();
  chatBox();
}

// draw stream box
function streamBox() {
  push();
  strokeWeight(3);
  stroke("#ffffff");
  noFill();

  // the first frame
  // rect(x, y, width, height, radius);
  fill(255, 255, 255, 150); // rgba(100, 150, 200, 150)
  rect(50, 50, 1600, 900, 24);

  // the second frame
  noFill();
  stroke(colorPatterns[getPattern][1]);
  // arc(x, y, wr, hr, start, end)
  arc(75, 120, 80, 80, PI, (3 * PI) / 2);
  arc(120, 75, 80, 80, PI, (3 * PI) / 2);
  line(35, 120, 35, 880);
  arc(75, 880, 80, 80, HALF_PI, PI);
  arc(120, 925, 80, 80, HALF_PI, PI);
  line(120, 965, 1580, 965);
  arc(1580, 925, 80, 80, 0, HALF_PI);
  arc(1625, 880, 80, 80, 0, HALF_PI);
  line(1665, 880, 1665, 120);
  arc(1625, 120, 80, 80, -HALF_PI, 0);
  arc(1580, 75, 80, 80, -HALF_PI, 0);
  line(1580, 35, 120, 35);
  pop();
}

// draw chat box
function chatBox() {
  push();
  noStroke();

  // draw the chat box background
  fill(255, 255, 255, 150);
  rect(1680, 50, 310, 700, 24);

  // dash in the chat box
  stroke(colorPatterns[getPattern][1]);
  strokeWeight(2);
  strokeCap(SQUARE);
  setLineDash([5, 10, 30, 10]);

  line(1700, 70, 1700, 720); // right
  line(1700, 720, 1970, 720); // bottom
  line(1970, 720, 1970, 70); // left
  line(1970, 70, 1700, 70); // top

  pop();
}

// draw informations
function drawInfos() {
  stroke("#ffffff");
  strokeWeight(2);
  fill(255, 255, 255, 150);

  push();
  rect(50, 1000, 1600, 100, 24);
  pop();
}

// function to let line become dashed
function setLineDash(list) {
  drawingContext.setLineDash(list);
}
