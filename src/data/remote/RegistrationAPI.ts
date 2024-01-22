import {BasicAPI} from "./BasicAPI";
import {injectable} from "tsyringe";
import User, {CheckIfUserExist} from "../dto/RegistrationDTO";

@injectable()
export class RegistrationAPI extends BasicAPI {

    constructor() {
        super();
    }

    sendUser = (user: User) => {
        RegistrationAPI.api.post('/add-user', user)
    }

    checkIfUserExists = (user: User) => {
        return RegistrationAPI.api.get<CheckIfUserExist>(`/check-if-user-exists?login=${user.login}`);
    }

}