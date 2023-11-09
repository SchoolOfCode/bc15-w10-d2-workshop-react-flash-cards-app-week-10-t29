import { useState } from "react";

export default function Flashcard({ flashcard, removeCard, editCard }) {
  const [change, setChange] = useState(true);
  const [edit, setEdit] = useState(true);
  const [boxColor, setBoxColor] = useState("#323949");
  const [editQuestion, setEditQuestion] = useState(flashcard.question);
  const [editAnswer, setEditAnswer] = useState(flashcard.answer);

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
    };
    // addCard(newFlashcard);
    // setQuestion("");
    // setAnswer("");
    editCard(newFlashcard);
    editCardContainer();
  }

  return (
    <>
      {" "}
      {edit ? (
        <div className="information" style={{ backgroundColor: boxColor }}>
          <div className="buttonContainer">
            <button
              className="editButton"
              style={{ backgroundColor: boxColor }}
              onClick={() => editCardContainer()}
            >
              Edit
            </button>
            <button className="difficulty">Difficulty</button>
            <button
              className="deleteButton"
              style={{ backgroundColor: boxColor }}
              onClick={() => removeCard(flashcard.id)}
            >
              ❌
            </button>
          </div>
          <div className="flashcard" onClick={changeCard}>
            {change ? <p className="emoji">🤔</p> : <p className="emoji">🤯</p>}
            {change ? (
              <p className="text">{flashcard.question}</p>
            ) : (
              <p className="text">{flashcard.answer}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="information" style={{ backgroundColor: "#323949" }}>
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
      )}
    </>
  );
}
