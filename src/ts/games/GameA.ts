export class GameA extends GameFramework.Game {
	firstStep() {
		console.log("GameA firstStep");

		this.endFirstStep();
	}

	secondStep() {
		console.log("GameA secondStep");

		this.endSecondStep();
	}
}