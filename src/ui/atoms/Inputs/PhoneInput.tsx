import React, {PropsWithRef} from "react";
import PropTypes from "prop-types";
import MaskedInput from 'react-text-mask';
import BasicInput from "../Basic/BasicInput";
import theme from "../../../theme/theme";
import {TypographyStyleOptions} from "@material-ui/core/styles/createTypography";
import {InputProps as StandardInputProps} from "@material-ui/core/Input/Input";

export interface PhoneMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
}

function PhoneMaskCustom(props: PhoneMaskCustomProps) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[1-9]/,'(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

PhoneMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
} as any;

const PhoneInput = (
    {
        value,
        label,
        variant = 'outlined',
        onChange,
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
            placeholder?: string,
            style?: TypographyStyleOptions,
            inputProps?: Partial<StandardInputProps>,
            error?: boolean,
            className?: any
        }
) => {
    return ( {}
        // <BasicInput
        //     value={value}
        //     label={label}
        //     variant={variant}
        //     onChange={onChange}
        //     type={}
        // />
    )
}