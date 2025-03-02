import { useContext } from "react";
import { WordContext } from "../../context/WordContext";

export function MaskedString(originalWord, guessedLetters){
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());

    const{word, steps} = useContext(WordContext);
     
    const guessedLetterSet = new Set(guessedLetters);

    const result = originalWord.toUpperCase().split('').map(char => {
        if(guessedLetterSet.has(char)){
            return char;
        }else{
            return '_';
        }
    });
    return (steps === 7 ? word.toUpperCase().split('') : result);

}