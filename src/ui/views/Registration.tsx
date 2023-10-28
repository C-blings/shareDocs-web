import React from 'react';
import {view} from "@yoskutik/react-vvm";
import RegistrationViewModel from "../viewmodels/RegistrationViewModel";
import Title from "../atoms/Title";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";

const RegistrationView = view(RegistrationViewModel)(({viewModel}) => {
    const nicknamePlaceholder = "Введите свой никнейм";
    const emailPlaceholder = "Введите свою почту";
    const passwordPlaceholder = "Введите пароль";
    const buttonText = "Зарегистрироваться";

    return (
        <div>
            <Title text={"Registration"}/>
            <TextInput
                value={viewModel.getNickname()}
                onChange={viewModel.handleNicknameChange}
                placeholder={nicknamePlaceholder}
            />
            <TextInput
                value={viewModel.getEmail()}
                onChange={viewModel.handleEmailChange}
                placeholder={emailPlaceholder}
            />
            <TextInput
                value={viewModel.getPassword()}
                onChange={viewModel.handlePasswordChange}
                type={"password"}
                placeholder={passwordPlaceholder}
            />
            <Button
                text={buttonText}
                onClick={viewModel.onButtonClick}
            />
        </div>
    );
});

export default RegistrationView;
