import {injectable} from "tsyringe";
import {ViewModel} from "@yoskutik/react-vvm";
import {computed, makeObservable, runInAction} from "mobx";
import {AppStore} from "../../data/repository/AppStore";
import {RegistrationStore} from "../../data/repository/RegistrationStore";
import RegistrationDTO from "../../data/dto/RegistrationDTO";

@injectable()
class RegistrationViewModel extends ViewModel {
    @computed get requestResult(): string {
        return this.app.result;
    }

    constructor(private app: RegistrationStore) {
        super();
        makeObservable(this);
    }

    handlePasswordChange = (value: string) => {
        runInAction(() => {
            this.app.password = value;
        });
    };

    handleEmailChange = (value: string) => {
        runInAction(() => {
            this.app.email = value;
        });
    };

    handleNicknameChange = (value: string) => {
        runInAction(() => {
            this.app.nickname = value;
        });
    }

    getEmail = () => {
        return this.app.email;
    }

    getPassword = () => {
        return this.app.password;
    }

    getNickname = () => {
        return this.app.nickname;
    }

    onButtonClick = () => {
        this.app.sendUserInfo({"email": this.getEmail(), "password": this.getPassword(), "nickname": this.getNickname()});
    }
}

export default RegistrationViewModel