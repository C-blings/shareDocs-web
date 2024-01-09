import {Input, TextField, useTheme} from "@material-ui/core";
import React from "react";
import {InputProps as StandardInputProps} from "@material-ui/core/Input/Input";
import {TypographyStyleOptions} from "@material-ui/core/styles/createTypography";
import theme from "../../../theme/theme";

const BasicInput = (
    {
        value,
        label,
        variant = 'outlined',
        onChange,
        type,
        placeholder,
        style = theme.typography.body1,
        inputProps,
        error,
        className
    }:
        {
            value?: string,
            label?: string,
            variant?: 'standard' | 'outlined' | 'filled',
            onChange?: (value: any) => void,
            type?: string,
            placeholder?: string,
            style?: TypographyStyleOptions,
            inputProps?: Partial<StandardInputProps>,
            error?: boolean,
            className?: any
        }
) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event.target.value)
    }

    return (
        <TextField
            value={value}
            label={label}
            type={type}
            variant={variant}
            placeholder={placeholder}
            onChange={handleChange}
            style={style}
            InputProps={inputProps}
            className={className}
        />
    )
}

export default BasicInput