import { GameScene } from "./game.scene";

export const config = {
  title: "Phaser playground",
  width: 640,
  height: 480,
  parent: "game",
  backgroundColor: "#18216D",
  scene: [
    GameScene,
  ],
};
