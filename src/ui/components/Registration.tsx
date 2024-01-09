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
        setPassword(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    return (
        <RegistrationField
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
        />
    )
}

export default Registration