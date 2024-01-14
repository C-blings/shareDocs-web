import {BasicAPI} from "./BasicAPI";
import {injectable} from "tsyringe";
import User from "../dto/RegistrationDTO";

@injectable()
export class RegistrationAPI extends BasicAPI {

    constructor() {
        super();
    }

    sendUser = (user: User) => {
        RegistrationAPI.api.post('/add-user', user)
    }

}