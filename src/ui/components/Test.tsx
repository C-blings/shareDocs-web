import React, {useState} from 'react';
import {view} from "@yoskutik/react-vvm";
import {Divider, useTheme} from "@material-ui/core";
import TestViewModel from "../viewmodels/TestViewModel";
import BasicButton from "../atoms/Basic/BasicButton";
import BasicInput from "../atoms/Basic/BasicInput";
import PasswordInput from "../atoms/Inputs/PasswordInput";

const Test = view(TestViewModel)(({viewModel}) => {

    const [val, setVal] = useState("");

    return (
        <div className="App">
            <h1>{viewModel.text}</h1>
            <BasicButton
                onClick={viewModel.onChangeGreeting}
                color={useTheme().palette.error}
                variant="contained"
                style={useTheme().typography.h2}
            >
                Click me
            </BasicButton>
            <br/>
            <BasicInput
                label={"Test"}
                variant={"outlined"}
                style={useTheme().typography.h1}
                value={val}
                onChange={setVal}
            />
            <br/>
            <BasicInput
                label={"email"}
                style={useTheme().typography.h3}
                value={val}
                onChange={setVal}
                type={"email"}
            />
            <PasswordInput
                label={"Password"}
                variant={"outlined"}
                style={useTheme().typography.h1}
                value={val}
                onChange={setVal}
            />
        </div>
    )
});

export default Test;
