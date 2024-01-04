import {TextField} from "@material-ui/core";
import React from "react";

const BasicInput = (
    {value, label, variant, onChange, type, placeholder}:
        {
            value?: string,
            label?: string,
            variant?: 'standard' | 'outlined' | 'filled',
            onChange?: (value: any) => void,
            type?: string,
            placeholder?: string
        }
) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(onChange) onChange(event.target.value)
    }

    return (
        <div>
            <TextField
                value={value}
                label={label}
                type={type}
                variant={variant}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default BasicInput