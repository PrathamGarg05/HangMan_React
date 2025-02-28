import { useEffect, useState } from "react";
import TextInputForm from "./textInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");
    const [hint, setHint] = useState("");

    const navigate = useNavigate();

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted", value);
        if(value && hint){
            navigate('/play', { state: {wordSelected : value , wordHint: hint}});
        }
    }

    function handleTextInputChange(event){
        console.log("Text Input changed");
        
        if(event.target.placeholder === "Enter a word here..."){
            setValue(event.target.value);
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