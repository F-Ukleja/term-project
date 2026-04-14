const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//♦♦ Ball properties ♦♦\\
let x = 50;
let y = 50;
let radius = 30;
let dx = 5;   //♦♦ horizontal speed ♦♦\\
let dy = 3;   //♦♦ vertical speed ♦♦\\

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#00ffcc";
  ctx.fill();
  ctx.closePath();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();

  //♦♦ Bounce off walls ♦♦\\
  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx;
  }

  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy;
  }

  //♦♦ Move ball ♦♦\\
  x += dx;
  y += dy;

  requestAnimationFrame(update);
}

update();
