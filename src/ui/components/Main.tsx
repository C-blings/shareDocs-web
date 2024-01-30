import {view} from "@yoskutik/react-vvm";
import MainViewModel from "../viewmodels/MainViewModel";
import React from "react";

const Main = view(MainViewModel)(({viewModel}) => {
    const groups = viewModel.groupsList
const list = groups.map((group) => {<li>{group.id}</li>})
    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
});

export default Main