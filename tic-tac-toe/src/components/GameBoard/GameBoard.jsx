// import { useState } from "react";



// let initalPlayer = true;

export default function GameBoard({ changeActivePlayer, board }) {
	

	return (
		<ol id="game-board">
			{board.map((row, _rowIndex) => (
				<li key={_rowIndex}>
					<ol>
						{row.map((col, _colIndex) => (
							<li key={_colIndex}>
								<button
									onClick={() => changeActivePlayer(_rowIndex, _colIndex)}
									disabled={col ? true : false}
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
