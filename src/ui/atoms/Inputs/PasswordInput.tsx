import BasicInput from "../Basic/BasicInput";
import React, {MouseEventHandler, useState} from "react";
import {IconButton, InputAdornment} from "@material-ui/core";
import {Visibility, VisibilityOff} from '@material-ui/icons';
import {InputProps as StandardInputProps} from "@material-ui/core/Input/Input";
import theme from "../../../theme/theme";
import {TypographyStyleOptions} from "@material-ui/core/styles/createTypography";

const PasswordInput = (
    {
        value,
        label,
        variant,
        onChange,
        placeholder,
        style = theme.typography.body1,
        className
    }:
        {
            value?: string,
            label?: string,
            variant?: 'standard' | 'outlined' | 'filled',
            onChange?: (value: any) => void,
            placeholder?: string,
            style?: TypographyStyleOptions,
            className?: any
        }
) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <BasicInput
            value={value}
            label={label}
            type={showPassword ? 'text' : 'password'}
            variant={variant}
            onChange={onChange}
            placeholder={placeholder}
            style={style}
            className={className}
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