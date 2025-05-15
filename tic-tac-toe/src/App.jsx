import "./index.css";

import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import { useState } from "react";

function App() {
	let [activePlayer, setActivePlayer] = useState("X");

	function changePlayer() {
		setActivePlayer((activeP) => {
			return activeP === "X" ? "O" : "X";
		});
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName="Player 1"
						symbol="X"
						activated={activePlayer === "X"}
					/>
					<Player
						initialName="Player 2"
						symbol="O"
						activated={activePlayer === "O"}
					/>
				</ol>
				<GameBoard
					changeActivePlayer={changePlayer}
					activePlayerSymbol={activePlayer}
				/>
			</div>
			LOG
		</main>
	);
}

export default App;
