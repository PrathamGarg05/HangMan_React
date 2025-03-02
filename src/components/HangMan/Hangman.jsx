import { useContext } from "react";
import level1 from "../../assets/img1.svg";
import level2 from "../../assets/img2.svg";
import level3 from "../../assets/img3.svg";
import level4 from "../../assets/img4.svg";
import level5 from "../../assets/img5.svg";
import level6 from "../../assets/img6.svg";
import level7 from "../../assets/img7.svg";
import level8 from "../../assets/img8.svg";
import levelWon from "../../assets/win.svg";
import { WordContext } from "../../context/WordContext";
function HangMan() {
  const levels = [
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
  ];
  const {word, steps, correct} = useContext(WordContext);
  return (
    <div className="w-[400px] h-[400px] ">
      <img
        className="w-5/6 h-5/6"
        src={correct === word.length ? levelWon : levels[steps]}
      />

      {correct === word.length ? (
        <h1 className="text-3xl flex justify-center">You Win</h1>
      ) : null}
      {steps == 7 ? (
        <h1 className="text-3xl flex justify-center">You Lose</h1>
      ) : null}
    </div>
  );
}

export default HangMan;
