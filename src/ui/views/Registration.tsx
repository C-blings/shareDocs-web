import React, {useState} from 'react';
import {view} from "@yoskutik/react-vvm";
import RegistrationViewModel from "../viewmodels/RegistrationViewModel";
import Title from "../atoms/Title";
import TextInput from "../atoms/TextInput";
import CustomButton from "../atoms/CustomButton";

const RegistrationView = view(RegistrationViewModel)(({viewModel}) => {
    const nicknamePlaceholder = "Введите свой никнейм";
    const emailPlaceholder = "Введите свою почту";
    const passwordPlaceholder = "Введите пароль";
    const buttonText = "Зарегистрироваться";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    return (
        <div>
            <Title text={"Registration"}/>
            <TextInput
                value={nickname}
                onChange={setNickname}
                placeholder={nicknamePlaceholder}
            />
            <TextInput
                value={email}
                onChange={setEmail}
                placeholder={emailPlaceholder}
            />
            <TextInput
                value={password}
                onChange={setPassword}
                type={"password"}
                placeholder={passwordPlaceholder}
            />
            <CustomButton
                text={buttonText}
                onClick={ () => {viewModel.onButtonClick(email, password, nickname)}}
            />
        </div>
    );
});

export default RegistrationView;
