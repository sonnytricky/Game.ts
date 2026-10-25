import Phaser from "phaser";

class GameScene extends Phaser.Scene {
    private player!: Phaser.GameObjects.Rectangle;
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super("GameScene");
    }

    create() {
        // Hintergrund
        this.add.rectangle(400, 300, 800, 600, 0x87ceeb);

        // Spieler
        this.player = this.add.rectangle(400, 300, 40, 40, 0xff0000);

        // Tastatur
        if (this.input.keyboard) {
            this.cursors = this.input.keyboard.createCursorKeys();
        }
    }

    update() {
        const speed = 5;

        if (this.cursors.left.isDown) {
            this.player.x -= speed;
        }

        if (this.cursors.right.isDown) {
            this.player.x += speed;
        }

        if (this.cursors.up.isDown) {
            this.player.y -= speed;
        }

        if (this.cursors.down.isDown) {
            this.player.y += speed;
        }
    }
}

const config = {
    type: Phaser.AUTO,

    width: 800,
    height: 600,

    backgroundColor: "#222222",

    scene: [GameScene],
};

const game = new Phaser.Game(config);
