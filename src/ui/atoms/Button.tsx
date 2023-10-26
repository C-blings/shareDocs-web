import React from "react";

const Button = ({text, onClick} : {text: string, onClick: Function}) => {
    return (
        <button onClick={() => {onClick()}}>{text}</button>
    )
}

export default Button;