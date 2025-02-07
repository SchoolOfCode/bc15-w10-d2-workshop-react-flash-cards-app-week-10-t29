import logo from "./logo.svg";
import { useState } from "react";
import initialFlashcards from "./flashcards.json";
import Header from "./Header.js";
import SelectFlashcards from "./Select.js";
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
  const [difficulty, setDifficulty] = useState("None");

  function removeCard(idToDelete) {
    const updatedFlashcards = flashcards.filter(
      (flashcard) => flashcard.id !== idToDelete
    );

    setFlashcards(updatedFlashcards);
  }

  function editCard(editedFlashcard) {
    // console.log("does this work?");
    const updatedFlashcards = flashcards.map((flashcard) => {
      if (flashcard.id === editedFlashcard.id) {
        return editedFlashcard;
      }
      return flashcard;
    });
    // console.log(updatedFlashcards);

    setFlashcards(updatedFlashcards);
  }

  function addCard(newFlashcard) {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  }

  function sortByDifficulty(difficultyValue) {
    setDifficulty(difficultyValue);
  }

  return (
    <>
      <Header />
      <SelectFlashcards sortByDifficulty={sortByDifficulty} />
      <Form addCard={addCard} />
      <Flashcards
        removeCard={removeCard}
        flashcards={flashcards}
        editCard={editCard}
        difficulty={difficulty}
      />
      <NumFlashcards flashcards={flashcards} />
      <Footer />
    </>
  );
}

export default App;
