import Title from "../atoms/Title";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button"
import React from "react";


const RegistrationField = ({
    nickname,
    handlerNicknameChange,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    buttonText,
    buttonOnClick
} : {nickname: string; handlerNicknameChange: Function;
     email: string; handleEmailChange: Function;
     password: string; handlePasswordChange: Function;
     buttonText: string; buttonOnClick: Function;
    }) => {

    const nicknamePlaceholder = "Введите свой никнейм";
    const emailPlaceholder = "Введите свою почту";
    const passwordPlaceholder = "Введите пароль";

    return (
        <div>
            <Title text={"Registration"}/>
            <TextInput
                value={nickname}
                onChange={handlerNicknameChange}
                placeholder={nicknamePlaceholder}
            />
            <TextInput
                value={email}
                onChange={handleEmailChange}
                placeholder={emailPlaceholder}
            />
            <TextInput
                value={password}
                onChange={handlePasswordChange}
                type={"password"}
                placeholder={passwordPlaceholder}
            />
            <Button
                text={buttonText}
                onClick={buttonOnClick}
            />
        </div>
    )
}

export default RegistrationField