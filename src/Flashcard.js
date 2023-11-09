import { useState } from "react";

export default function Flashcard({
  flashcard,
  removeCard,
  editCard,
  difficulty,
}) {
  const [change, setChange] = useState(true);
  const [edit, setEdit] = useState(true);
  const [boxColor, setBoxColor] = useState("#323949");
  const [editQuestion, setEditQuestion] = useState(flashcard.question);
  const [editAnswer, setEditAnswer] = useState(flashcard.answer);
  const [boxBorderColor, setBoxBorderColor] = useState("#323949");

  function changeCard() {
    setChange((prevChange) => (prevChange ? false : true));
    setBoxColor((prevBoxColor) =>
      prevBoxColor === "#323949" ? "skyblue" : "#323949"
    );
  }

  function editCardContainer() {
    setEdit((prevEdit) => (prevEdit ? false : true));
  }

  function handleEditQuestion(event) {
    setEditQuestion(event.target.value);
  }

  function handleEditAnswer(event) {
    setEditAnswer(event.target.value);
  }

  function clickEditButton(event) {
    event.preventDefault();
    const newFlashcard = {
      id: flashcard.id,
      question: editQuestion,
      answer: editAnswer,
      difficulty: flashcard.difficulty,
    };
    // addCard(newFlashcard);
    // setQuestion("");
    // setAnswer("");
    editCard(newFlashcard);
    editCardContainer();
  }

  function handleDropdownChange(event) {
    const difficulty = event.target.value;

    if (difficulty === "None") setBoxBorderColor("#323949");
    if (difficulty === "Easy") setBoxBorderColor("green");
    if (difficulty === "Medium") setBoxBorderColor("orange");
    if (difficulty === "Hard") setBoxBorderColor("red");
    console.log(event.target);
    console.log(flashcard.id);

    const newFlashcard = {
      id: flashcard.id,
      question: flashcard.question,
      answer: flashcard.answer,
      difficulty: difficulty,
    };

    // addCard(newFlashcard);
    // setQuestion("");
    // setAnswer("");
    editCard(newFlashcard);
  }

  return (
    <>
      <div
        className={
          (edit && difficulty === flashcard.difficulty) ||
          (edit && difficulty === "None")
            ? "information"
            : "information hidden"
        }
        style={{
          backgroundColor: boxColor,
          border: `thick solid ${boxBorderColor}`,
        }}
      >
        <div className="buttonContainer">
          <button
            className="editButton"
            style={{ backgroundColor: boxColor }}
            onClick={() => editCardContainer()}
          >
            Edit
          </button>
          <div>
            <label for="difficuly"></label>
            <select name="difficulty" onChange={handleDropdownChange}>
              <option value="None">Select Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <button
            className="deleteButton"
            style={{ backgroundColor: boxColor }}
            onClick={() => removeCard(flashcard.id)}
          >
            ❌
          </button>
        </div>
        <div className="flashcard" onClick={changeCard}>
          <p className={change ? "emoji" : "emoji hidden"}>🤔</p>
          <p className={change ? "emoji hidden" : "emoji"}>🤯</p>
          <p className={change ? "text" : "text hidden"}>
            {flashcard.question}
          </p>
          <p className={change ? "text hidden" : "text"}>{flashcard.answer}</p>
        </div>
      </div>

      <div
        className={edit ? "information hidden" : "information"}
        style={{ backgroundColor: "#323949" }}
      >
        <form className="editForm" onSubmit={clickEditButton}>
          <label for="question">Question: </label>
          <input
            type="text"
            value={editQuestion}
            onChange={handleEditQuestion}
          />
          <label for="answer">Answer: </label>
          <input type="text" value={editAnswer} onChange={handleEditAnswer} />
          <button type="submit">Edit</button>
        </form>
      </div>
    </>
  );
}
