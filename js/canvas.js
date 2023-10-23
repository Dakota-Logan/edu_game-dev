let canvas = document.getElementById("canvas1");
let ctx    = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;

const BALLRADIUS = 10;
let dx           = 2,
	dy           = -2;

//Brick defs
const BRICKROWCOUNT = 3,
	  BRICKCOLUMNCOUNT = 5,
	  BRICKWIDTH = 75,
	  BRICKHEIGHT = 20,
	  BRICKPADDING = 10,
	  BRICKOFFSETTOP = 30,
	  BRICKOFFSETLEFT = 30;

//Paddle defs
const PADDLEHEIGHT = 10;
const PADDLEWIDTH  = 75;
let paddleX        = (canvas.width - PADDLEWIDTH) / 2;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, BALLRADIUS, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - PADDLEHEIGHT, PADDLEWIDTH, PADDLEHEIGHT);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

let rightPressed = false,
	leftPressed  = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if(e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = true;
	}
	else if(e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = true;
	}
}
function keyUpHandler(e) {
	if(e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = false;
	}
	else if(e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = false;
	}
}

const BRICKS = [];
for (let c = 0; c < BRICKCOLUMNCOUNT; c++) {
	bricks[c] = [];
	for (let r = 0; r < BRICKROWCOUNT; r++) {
		bricks[c][r] = { x: 0, y: 0 };
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawPaddle();
	
	if (x + dx > canvas.width - BALLRADIUS || x + dx < BALLRADIUS) {
		dx = -dx;
	}
	if (y + dy < BALLRADIUS) {
		dy = -dy;
	} else if (y +dy > canvas.height - BALLRADIUS) {
		if (x > paddleX && x < paddleX + PADDLEWIDTH) {
			dy = -dy;
		} else {
			alert("GAME OVER");
			document.location.reload();
			clearInterval(interval);
		}
	}
	
	x += dx;
	y += dy;
	
	if(rightPressed) {
		paddleX = Math.min(paddleX + 10, canvas.width - PADDLEWIDTH);
		if (paddleX + paddleWidth > canvas.width){
			paddleX = canvas.width - paddleWidth;
		}
	}
	else if(leftPressed) {
		paddleX -= 10;
		if (paddleX < 0){
			paddleX = 0;
		}
	}
	
}


const interval = setInterval(draw, 10);
