let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;

function drawBall (a, b) {
	ctx.beginPath();
	ctx.arc(a, b, 15, 0, Math.PI * 2);
	ctx.fillStyle = "#0095DD"
	ctx.fill();
	ctx.closePath();
}

function rand () {
	return Math.floor(Math.pow(Math.random() * 10, 2.5 * Math.ceil(Math.random(Math.pow(Math.random(), Math.random())))));
}

//Generate the list of coordinate sets.
let cords = [[rand(), rand()], [rand(), rand()], [rand(), rand()]]

function genPath (p1, p2, p3){
	// let [p1, p2, p3] = [cords[0], cords[1], cords[2]]
	let s1 = coordSets(p1, p2),
		s2 = coordSets(p2, p3),
		runSet = [[],[]];
	let a = s1[0], b = s2[0];
	a.push.apply(a, b);
	runSet[0].push(...a);
	
	a = s1[1]; b = s2[1];
	a.push.apply(a, b);
	runSet[1].push(...a);
	
	// console.log(`S1[0]: ${s1[0]}\nS2[0]: ${s2[0]}\n\n${runSet}\n\n----------BREAK----------\n\n`)
	// console.log(`S1 = ${s1[0].length}\n${s1[1].length}\n\nS2 = ${s2[0].length}\n${s2[1].length}\n\n\n\nRunset = ${runSet[0]}\n${runSet[1]}`)
	console.log(runSet[0][0][0])
	return runSet;
}

function coordSets (curr, dest) {
	let path = [[],[]];
	path[0].push(curr[0]);
	path[1].push(curr[1]);
	
	let [x, y] = [curr[0], curr[1]];
	
	let bigDiff;
	{
		let xDiff = -Math.abs(curr[0]) + Math.abs(dest[0]);
		let yDiff = -Math.abs(curr[1]) + Math.abs(dest[1]);
		
		if (xDiff > yDiff) {
			bigDiff = xDiff
		} else {
			bigDiff = yDiff
		}
	}
	
	//Find biggest difference and set bigDiff.
	for (let i=0; i<bigDiff; i++) {
		//check x
		//if more
		if(x > dest[0])
			x--;
		//if less
		if(x < dest[0])
			x++;
		//push x
		path[0].push(x);
		
		//check y
		//if more
		if(y > dest[1])
			y--;
		//if less
		if(y < dest[1])
			y++;
		//push y
		path[1].push(y);
	}
	return path;
}

//Check if you at a coordinate set.so
function isThere (curCord, destCord) {so
	if(curCord[0] == destCord[0] && curCord[1] == destCord[1]) return true;
}

let runSet = genPath(cords[0], cords[1], cords[2]);
console.log(runSet[0])
console.log(runSet[1])

function draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall(runSet[0].shift(), runSet[1].shift());
}



setInterval(draw, 25);
