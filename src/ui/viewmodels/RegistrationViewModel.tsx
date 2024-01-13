import {injectable} from "tsyringe";
import {ViewModel} from "@yoskutik/react-vvm";
import {makeObservable} from "mobx";
import {RegistrationRepository} from "../../data/repository/RegistrationRepository";
import User from "../../data/dto/RegistrationDTO";

@injectable()
class RegistrationViewModel extends ViewModel {
    constructor(private app: RegistrationRepository) {
        super();
        makeObservable(this);
    }

    onGettingUser = (user: User) => {
        this.app.sendUser(user);
    }
}

export default RegistrationViewModel