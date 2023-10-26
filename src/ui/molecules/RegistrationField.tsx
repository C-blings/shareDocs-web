import Title from "../atoms/Title";
import TextInput from "../atoms/TextInput";
import React from "react";


const RegistrationField = ({
    email,
    handleEmailChange,
    password,
    handlePasswordChange
} : {email: string; handleEmailChange: Function; password: string; handlePasswordChange: Function }) => {

    return (
        <div>
            <Title text={"Registration"}/>
            <TextInput
                value={email}
                onChange={handleEmailChange}
                placeholder={"Введите свою почту"}
            />
            <TextInput
                value={password}
                onChange={handlePasswordChange}
                type={"password"}
                placeholder={"Введите пароль"}
            />
        </div>
    )
}

export default RegistrationField