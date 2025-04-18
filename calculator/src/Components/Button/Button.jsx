import "../Button/Button.css";

export default function Button(props) {
	const num = props.children;
	return (
		<button
			type="button"
			onClick={props.exec}
			className={props.className ? props.className : "button"}
		>
			{num}
		</button>
	);
}
