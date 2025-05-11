let initialGameBoard = [
    ['X', null, null],
    [null, null, 'O'],
    [null, 'X', null]
]

export default function GameBoard() {
    return (
			<ol id="game-board">
				{initialGameBoard.map((row, _rowIndex) => (
					<li key={_rowIndex}>
						<ol>
							{row.map((col, _colIndex) => (
								<li>
									<button key={_colIndex}>{col}</button>
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
		);
}