import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import PlayGame from "./PlayGame";
import { WordContext } from "../../context/WordContext";

function PlayGameContainer() {
    // const { state } = useLocation();
    const{word, hint,steps,setSteps,correct,setCorrect} = useContext(WordContext);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const letterFrequency = {};
    word
      ?.toUpperCase()
      .split("")
      .forEach((char) => {
        letterFrequency[char] = (letterFrequency[char] || 0) + 1;
      });
    function handleLetterClick(letter) {
      setGuessedLetters([...guessedLetters, letter]);
      if (word?.toUpperCase().includes(letter)) {
        setCorrect(correct + letterFrequency[letter]);
        console.log(correct);
      } else {
        setSteps(steps + 1);
        console.log("Wrong");
      }
    }

    return(
        <PlayGame 
            word={word}
            hint={hint}
            guessedLetters={guessedLetters}
            handleLetterClick={handleLetterClick}
        />
    )
}

export default PlayGameContainer;
