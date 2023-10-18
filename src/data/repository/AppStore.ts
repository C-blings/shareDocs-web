import {injectable, singleton} from "tsyringe";
import {action, makeObservable, observable, runInAction} from "mobx";
import axios from "axios";
import {AppAPI} from "../remote/AppAPI";

@singleton()
export class AppStore {
    @observable greetingText = 'Привет, дорогой пользователь'

    constructor(private api: AppAPI) {
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