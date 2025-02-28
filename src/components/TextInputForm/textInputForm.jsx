import Button from "../Button/Button"
import TextInput from "../TextInput/TextInpus"

function TextInputForm({inputType,handleFormSubmit, handleShowHideClick,handleTextInputChange}){

    return (
      <form onSubmit={handleFormSubmit}>
        <div>
          <TextInput
            type={inputType}
            label="Enter a word"
            onChangeHandler={handleTextInputChange}
            placeholder="Enter a word here..."
          ></TextInput>
          <TextInput
            type="text"
            label="Enter a hint"
            onChangeHandler={handleTextInputChange}
            placeholder="Enter a hint here..."
          >
          </TextInput>
        </div>
        <div>
          <Button
            styleType="warning"
            text={inputType === "password" ? "Show" : "Hide"}
            onClickHandler={handleShowHideClick}
          />
        </div>
        <div>
          <Button type="submit" styleType="primary" text="Submit" />
        </div>
      </form>
    );
}

export default TextInputForm