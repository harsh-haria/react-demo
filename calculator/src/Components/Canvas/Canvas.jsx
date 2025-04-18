import { useState } from "react";

import Button from "../Button/Button";
import InputWindow from "../InputWindow/InputWindow";

export default function Canvas() {
	const [operandOne, setOperandOne] = useState(0);
	const [operandTwo, setOperandTwo] = useState(0);
	const [operator, setOperator] = useState(null);
	const [screenNum, setScreenNum] = useState("0");

	function updateScreenNum(num) {
		if (!operator) {
			let screenDisplayNum = operandOne != "0" ? operandOne + num : num;
			setOperandOne(Number(screenDisplayNum));
			setScreenNum(screenDisplayNum);
		} else {
			let screenDisplayNum = operandTwo != "0" ? operandTwo + num : num;
			setOperandTwo(Number(screenDisplayNum));
			setScreenNum(screenDisplayNum);
		}
	}

	function setOperatorFunc(operator) {
		setOperator(operator);
	}

	function clear() {
		setOperator(null);
		setScreenNum("0");
		setOperandOne(0);
		setOperandTwo(0);
	}

	function calculate() {
		let ans = 0;

		if (!operator) {
			return;
		}

		switch (operator) {
			case "+":
				ans = operandOne + operandTwo;
				break;

			case "-":
				ans = operandOne - operandTwo;
				break;

			case "X":
				ans = operandOne * operandTwo;
				break;

			case "/":
				ans = operandOne / operandTwo;
				break;

			default:
				ans = operandOne;
		}
		setScreenNum(ans);
		setOperandOne(ans);
		setOperandTwo("0");
		setOperator(null);
	}

	return (
		<div>
			<InputWindow>{screenNum}</InputWindow>
			<br></br>
			<Button exec={() => updateScreenNum("1")}>1</Button>
			<Button exec={() => updateScreenNum("2")}>2</Button>
			<Button exec={() => updateScreenNum("3")}>3</Button>
			<Button exec={() => setOperatorFunc("+")}>+</Button>
			<br></br>
			<Button exec={() => updateScreenNum("4")}>4</Button>
			<Button exec={() => updateScreenNum("5")}>5</Button>
			<Button exec={() => updateScreenNum("6")}>6</Button>
			<Button exec={() => setOperatorFunc("-")}>-</Button>
			<br></br>
			<Button exec={() => updateScreenNum("7")}>7</Button>
			<Button exec={() => updateScreenNum("8")}>8</Button>
			<Button exec={() => updateScreenNum("9")}>9</Button>
			<Button exec={() => setOperatorFunc("X")}>X</Button>
			<br></br>
			<Button exec={clear}>C</Button>
			<Button exec={() => updateScreenNum("0")}>0</Button>
			<Button exec={calculate}>=</Button>
			<Button exec={() => setOperatorFunc("/")}>/</Button>
		</div>
	);
}
