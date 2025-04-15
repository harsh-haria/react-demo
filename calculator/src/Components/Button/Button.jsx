import "../Button/Button.css";

export default function Button(props) {
	return (
		<button type="button" className={props.className?props.className:"button"}>
			{props.children}
		</button>
	);
}
