export default function UserInput({ userInputFeilds, valueChangeHandler }) {
	return (
		<div id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment:</label>
					<input
						type="number"
						required
						value={userInputFeilds.initalInvestment}
						onChange={(event) =>
							valueChangeHandler("initalInvestment", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Annual Investment:</label>
					<input
						type="number"
						required
						value={userInputFeilds.anualInvestment}
						onChange={(event) =>
							valueChangeHandler("anualInvestment", event.target.value)
						}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return:</label>
					<input
						type="number"
						required
						value={userInputFeilds.expectedReturn}
						onChange={(event) =>
							valueChangeHandler("expectedReturn", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Duration:</label>
					<input
						type="number"
						required
						value={userInputFeilds.duration}
						onChange={(event) =>
							valueChangeHandler("duration", event.target.value)
						}
					/>
				</p>
			</div>
		</div>
	);
}
