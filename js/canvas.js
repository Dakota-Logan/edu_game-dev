const GAME = new Phaser.Game(480, 320, Phaser.AUTO, null, { preload, create, update });

function preload() {
	GAME.scale.scaleMode             = Phaser.ScaleManager.SHOW_ALL;
	GAME.scale.pageAlignHorizontally = true;
	GAME.scale.pageAlignVertically   = true;
	GAME.stage.backgroundColor       = "#EEE";
}

function create() {

}

function update() {

}