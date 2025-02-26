import getButtonStyle from "./buttonStyle";

function Button({text , onClickHandler, type = "button",styleType = "primary"}){

    return (
        <button
            onClick = {onClickHandler}
            type={type}
            className={`px-4 py-2 ${getButtonStyle(styleType)} text-white`}
        >
            {text}
        </button>
    )
}

export default Button;