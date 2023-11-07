import logo from "./logo.svg";

function App() {
  return (
    <>
      <Header />
      <Form />
    </>
  );
}

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

export default App;
