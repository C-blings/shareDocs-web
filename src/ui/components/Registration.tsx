import RegistrationField from "../molecules/RegistrationField";
import {autoInjectable, container, inject, injectable, singleton} from "tsyringe";
import React, {useState} from "react";
import {view, ViewModel} from "@yoskutik/react-vvm";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core";
import {Colors} from "../../theme/colors";
import RegistrationViewModel from "../viewmodels/RegistrationViewModel";
import TestViewModel from "../viewmodels/TestViewModel";

const Registration = view(RegistrationViewModel)(({viewModel})  => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");

    const handlePasswordChange = (value: string) => {
        viewModel.checkPassword(value);
        setPassword(value);
    };

    const handleEmailChange = (value: string) => {
        viewModel.checkEmail(value);
        setEmail(value);

    };

    const handleLoginChange = (value: string) => {
        viewModel.checkLogin(value);
        setLogin(value);
    };

    const addUser = () => {
        viewModel.sendUser({login, email, password});
    };


    return <>
        <RegistrationField
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
            login={login}
            handleLoginChange={handleLoginChange}
            onClick={addUser}
            loginErrorState={viewModel.loginErrorState}
            emailErrorState={viewModel.emailErrorState}
            passwordErrorState={viewModel.passwordErrorState}
            requestError={viewModel.requestError}
        />
    </>

});

export default Registration