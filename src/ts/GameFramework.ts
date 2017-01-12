import * as Utils from "./utils";
import { Game } from "./Game";

import { GameA } from "./games/GameA";
import { GameB } from "./games/GameB";

export module GameFramework {
	interface GameFactory {
		new() : Game;
	}

	let games : GameFactory[];

	let currentGame : Game;

	export function init() {
		console.log("GameFramework init " + Utils.randomUtil());

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

(<any>window).init = GameFramework.init;