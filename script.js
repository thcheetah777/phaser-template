let game = {}
class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  preload() {
    this.engine = new Engine(this);
  }
  create() {
    this.engine.pixelCursor();
  }
  update() {
    this.engine.updatePixelCursor();
  }
}
