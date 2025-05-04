import { useState } from "react";

export default function Player({ initialName, symbol }) {
	const [name, setName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		// setIsEditing(!isEditing); // can be done this way but doesnt guarantee the latest value
		setIsEditing((editing) => !editing); // using a function gets the latest value.
	}

	function handleNameChange(event) {
		setName(event.target.value);
	}

	return (
		<li>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						value={name}
						required
						onChange={handleNameChange}
					/>
				) : (
					<span className="player-name">{name}</span>
				)}

				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
