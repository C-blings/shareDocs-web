import BasicInput, {BasicInputProps} from "../Basic/BasicInput";
import React, {MouseEventHandler, useState} from "react";
import {IconButton, InputAdornment, TextFieldProps} from "@material-ui/core";
import {Visibility, VisibilityOff} from '@material-ui/icons';
import {InputProps as StandardInputProps} from "@material-ui/core/Input/Input";
import theme from "../../../theme/theme";
import {TypographyStyleOptions} from "@material-ui/core/styles/createTypography";

const PasswordInput = (props: BasicInputProps) => {
    const {...other} = props

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <BasicInput
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