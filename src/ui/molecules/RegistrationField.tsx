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
        email,
        handleEmailChange,
        password,
<<<<<<< HEAD
        handlePasswordChange
=======
        handlePasswordChange,
        onClick,
        loginErrorState,
        emailErrorState,
        passwordErrorState
>>>>>>> 9588e80 (feat registration panel: add errors and user check)
    }:
        {
            email: string,
            handleEmailChange: (value: any) => void,
            password: string,
<<<<<<< HEAD
            handlePasswordChange: (value: any) => void
=======
            handlePasswordChange: (value: any) => void,
            onClick: () => void,
            loginErrorState: ErrorState,
            emailErrorState: ErrorState,
            passwordErrorState: ErrorState
>>>>>>> 9588e80 (feat registration panel: add errors and user check)
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
<<<<<<< HEAD
=======
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
>>>>>>> 9588e80 (feat registration panel: add errors and user check)
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
                        color={theme.palette.primary}
                        className={classes.button}
                    >
                        {Strings.sign_up}
                    </BasicButton>
                </ListItem>
            </List>
        </div>
    )
}

export default RegistrationField