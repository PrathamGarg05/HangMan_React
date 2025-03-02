
import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGameContainer from './pages/PlayGame/PlayGameContainer'
import HomePage from './pages/HomePage/HomePage'
import { WordContext } from './context/WordContext'
import { useState } from 'react'
function App() {

  const [wordList, setWordList] = useState([]);
  const[word, setWord] = useState("");
  const[hint, setHint] = useState("");
  const[steps, setSteps] = useState(0);
  const[correct, setCorrect] = useState(0);
  return (
    <WordContext.Provider
      value={{ hint, setHint, word, setWord, wordList, setWordList, steps, setSteps,correct, setCorrect }}
    >
      <Routes>
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGameContainer />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </WordContext.Provider>
  );
}

export default App
