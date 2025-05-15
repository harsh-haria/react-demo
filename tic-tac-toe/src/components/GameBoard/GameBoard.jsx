import { useState } from "react";

let initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

let initalPlayer = true;

export default function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);
	const [playerTurn, setPlayerTurn] = useState(initalPlayer);

	function UpdateBoard(row, col) {
		if (gameBoard[row][col]) {
			return;
		}
		let character = playerTurn ? 'X' : 'O';
		let newGameBoard = [...gameBoard.map(innerArray => [...innerArray])];
		newGameBoard[row][col] = character;
		setGameBoard(newGameBoard);
		setPlayerTurn(playerTurn => !playerTurn);
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
