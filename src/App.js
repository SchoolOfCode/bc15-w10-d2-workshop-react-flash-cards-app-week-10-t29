import logo from "./logo.svg";
import { useState } from "react";
import initialFlashcards from "./flashcards.json";
import Header from "./Header.js";
import Form from "./Form.js";
import Flashcards from "./Flashcards.js";
import NumFlashcards from "./NumFlashcards.js";
import Footer from "./Footer.js";

/* Things we need
- function to handle condition - either on question or on answer
- new function? to change to answer or question
- pass down function to flashcards
*/

// const uid = (() => ((id = 11), () => id++))();

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

export default App;
