import logo from "./logo.svg";

function App() {
  return (
    <>
      <Header />
      <Form />
      <Flashcards />
    </>
  );
}


const initialFlashcards = [
  {
    "id": "1",
    "question": "What does JSX stand for?",
    "answer": "Javascript XML"
  },
  {
    "id": "2",
    "question": "What are the four stages of a component Life Cycle",
    "answer": "Intialization, Mount, Update, Unmount"
  },
  {
    "id": "3",
    "question": "What single page applications",
    "answer": "one page/template but updating using DOM"
  },
  {
    "id": "4",
    "question": "What is the syntax for event listeners",
    "answer": "<element onClick={handleClick}></element>"
  },
  {
      "id": "5",
      "question": "What is a component",
      "answer": "A function or class which returns that returns some HTML "
  },
  {
      "id": "6",
      "question": "In JSX how do you define a class?",
      "answer": "classname = "
  },
  {
      "id": "7",
      "question": "What is prop drilling?",
      "answer": "Parent component passing data down to children and then they pass down to their children"
  },
  {
      "id": "8",
      "question": "What is useEffect()?",
      "answer": "Perform side effects in lifecycle"
  },
  {
      "id": "9",
      "question": "What are hooks?",
      "answer": "They let you use state and other react features without writing a class"
  },
  {
      "id": "10",
      "question": "What does useState() do?",
      "answer": "Set and update state"
  }
];



function Header() {
  return (
    <header>
      <img src="logo192.png" alt="logo" width="50px" />
      <h1>React Flashcards</h1>
      <p>🧠 Expand Your React Knowledge, One Flashcard at a Time!🐌</p>
    </header>
  );
}

function Form() {
  return (
    <form>
      <label for="question">Question: </label>
      <input type="text" />
      <label for="answer">Answer: </label>
      <input type="text" />
      <button>Add</button>
    </form>
  );
}

function Flashcards() {
  return (
    <section>
    {initialFlashcards.map(({ id, question}) => {
      return (
        <div className="flashcard" key={id}>
        <p>🤔</p>
        <p>{ question }</p>
      </div>
      );
    })}
    </section>
  );
}

export default App;
