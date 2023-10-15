// import "reflect-metadata";
import React from 'react';
import './App.css';
import {computed, makeObservable} from "mobx";
import {BasicViewModel} from "./ui/viewmodels/BasicViewModel";
import {configure, view, ViewModel} from "@yoskutik/react-vvm";
import {AppStore} from "./data/repository/AppStore";
import {container, inject, injectable} from "tsyringe";

@injectable()
class AppViewModel extends ViewModel {
    @computed get text(): string {
        return this.app.greetingText;
    }

    constructor(private app: AppStore) {
        super();
        makeObservable(this);
    }

    onChangeGreeting = () => {
        this.app.changeText("Привет, дорогой пользователь 2")
    }
}

const App = view(AppViewModel)(({viewModel}) => (
        <div className="App">
            <h1>{viewModel.text}</h1>
            <button onClick={viewModel.onChangeGreeting}>Click me</button>
        </div>
    ));

export default App;
