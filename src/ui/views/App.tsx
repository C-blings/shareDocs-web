import React from 'react';
import {computed, makeObservable} from "mobx";
import {view, ViewModel} from "@yoskutik/react-vvm";
import {AppStore} from "../../data/repository/AppStore";
import {injectable} from "tsyringe";
import AppViewModel from "../viewmodels/AppViewModel";

const App = view(AppViewModel)(({viewModel}) => (
    <div className="App">
      <h1>{viewModel.text}</h1>
      <button onClick={viewModel.onChangeGreeting}>Click me</button>
    </div>
));

export default App;