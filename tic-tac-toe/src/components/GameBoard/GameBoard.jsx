import { useState } from "react";

let initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

let initalPlayer = true;

export default function GameBoard({ changeActivePlayer, activePlayerSymbol }) {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function UpdateBoard(row, col) {
		if (gameBoard[row][col]) {
			return;
		}
		let newGameBoard = [...gameBoard.map((innerArray) => [...innerArray])]; // deep copy of array
		newGameBoard[row][col] = activePlayerSymbol;
		setGameBoard(newGameBoard);
		changeActivePlayer();
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, _rowIndex) => (
				<li key={_rowIndex}>
					<ol>
						{row.map((col, _colIndex) => (
							<li key={_colIndex}>
								<button onClick={() => UpdateBoard(_rowIndex, _colIndex)}>
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
