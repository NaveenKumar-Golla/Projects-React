import { useState } from 'react'

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)
  // const handleEditClick = () => setIsEditing(!isEditing)
  function handleNameChange(e) {
    const newName = e.target.value
    setPlayerName(newName)
    if (isEditing) {
      onChangeName(symbol, newName)
    }
  }
  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    )
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
