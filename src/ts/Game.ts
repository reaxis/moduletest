export interface GameFactory {
	new(finish : () => void) : Game;
}

export abstract class Game {
	constructor(protected finish : () => void) {
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

		this.finish();
	}
}