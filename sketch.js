let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#edddd4'); // 背景顏色

  // 生成 40 個圓的初始資料
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width), // 圓的 x 座標
      y: random(height), // 圓的 y 座標
      size: random(30, 100), // 圓的初始大小
      color: color(random(255), random(255), random(255)) // 鮮豔顏色
    });
  }
}

function draw() {
  background('#edddd4'); // 每次重繪背景

  // 計算圓大小的變化幅度
  let sizeOffset = map(mouseX, 0, width, 10, 120);

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset); // 圓大小隨滑鼠變化
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
