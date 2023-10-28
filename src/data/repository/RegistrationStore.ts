import {injectable, singleton} from "tsyringe";
import {action, makeObservable, observable, runInAction} from "mobx";
import axios from "axios";
import {RegistrationAPI} from "../remote/RegistrationAPI";
import type RegistrationDTO from "../dto/RegistrationDTO";
import {useState} from "react";


@singleton()
export class RegistrationStore {
    result = "";
    @observable nickname: string = "";
    @observable email: string = "";
    @observable password: string = "";

    constructor(private api: RegistrationAPI) {
        makeObservable(this);
    }

    sendUserInfo = async (userData: RegistrationDTO) => {
        try {
            await this.api.sendUserInfo(userData);
            runInAction(()  => {
                this.result = "Добро пожаловать!";
            })
            // redirect somewhere
        } catch (error) {
            runInAction(()  => {
                this.result = "Не удалось отправить данные";
            })
        }
    }
}