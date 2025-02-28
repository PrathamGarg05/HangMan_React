import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PlayGame from "./PlayGame";

function PlayGameContainer() {
    const { state } = useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [steps, setsteps] = useState(0);
    const [correct, setCorrect] = useState(0);
    const letterFrequency = {};
    state?.wordSelected
      .toUpperCase()
      .split("")
      .forEach((char) => {
        letterFrequency[char] = (letterFrequency[char] || 0) + 1;
      });
    function handleLetterClick(letter) {
      setGuessedLetters([...guessedLetters, letter]);
      if (state?.wordSelected.toUpperCase().includes(letter)) {
        setCorrect(correct + letterFrequency[letter]);
        console.log(correct);
      } else {
        setsteps(steps + 1);
        console.log("Wrong");
      }
    }

    return(
        <PlayGame 
            state={state}
            guessedLetters={guessedLetters}
            steps={steps}
            correct={correct}
            handleLetterClick={handleLetterClick}
        />
    )
}

export default PlayGameContainer;
