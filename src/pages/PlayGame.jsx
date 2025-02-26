import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";


function PlayGame(){

    const { state } = useLocation();
    return (
      <>
        <h1>Play Game {state.wordSelected} </h1>

        <MaskedText text = {state.wordSelected} guessedLetters={['H','E']}
        />
        <Link to={"/start"} className="text-blue-400">
          Start Game
        </Link>
      </>
    );
}

export default PlayGame;