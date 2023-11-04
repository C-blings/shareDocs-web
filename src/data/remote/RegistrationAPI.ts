import {BasicAPI} from "./BasicAPI";
import app from "../../ui/views/App";
import {injectable} from "tsyringe";
import RegistrationDTO from "../dto/RegistrationDTO";
import {APIConstants} from "./APIConstants";

type CreateUserResponse = {
    name: string;
    job: string;
    id: string;
    createdAt: string;
};

@injectable()
export class RegistrationAPI extends BasicAPI {

    constructor() {
        super();
    }

    sendUserInfo = (userData: RegistrationDTO) => {
        return RegistrationAPI.api.post<CreateUserResponse>(
            APIConstants.BASE_URL,
            userData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
    }

}