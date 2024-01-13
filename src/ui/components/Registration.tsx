import RegistrationField from "../molecules/RegistrationField";
import React, {useState} from "react";
import {view} from "@yoskutik/react-vvm";
import RegistrationViewModel from "../viewmodels/RegistrationViewModel";

const Registration =  view(RegistrationViewModel)(({viewModel}) => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handleLoginChange = (value: string) => {
        setLogin(value);
    };

    const addUser = () => {
        viewModel.onGettingUser({login, email, password});
    };


    return (
        <RegistrationField
            login={login}
            handleLoginChange={handleLoginChange}
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
            onClick={addUser}
        />
    )
});

export default Registration