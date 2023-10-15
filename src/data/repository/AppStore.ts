import {singleton} from "tsyringe";
import {action, makeObservable, observable} from "mobx";


@singleton()
export class AppStore {
    @observable greetingText = 'Привет, дорогой пользователь'

    constructor() {
        makeObservable(this);
    }

    @action changeText = (newText: string) => {
        // обращаемся к серваку по axios
        this.greetingText = newText
    }
}