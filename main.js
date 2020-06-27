const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");


//Function to draw the rectangle
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}  

drawRect(0, 0, cvs.width, cvs.height, "BLACK");

function drawCircle(x, y, r, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
}

drawCircle(100, 100, 50, "WHITE");

//change