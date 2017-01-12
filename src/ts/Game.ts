import { GameFramework } from "./GameFramework";

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