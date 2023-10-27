import {BasicAPI} from "./BasicAPI";
import app from "../../App";
import {injectable} from "tsyringe";
import RegistrationDTO from "../dto/RegistrationDTO";

@injectable()
export class RegistrationAPI extends BasicAPI {

    constructor() {
        super();
    }

    sendUserInfo = (userData: RegistrationDTO ) => {
        return RegistrationAPI.api<RegistrationDTO>('/registration',
            {headers: {'Content-Type': 'application/json'}, data: userData}
        );
    }

}