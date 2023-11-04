import React from "react";

const CustomButton = ({text, onClick} : {text: string, onClick: Function}) => {
    return (
        <button onClick={() => {onClick()}}>{text}</button>
    )
}

export default CustomButton;