import {singleton} from "tsyringe";
import {makeObservable, observable} from "mobx";
import {RegistrationAPI} from "../remote/RegistrationAPI";
import User from "../dto/RegistrationDTO";

@singleton()
export class RegistrationRepository {
    constructor(private api: RegistrationAPI) {

    }

    checkIfUserExists = async (user: User) => {
        let result = true;
        await this.api.checkIfUserExists(user).then(data => {
            result = data.data.result;
        });
        return result;
    }

    sendUser = async (user: User) => {
        try {
            const data = await this.api.sendUser(user);
        } catch (error) {
            console.log('no way');
        }
    }
}