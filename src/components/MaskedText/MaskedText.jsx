import { useNavigate } from "react-router-dom";
import { MaskedString } from "./MaskedTextUtility";

function MaskedText({text , guessedLetters}){
    const maskedString = MaskedString(text, guessedLetters);
    const navigate = useNavigate();
    return (
        <>
            {maskedString.map((letter, index) => {
                return(
                    <span key = {index} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </>
    )
}

export default MaskedText;