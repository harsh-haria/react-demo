import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";
import { useState } from "react";

function App() {
	const [userInputFeilds, setUserInputFields] = useState({
		initalInvestment: 100000,
		anualInvestment: 12000,
		expectedReturn: 12,
		duration: 10,
	});

	const durationCheck = userInputFeilds.duration >= 1;

	function inputChangeHandler(identifier, value) {
		setUserInputFields((prevUserInputFeilds) => {
			return {
				...prevUserInputFeilds,
				[identifier]: value,
			};
		});
	}

	console.log(userInputFeilds);

	return (
		<>
			<Header />
			<UserInput
				userInputFeilds={userInputFeilds}
				valueChangeHandler={inputChangeHandler}
			/>
			{ !durationCheck && <p className="center">Please enter duration greater than 0</p> }
			{ durationCheck && <ResultTable userInputFeilds={userInputFeilds} /> }
		</>
	);
}

export default App;
