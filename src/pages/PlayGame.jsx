import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/Hangman";


function PlayGame(){

    const { state } = useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);

    const [steps, setsteps] = useState(0);
    const[correct, setCorrect] = useState(0);
    const letterFrequency = {};
    state.wordSelected.toUpperCase().split('').forEach(char => {
      letterFrequency[char] = (letterFrequency[char] || 0) + 1;
    });
    function handleLetterClick(letter){
          setGuessedLetters([...guessedLetters, letter]);
          if(state.wordSelected.toUpperCase().includes(letter)){
            setCorrect(correct + letterFrequency[letter]);
            console.log(correct);
          }else{
            setsteps(steps+1);
            console.log("Wrong");
          }
    }

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