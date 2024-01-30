import BasicInput, {BasicInputProps} from "../Basic/BasicInput";
import React, {useState} from "react";
import {IconButton, InputAdornment, List, ListItem, TextField} from "@material-ui/core";
import {Visibility, VisibilityOff} from '@material-ui/icons';
import {TypographyStyleOptions} from "@material-ui/core/styles/createTypography";
import {InputProps as StandardInputProps} from "@material-ui/core/Input/Input";
import ErrorState from "../../errors/ErrorState";

export type InputWithErrorProps = BasicInputProps & {
    errorClassName: any,
    errorState: ErrorState
}

const InputWithError = (props: InputWithErrorProps) => {
    const {errorClassName, errorState, ...other} = props


    return <>
        <List>
            <ListItem>
                <BasicInput
                    {...other}
                />
            </ListItem>
            <ListItem>
                <p className={errorClassName}>{errorState.getState()}</p>
            </ListItem>
        </List>


    </>
}

export default InputWithError