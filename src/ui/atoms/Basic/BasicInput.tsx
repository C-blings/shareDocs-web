import {TextField, TextFieldProps} from "@material-ui/core";
import React from "react";
import theme from "../../../theme/theme";
import {InputProps as StandardInputProps} from "@material-ui/core/Input/Input";
import {TypographyStyleOptions} from "@material-ui/core/styles/createTypography";

export type BasicInputProps = {
    value?: string,
    label?: string,
    variant?: 'standard' | 'outlined' | 'filled',
    onChange?: (value: any) => void,
    type?: string,
    placeholder?: string,
    style?: TypographyStyleOptions,
    inputProps?: Partial<StandardInputProps>,
    error?: boolean,
    borderColor?: string,
    className?: any
}

const BasicInput = (props: BasicInputProps) => {
    const {onChange, inputProps, variant, ...other} = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event.target.value)
    }

    return (
        <TextField
            {...other}
            variant={variant}
            onChange={handleChange}
            InputProps={inputProps}
        />
    )
}

BasicInput.defaultProps = {
    variant: 'outlined',
    style: theme.typography.body2
}

export default BasicInput