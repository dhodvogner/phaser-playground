import { config } from "./config";
import { MyGame } from "./game";

let game: MyGame;
window.onload = () => {
  game = new MyGame(config);
};
