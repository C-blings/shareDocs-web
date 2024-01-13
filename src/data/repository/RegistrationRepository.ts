import {singleton} from "tsyringe";
import {makeObservable, observable} from "mobx";
import {RegistrationAPI} from "../remote/RegistrationAPI";
import User from "../dto/RegistrationDTO";

@singleton()
export class RegistrationRepository {
    @observable error = 'error'


    constructor(private api: RegistrationAPI) {
        makeObservable(this);
    }

    sendUser = async (user: User) => {
        try {
            const data = await this.api.sendUser(user);
        } catch (error) {
            console.log('no way');
        }
    }
}