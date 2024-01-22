import React from "react";
import BasicInput from "../atoms/Basic/BasicInput";
import {createStyles, List, ListItem, makeStyles, Theme, useTheme} from "@material-ui/core";
import {Strings} from "../../theme/strings";
import PasswordInput from "../atoms/Inputs/PasswordInput";
import BasicButton from "../atoms/Basic/BasicButton";
import ErrorState from "../errors/ErrorState";
import InputWithError from "../atoms/Inputs/InputWithError";

const useStyle = makeStyles((theme: Theme) => createStyles({
    main: {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    input: {
        width: 400,
        height: 60,
    },
    button: {
        margin: "auto",
        padding: "10px",
        borderRadius: "5px"
    },
    error: {
        margin: "auto",
        textAlign: "center",
        color: "red",
        alignItems: "center",
        display: "flex"
    }
}))

const RegistrationField = (
    {
        login,
        handleLoginChange,
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        onClick,
        loginErrorState,
        emailErrorState,
        passwordErrorState,
        requestError
    }:
        {
            login: string,
            handleLoginChange: (value: any) => void,
            email: string,
            handleEmailChange: (value: any) => void,
            password: string,
            handlePasswordChange: (value: any) => void,
            onClick: () => void,
            loginErrorState: ErrorState,
            emailErrorState: ErrorState,
            passwordErrorState: ErrorState,
            requestError: string
        }
) => {

    const classes = useStyle()
    const theme = useTheme()
    return (
        <div className={classes.main}>
            <List>
                <ListItem>
                    <InputWithError
                        errorClassName={classes.error}
                        className={classes.input}
                        value={login}
                        onChange={handleLoginChange}
                        placeholder={Strings.login_placeholder}
                        errorState={loginErrorState}
                    />
                </ListItem>
                <ListItem>
                    <InputWithError
                        errorClassName={classes.error}
                        className={classes.input}
                        value={email}
                        onChange={handleEmailChange}
                        placeholder={Strings.email_placeholder}
                        errorState={emailErrorState}
                    />
                </ListItem>
                <ListItem>
                    <PasswordInput
                        errorClassName={classes.error}
                        className={classes.input}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder={Strings.password_placeholder}
                        errorState={passwordErrorState}
                    />
                </ListItem>
                <ListItem>
                    <BasicButton
                        className={classes.button}
                        onClick={onClick}
                    >
                        {Strings.sign_up}
                    </BasicButton>
                </ListItem>
                <ListItem>
                    <p className={classes.error}>{requestError}</p>
                </ListItem>
            </List>
        </div>
    )
}

export default RegistrationField