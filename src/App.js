import logo from "./logo.svg";
import { useCallback, useState } from "react";

/* Things we need
- function to handle condition - either on question or on answer
- new function? to change to answer or question
- pass down function to flashcards
*/

function App() {
  return (
    <>
      <Header />
      <Form />
      <Flashcards />
      {/* // handleChange={handleChange} />
      <Flashcard /> */}
      <Footer />
    </>
  );
}

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
    question: "What single page applications",
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

function Header() {
  return (
    <header>
      <img src="logo192.png" alt="logo" width="50px" />
      <h1>React Flashcards</h1>
      <p>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</p>
    </header>
  );
}

function Form() {
  return (
    <form className="form">
      <label for="question">Question: </label>
      <input type="text" />
      <label for="answer">Answer: </label>
      <input type="text" />
      <button>Add</button>
    </form>
  );
}

function Flashcards() {
  console.log(initialFlashcards);
  return (
    <section>
      {initialFlashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} {...flashcard} />
      ))}
    </section>
  );
}

function Flashcard({ id, question, answer }) {
  const [change, setChange] = useState(true);

  function changeCard() {
    setChange((prevChange) => (prevChange ? false : true));
    console.log(id)
  }

  function removeCard(id) {
    // let updatedFlashcards = initialFlashcards.splice(id, 1);
    const updatedFlashcards = initialFlashcards.filter(
      (id) => id !== id
    
    );
    console.log(id)
    // return updatedFlashcards.map()
    console.log("clicked");

    console.log(Flashcard.id);
    console.log(updatedFlashcards);
    // return (
    //   <section>
    //     {updatedFlashcards.map((flashcard) => (
    //       <Flashcard key={flashcard.id} {...flashcard} />
    //     ))}
    //   </section>
    // );

    // console.log("Hi")
    // console.log(id)
    // Flashcards()
  }

  return (
    <div>
      {" "}
      <button className="deleteButton" onClick={removeCard}>
        ❌
      </button>
      <div className="flashcard" onClick={changeCard}>
        <p className="thinking">🤔</p>
        {change ? (
          <p className="question">{question}</p>
        ) : (
          <p className="question">{answer}</p>
        )}
      </div>
    </div>
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
