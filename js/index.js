import {
	Actor,
	CollisionStartEvent,
	CollisionType,
	Color,
	Engine,
	vec
} from "excalibur";

const game = new Engine({
	width: 800,
	height: 600
});

const paddle = new Actor({
	x: 150,
	y: game.drawHeight - 40,
	width: 200,
	height: 20,
	color: Color.Chartreuse,
});

paddle.body.collisionType = CollisionType.fixed;
game.add(paddle);

game.start();