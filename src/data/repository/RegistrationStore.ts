import {injectable, singleton} from "tsyringe";
import {action, makeObservable, observable, runInAction} from "mobx";
import {RegistrationAPI} from "../remote/RegistrationAPI";
import type RegistrationDTO from "../dto/RegistrationDTO";


@singleton()
export class RegistrationStore {

    constructor(private api: RegistrationAPI) {}

    sendUserInfo = async (userData: RegistrationDTO) => {
        try {
            await this.api.sendUserInfo(userData);
            // redirect somewhere
        } catch (error) {}
    }
}