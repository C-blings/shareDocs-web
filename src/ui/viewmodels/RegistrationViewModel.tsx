import {injectable} from "tsyringe";
import {ViewModel} from "@yoskutik/react-vvm";
import {computed, makeObservable, observable, runInAction} from "mobx";
import {AppStore} from "../../data/repository/AppStore";
import {RegistrationStore} from "../../data/repository/RegistrationStore";
import RegistrationDTO from "../../data/dto/RegistrationDTO";
import {useState} from "react";

@injectable()
class RegistrationViewModel extends ViewModel {
    constructor(private app: RegistrationStore) {
        super();
    }

    onButtonClick = (email: string, password: string, nickname: string) => {
        this.app.sendUserInfo({"email": email, "password": password, "nickname": nickname});
    }
}

export default RegistrationViewModel