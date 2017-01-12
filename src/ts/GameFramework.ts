import * as Utils from "./utils";
import { GameFactory, Game } from "./Game";

import { GameA } from "./games/GameA";
import { GameB } from "./games/GameB";

module GameFramework {
	let games : GameFactory[];

	let currentGame : Game;

	export function init() : void {
		console.log("GameFramework init " + Utils.randomUtil());

		games = [
			GameA,
			GameB
		];

		currentGame = new games[0](endGame);
	}

	function endGame() : void {
		console.log("GameFramework endGame");
	}
}

(<any>window).init = GameFramework.init;