import {injectable, singleton} from "tsyringe";
import {action, makeObservable, observable, runInAction} from "mobx";
import axios from "axios";
import {TestAPI} from "../remote/TestAPI";

@singleton()
export class TestStore {
    @observable greetingText = 'Привет, дорогой пользователь'

    constructor(private api: TestAPI) {
        makeObservable(this);
    }

    changeText = async () => {
        try {
            const data = await this.api.getApp()
            runInAction(() => {
                this.greetingText = data.message
            })
        } catch (error) {
            runInAction(() => {
                this.greetingText = "Мддддааааа, неудобно  получилось"
            })

        }
    }
}