import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import HangMan from "../../components/HangMan/Hangman";
import LetterButtonsContainer from "../../components/LetterButtons/LetterButtonsContainer";
import WordHint from "../../components/Hint/Hint";


function PlayGame({state, guessedLetters, steps, correct, handleLetterClick}){

    return (
      <div className="flex flex-col items-stretch">
        <h1 className="flex justify-center text-xl font-bold">Play Game</h1>

        {state?.wordSelected && (
          <div className="flex flex-row justify-evenly">
            <div className="m-10">
              <WordHint wordHint={state.wordHint} />
              <MaskedText
                text={state.wordSelected}
                guessedLetters={guessedLetters}
              />
              <div>
                <LetterButtonsContainer
                  text={state.wordSelected}
                  guessedLetters={guessedLetters}
                  onLetterClick={handleLetterClick}
                  steps={steps}
                  win={correct === state.wordSelected.length}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <HangMan
                steps={steps}
                win={correct === state.wordSelected.length}
              />
            </div>
          </div>
        )}

        <Link to={"/"} className="text-blue-400 flex justify-end m-4">
          Home Page
        </Link>
      </div>
    );
}

export default PlayGame;