const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let xMax = canvas.height = canvas.width;
let yMax = xMax;
ctx.transform(1, 0, 0, -1, 0, xMax)


ctx.fillStyle = "blue";
const numPoints = 300;
const xPoints = [];
const yPoints = []; 

for (let i = 0; i < numPoints; i++) {
  xPoints[i] = Math.random() * xMax;     
  yPoints[i] = Math.random() * xMax; 
  ctx.beginPath();
  ctx.ellipse(xPoints[i], yPoints[i], 3, 3, 0, 0, Math.PI * 2);
  ctx.fill();
}

// chiziq
let slope = 1.2;
let intercept = 70;

ctx.beginPath();
ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.stroke();

function f(x) {
    return x * 0.9 + 50;    // y = x * 1.2 + 50
}

// Rangini o'zgartrish funksiyasi
function plotPoint(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Nuqtalarni aniqlash 

let desired = [];
for (let i = 0; i < numPoints; i++) {

  desired[i] = 0;
  if (yPoints[i] > f(xPoints[i])) {desired[i] = 1;}

  let color = "blue";
  if (desired[i]) color = "red";
  plotPoint(xPoints[i], yPoints[i], color); 

} 


  

