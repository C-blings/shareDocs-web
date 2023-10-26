import RegistrationField from "../molecules/RegistrationField";
import {autoInjectable, container, inject, injectable, singleton} from "tsyringe";
import React, {useState} from "react";
import {ViewModel} from "@yoskutik/react-vvm";
import {validateHeaderName} from "http";

const Registration = () => {
    const buttonText = "Зарегистрироваться";

    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handleNicknameChange = (value: string) => {
        setNickname(value);
    }

    const buttonOnClick = () => { console.log('click'); }

    return (
        <div>
            <RegistrationField
                nickname={nickname}
                handlerNicknameChange={handleNicknameChange}
                email={email}
                handleEmailChange={handleEmailChange}
                password={password}
                handlePasswordChange={handlePasswordChange}
                buttonText={buttonText}
                buttonOnClick={buttonOnClick}
            />
        </div>
    )
}

export default Registration