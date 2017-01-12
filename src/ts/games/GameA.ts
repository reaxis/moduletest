import { Game } from "../Game";

export class GameA extends Game {
	firstStep() {
		console.log("GameA firstStep");

		this.endFirstStep();
	}

	secondStep() {
		console.log("GameA secondStep");

		this.endSecondStep();
	}
}