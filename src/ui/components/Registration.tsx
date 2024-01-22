import RegistrationField from "../molecules/RegistrationField";
import {autoInjectable, container, inject, injectable, singleton} from "tsyringe";
import React, {useState} from "react";
import {ViewModel} from "@yoskutik/react-vvm";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core";
import {Colors} from "../../theme/colors";
const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePasswordChange = (value: string) => {
        viewModel.checkPassword(value);
        setPassword(value);
    };

    const handleEmailChange = (value: string) => {
        viewModel.checkEmail(value);
        setEmail(value);

    };

<<<<<<< HEAD
    return (
=======
    const handleLoginChange = (value: string) => {
        viewModel.checkLogin(value);
        setLogin(value);
    };

    const addUser = () => {
        viewModel.sendUser({login, email, password});
    };


    return <>
>>>>>>> 9588e80 (feat registration panel: add errors and user check)
        <RegistrationField
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
<<<<<<< HEAD
        />
    )
}
=======
            onClick={addUser}
            loginErrorState={viewModel.loginErrorState}
            emailErrorState={viewModel.emailErrorState}
            passwordErrorState={viewModel.passwordErrorState}
            requestError={viewModel.requestError}
        />
    </>

});
>>>>>>> 9588e80 (feat registration panel: add errors and user check)

export default Registration