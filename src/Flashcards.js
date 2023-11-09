import Flashcard from "./Flashcard.js";

export default function Flashcards({
  flashcards,
  removeCard,
  editCard,
  difficulty,
}) {
  return (
    <section>
      {flashcards.length > 0 ? (
        flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            flashcard={flashcard}
            removeCard={removeCard}
            editCard={editCard}
            difficulty={difficulty}
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
