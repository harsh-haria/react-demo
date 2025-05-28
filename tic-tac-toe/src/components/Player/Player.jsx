import { useState } from "react";

export default function Player({ initialName, symbol, activated, nameChange }) {
	const [name, setName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		// setIsEditing(!isEditing); // can be done this way but doesnt guarantee the latest value
		setIsEditing((editing) => !editing); // using a function gets the latest value.
		nameChange(symbol, name);	
	}

	function handleNameChange(event) {
		let newName = event.target.value;
		setName(newName);
	}

	return (
		<li className={activated ? "active" : undefined}>
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
