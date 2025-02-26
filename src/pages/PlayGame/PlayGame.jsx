import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import HangMan from "../../components/HangMan/Hangman";


function PlayGame({state, guessedLetters, steps, correct, handleLetterClick}){

    return (
      <>
        <h1>Play Game</h1>

        <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />
        <div>
          <LetterButtons
            text={state.wordSelected}
            guessedLetters={guessedLetters}
            onLetterClick={handleLetterClick}
            steps={steps}
            win={correct === state.wordSelected.length}
          />
        </div>
        <HangMan steps={steps} win={correct === state.wordSelected.length} />
        <Link to={"/start"} className="text-blue-400">
          Start Game
        </Link>
      </>
    );
}

export default PlayGame;