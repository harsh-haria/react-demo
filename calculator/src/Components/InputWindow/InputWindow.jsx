import "../InputWindow/InputWindow.css";

export default function Button(props) {
	return (
		<div>
			<input
				type="text"
				className="InputWindow"
				value={props.children}
				readOnly
			/>
		</div>
	);
}
