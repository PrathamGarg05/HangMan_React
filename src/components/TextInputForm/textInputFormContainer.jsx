import { useContext, useEffect, useState } from "react";
import TextInputForm from "./textInputForm";
import { useNavigate } from "react-router-dom";
import { WordContext } from "../../context/WordContext";

function TextInputFormContainer(){

    const [inputType, setInputType] = useState("password");
    const {setWord, setHint, hint, word} = useContext(WordContext);

    const navigate = useNavigate();

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted", word);
        if (word && hint) {
          navigate("/play");
        }
    }

    function handleTextInputChange(event){
        console.log("Text Input changed");
        
        if(event.target.placeholder === "Enter a word here..."){
            setWord(event.target.value);
            setHint("");
            
        } else if(event.target.placeholder === "Enter a hint here..."){
            setHint(event.target.value);
        }
             
    }
    function handleShowHideClick(){
        console.log("Show Hide Click");
        if(inputType == "password"){
            setInputType("text");
        }else{
            setInputType("password");
        }
    }
    return (
      <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleShowHideClick={handleShowHideClick}
        handleTextInputChange={handleTextInputChange}
      />
    );
}

export default TextInputFormContainer;