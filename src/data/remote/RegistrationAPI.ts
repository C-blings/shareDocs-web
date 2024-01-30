import {BasicAPI} from "./BasicAPI";
import {injectable, singleton} from "tsyringe";
import User, {CheckIfUserExist} from "../dto/RegistrationDTO";

@singleton()
export class RegistrationAPI extends BasicAPI {
    sendUser = (user: User) => {
        RegistrationAPI.api.post('/add-user', user)
    }

    checkIfUserExists = (user: User) => {
        return RegistrationAPI.api.get<CheckIfUserExist>(`/check-if-user-exists?login=${user.login};email=${user.email}`);
    }

}
