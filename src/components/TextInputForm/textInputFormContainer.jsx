import { useState } from "react";
import TextInputForm from "./textInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted", value);
        if(value){
            navigate('/play', { state: {wordSelected : value}});
        }
    }

    function handleTextInputChange(event){
        console.log("Text Input changed");
        setValue(event.target.value);
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