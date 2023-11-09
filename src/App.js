import logo from "./logo.svg";
import { useCallback, useState } from "react";

/* Things we need
- function to handle condition - either on question or on answer
- new function? to change to answer or question
- pass down function to flashcards
*/

// const uid = (() => ((id = 11), () => id++))();

const initialFlashcards = [
  {
    id: "1",
    question: "What does JSX stand for?",
    answer: "Javascript XML",
  },
  {
    id: "2",
    question: "What are the four stages of a component Life Cycle",
    answer: "Intialization, Mount, Update, Unmount",
  },
  {
    id: "3",
    question: "What are single page applications",
    answer: "one page/template but updating using DOM",
  },
  {
    id: "4",
    question: "What is the syntax for event listeners",
    answer: "<element onClick={handleClick}></element>",
  },
  {
    id: "5",
    question: "What is a component",
    answer: "A function or class which returns that returns some HTML ",
  },
  {
    id: "6",
    question: "In JSX how do you define a class?",
    answer: "classname = ",
  },
  {
    id: "7",
    question: "What is prop drilling?",
    answer:
      "Parent component passing data down to children and then they pass down to their children",
  },
  {
    id: "8",
    question: "What is useEffect()?",
    answer: "Perform side effects in lifecycle",
  },
  {
    id: "9",
    question: "What are hooks?",
    answer:
      "They let you use state and other react features without writing a class",
  },
  {
    id: "10",
    question: "What does useState() do?",
    answer: "Set and update state",
  },
];

function App() {
  const [flashcards, setFlashcards] = useState(initialFlashcards);

  function removeCard(id) {
    const updatedFlashcards = flashcards.filter(
      (flashcard) => flashcard.id !== id
    );
    setFlashcards(updatedFlashcards);
  }

  function editCard(updatedFlashcard) {
    console.log("does this work?");
    const updatedFlashcards = flashcards.map((flashcard) => {
      if (flashcard.id === updatedFlashcard.id) {
        return updatedFlashcard;
      }
      return flashcard;
    });
    console.log(updatedFlashcards);
    setFlashcards(updatedFlashcards);
  }

  function addCard(newFlashcard) {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  }

  return (
    <>
      <Header />
      <Form addCard={addCard} />
      <Flashcards
        removeCard={removeCard}
        flashcards={flashcards}
        editCard={editCard}
      />
      {/* // handleChange={handleChange} />
      <Flashcard /> */}
      <NumFlashcards flashcards={flashcards} />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <img src="logo192.png" alt="logo" width="50px" />
      <h1>React Flashcards</h1>
      <p>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</p>
    </header>
  );
}

function Form({ addCard }) {
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

function Flashcards({ flashcards, removeCard, editCard }) {
  return (
    <section>
      {flashcards.length > 0 ? (
        flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            flashcard={flashcard}
            removeCard={removeCard}
            editCard={editCard}
          />
        ))
      ) : (
        <p className="noFlashcard">
          You haven't added any flashcards yet! Start creating your learning
          set.
        </p>
      )}
    </section>
  );
}

function Flashcard({ flashcard, removeCard, editCard }) {
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
          <button
            className="editButton"
            style={{ backgroundColor: boxColor }}
            onClick={() => editCardContainer()}
          >
            Edit
          </button>
          <button
            className="deleteButton"
            style={{ backgroundColor: boxColor }}
            onClick={() => removeCard(flashcard.id)}
          >
            ❌
          </button>
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

function NumFlashcards({ flashcards }) {
  return (
    <p className="numFlashcards">
      You have added {flashcards.length} flashcards
    </p>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>Built with React</p>
      <img src="logo192.png" alt="logo" width="20px" className="footerpic" />
    </div>
  );
}

export default App;
