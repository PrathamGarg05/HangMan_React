import { useNavigate } from "react-router-dom";
import { MaskedString } from "./MaskedTextUtility";

function MaskedText({text , guessedLetters}){
    const maskedString = MaskedString(text, guessedLetters);
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap justify-center text-3xl m-8 mb-14"> 
            {maskedString.map((letter, index) => {
                return(
                    <span key = {index} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </div>
    )
}

export default MaskedText;