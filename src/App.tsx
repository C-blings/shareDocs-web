import React, {useState} from 'react';
import {view} from "@yoskutik/react-vvm";
import AppViewModel from "./ui/viewmodels/AppViewModel";
import BasicButton from "./ui/atoms/Basic/BasicButton";
import {Divider, useTheme} from "@material-ui/core";
import BasicInput from "./ui/atoms/Basic/BasicInput";

const App = view(AppViewModel)(({viewModel}) => {

    const [val, setVal] = useState("");

    return (
        <div className="App">
            <h1>{viewModel.text}</h1>
            <BasicButton onClick={viewModel.onChangeGreeting} color={useTheme().palette.error} variant="contained">
                Click me
            </BasicButton>
            <br/>
            <BasicInput
                label={"Test"}
                variant={"outlined"}
                value={val}
                onChange={setVal}
            />
        </div>
    )
});

export default App;
