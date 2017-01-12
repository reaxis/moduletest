module GameFramework {
	interface GameFactory {
		new() : Game;
	}

	export abstract class Game {
		constructor() {
			console.log("Game constructor");

			this.firstStep();
		}

		/** Set up and explain the game */
		protected abstract firstStep() : void;

		/** End setting up and explaining */
		protected endFirstStep() : void {
			console.log("Game endFirstStep");

			this.secondStep();
		}

		/** Start playing */
		protected abstract secondStep() : void;

		/** End playing */
		protected endSecondStep() : void {
			console.log("Game endSecondStep");

			GameFramework.endGame();
		}
	}

	let games : GameFactory[];

	let currentGame : Game;

	export function init() {
		console.log("GameFramework init " + randomUtil());

		games = [
			GameA,
			GameB
		];

		currentGame = new games[0]();
	}

	export function endGame() : void {
		console.log("GameFramework endGame");
	}
}