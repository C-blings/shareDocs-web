import BasicInput from "../Basic/BasicInput";
import React, {useState} from "react";
import {IconButton, InputAdornment} from "@material-ui/core";
import {Visibility, VisibilityOff} from '@material-ui/icons';
import InputWithError, {InputWithErrorProps} from "./InputWithError";

const PasswordInput = (props: InputWithErrorProps) => {
    const {...other} = props

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <InputWithError
            {...other}
            type={showPassword ? 'text' : 'password'}
            inputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? <Visibility color={"secondary"}/> : <VisibilityOff color={"secondary"}/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default PasswordInput