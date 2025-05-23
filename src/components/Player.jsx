import { useState } from "react";

export default function Player({ pName, pSymbol, isActive }) {
  const [playerNaming, setPlayerNaming] = useState(pName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prev) => !prev);
  }

  function handleChange(e) {
    setPlayerNaming(e.target.value);
  }

  let playerName = <span className="player-name">{playerNaming}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        value={playerNaming}
        required
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{pSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
