import { calculateInvestmentResults } from "../../util/investment";

export default function ResultTable({ userInputFeilds }) {
	const initalInvestment = userInputFeilds.initalInvestment;
	const anualInvestment = userInputFeilds.anualInvestment;
	const expectedReturn = userInputFeilds.expectedReturn;
	const duration = userInputFeilds.duration;

	const data = calculateInvestmentResults({
		initialInvestment: +initalInvestment,
		annualInvestment: +anualInvestment,
		expectedReturn: +expectedReturn,
		duration: +duration,
	});

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => {
					return (
						<tr key={item.year}>
							<td>{item.year}</td>
							<td>{item.valueEndOfYear}</td>
							<td>{item.interest}</td>
							<td>{item.totalInterest}</td>
							<td>{item.totalInvestment}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
