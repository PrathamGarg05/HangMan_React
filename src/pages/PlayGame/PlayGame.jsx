import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import HangMan from "../../components/HangMan/Hangman";
import LetterButtonsContainer from "../../components/LetterButtons/LetterButtonsContainer";
import WordHint from "../../components/Hint/Hint";
import { useContext } from "react";
import { WordContext } from "../../context/WordContext";


function PlayGame({word, hint, guessedLetters, handleLetterClick}){

    const {steps, correct} = useContext(WordContext);


    return (
      <div className="flex flex-col h-full justify-center items-center">
        <h1 className="flex justify-center text-xl font-bold items-center">
          Play Game
        </h1>

        {word && (
          <div className="flex flex-row justify-evenly items-center h-full">
            <div className="m-10">
              <WordHint wordHint={hint} />
              <MaskedText text={word} guessedLetters={guessedLetters} />
              <div>
                <LetterButtonsContainer
                  text={word}
                  guessedLetters={guessedLetters}
                  onLetterClick={handleLetterClick}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <HangMan steps={steps} win={correct === word.length} />
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