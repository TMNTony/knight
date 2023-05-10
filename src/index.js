import "./style.css";
import board from "./board.js";
import knightTravails from "./algo";

const controller = (function () {
  board();
  knightTravails([3, 3], [4, 3]);
}());
