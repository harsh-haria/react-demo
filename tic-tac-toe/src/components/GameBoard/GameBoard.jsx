// import { useState } from "react";

let initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

// let initalPlayer = true;

export default function GameBoard({ changeActivePlayer, turns }) {
	let gameBoard = initialGameBoard;

	for (const turn of turns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, _rowIndex) => (
				<li key={_rowIndex}>
					<ol>
						{row.map((col, _colIndex) => (
							<li key={_colIndex}>
								<button
									onClick={() => changeActivePlayer(_rowIndex, _colIndex)}
								>
									{col}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
