import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";

function HomePage(){

    const [word, setWord] = useState("");
    const [hint, setHint] = useState("");

    async function fetchWords(){
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();

        const randomIdx = Math.floor(Math.random() * data.length);
        setWord(data[randomIdx].wordValue);
        setHint(data[randomIdx].wordHint);
        console.log(data[randomIdx].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, [])

    return (
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold m-4">Hangman Game</h1>
        <h2 className="text-3xl m-3">Choose your game mode:</h2>

        <Link to={"/play"} state={{ wordSelected: word , wordHint: hint }}>
          <div className="flex justify-center flex-row m-4">
            <Button text={"Single Player Game"} />
          </div>
        </Link>
        <Link to={"/start"}>
          <div className="flex justify-center flex-row m-4">
            <Button text={"2 Player Game"} />
          </div>
        </Link>
      </div>
    );

}

export default HomePage;