import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../../context/WordContext";

function HomePage(){

    const {setWordList, setWord,setHint,setSteps, setCorrect} = useContext(WordContext);

    async function fetchWords(){
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();

        setWordList([...data]);
        const randomIdx = Math.floor(Math.random() * data.length);
        setWord(data[randomIdx].wordValue);
        setHint(data[randomIdx].wordHint);
        setCorrect(0);
        setSteps(0);
        console.log(data[randomIdx].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, [])

    return (
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold m-4">Hangman Game</h1>
        <h2 className="text-3xl m-3">Choose your game mode:</h2>

        <Link to={"/play"} >
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