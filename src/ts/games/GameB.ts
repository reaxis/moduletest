import { Game } from "../Game";

export class GameB extends Game {
	firstStep() {
		console.log("GameB firstStep");

		this.endFirstStep();
	}

	secondStep() {
		console.log("GameB secondStep");

		this.endSecondStep();
	}
}