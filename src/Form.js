import { useState } from "react";

export default function Form({ addCard }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [id, setId] = useState(11); // Initialize id state with 1

  function handleQuestion(event) {
    setQuestion(event.target.value);
  }

  function handleAnswer(event) {
    setAnswer(event.target.value);
  }

  function clickAddButton(event) {
    event.preventDefault();
    const newFlashcard = {
      id: id,
      question: question,
      answer: answer,
    };
    addCard(newFlashcard);
    setQuestion("");
    setAnswer("");
    setId((prevId) => prevId + 1);
  }

  return (
    <form className="form" onSubmit={clickAddButton}>
      <label for="question">Question: </label>
      <input type="text" value={question} onChange={handleQuestion} />
      <label for="answer">Answer: </label>
      <input type="text" value={answer} onChange={handleAnswer} />
      <button type="submit">Add</button>
    </form>
  );
}
