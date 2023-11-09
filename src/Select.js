export default function SelectFlashcards({ sortByDifficulty }) {
  function handleDropdownChange(event) {
    console.log("new change");
    console.log(event);
    console.log(event.target.value);
    sortByDifficulty(event.target.value);
  }

  return (
    <div className="selectionContainer">
      <label for="choose-difficuly">Display Flashcards with difficulty: </label>
      <select name="difficulty" onChange={handleDropdownChange}>
        <option value="None">Choose difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
}
