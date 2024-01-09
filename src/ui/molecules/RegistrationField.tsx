import React from "react";
import BasicInput from "../atoms/Basic/BasicInput";
import {createStyles, List, ListItem, makeStyles, Theme} from "@material-ui/core";
import {Strings} from "../../theme/strings";
import PasswordInput from "../atoms/Inputs/PasswordInput";
import BasicButton from "../atoms/Basic/BasicButton";

const useStyle = makeStyles((theme: Theme) => createStyles({
    main: {
        display: "flex",
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
        margin: 40
    },
    button: {

        width: 120,
        height: 49,
        marginTop: 20,
        marginLeft: 180,
        marginRight: 180,
    }
}))

const RegistrationField = (
    {
        email,
        handleEmailChange,
        password,
        handlePasswordChange
    }:
        {
            email: string,
            handleEmailChange: (value: any) => void,
            password: string,
            handlePasswordChange: (value: any) => void
        }
) => {

    const classes = useStyle()
    return (
        <div className={classes.main}>
            <List>
                <ListItem>
                    <BasicInput
                        className={classes.input}
                        value={email}
                        onChange={handleEmailChange}
                        placeholder={Strings.email_placeholder}
                    />
                </ListItem>
                <ListItem>
                    <PasswordInput
                        className={classes.input}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder={Strings.password_placeholder}
                    />
                </ListItem>
                <ListItem>
                    <BasicButton
                        className={classes.button}
                    >
                        {Strings.sign_in}
                    </BasicButton>
                </ListItem>
            </List>
        </div>
    )
}

export default RegistrationField