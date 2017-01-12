import * as Utils from "./utils";

module GameFramework {
	interface GameFactory {
		new() : Game;
	}

	export abstract class Game {
		constructor() {
			console.log("Game constructor");

			this.firstStep();
		}

		protected abstract firstStep() : void;

		protected endFirstStep() : void {
			console.log("Game endFirstStep");

			this.secondStep();
		}

		protected abstract secondStep() : void;

		protected endSecondStep() : void {
			console.log("Game endSecondStep");

			GameFramework.endGame();
		}
	}

	let games : GameFactory[];

	let currentGame : Game;

	export function init() {
		console.log("GameFramework init " + Utils.randomUtil());

		// games = [
		// 	GameA,
		// 	GameB
		// ];

		// currentGame = new games[0]();
	}

	export function endGame() : void {
		console.log("GameFramework endGame");
	}
}