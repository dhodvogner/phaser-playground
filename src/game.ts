import { Game } from "phaser";

export class MyGame extends Game {
  constructor(config: any) {
    super(config);
    console.log('My Game! Yay!');
  }
}
