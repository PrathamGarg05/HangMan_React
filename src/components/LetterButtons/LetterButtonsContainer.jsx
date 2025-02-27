import LetterButtons from "./LetterButtons";

const Line1 = "QWERTYUIOP".split("");
const Line2 = "ASDFGHJKL".split("");
const Line3 = "ZXCVBNM".split("");
function LetterButtonsContainer({
  text,
  guessedLetters,
  onLetterClick,
  steps,
  win,
}) {
  const originalLetters = new Set(text.toUpperCase().split(""));
  const guessedLettersSet = new Set(guessedLetters);

  const buttonStyle = function (letter) {
    if (guessedLettersSet.has(letter)) {
      return `${originalLetters.has(letter) ? "bg-green-500" : "bg-red-500"}`;
    } else {
      return "bg-blue-500";
    }
  };

  function handleLetterClick(event) {
    const letter = event.target.value;
    onLetterClick?.(letter);
  }
  function disableButton(letter) {
    return guessedLettersSet.has(letter) || steps >= 7 || win;
  }

  function getButtons(Line) {
    return Line.map((letter) => {
      return (
        <button
          key={`button-${letter}`}
          value={letter}
          onClick={handleLetterClick}
          disabled={disableButton(letter)}
          className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(
            letter
          )}`}
        >
          {letter}
        </button>
      );
    });
  }

  const buttons1 = getButtons(Line1);
  const buttons2 = getButtons(Line2);

  const buttons3 = getButtons(Line3);

  return (
    <LetterButtons 
        buttons1={buttons1}
        buttons2={buttons2}
        buttons3={buttons3}
    />
  )
}

export default LetterButtonsContainer;
