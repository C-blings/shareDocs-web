import {injectable, singleton} from "tsyringe";
import {action, makeObservable, observable, runInAction} from "mobx";
import axios from "axios";
import {RegistrationAPI} from "../remote/RegistrationAPI";
import type RegistrationDTO from "../dto/RegistrationDTO";


@singleton()
export class RegistrationStore {
    @observable userData: RegistrationDTO = {
        nickname: "NULL",
        email: "NULL",
        password: "NULL"
    }

    constructor(private api: RegistrationAPI) {
        makeObservable(this);
    }

    sendUserInfo = async ({userData} : {userData: RegistrationDTO}) => {
        try {
            const response = await this.api.sendUserInfo(userData);
        } catch (error) {
            // runInAction(() => {
            //     this.data. = "Не удалось отправить данные"
            // })
        }
    }
}