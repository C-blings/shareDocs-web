import {injectable} from "tsyringe";
import {ViewModel} from "@yoskutik/react-vvm";
import {makeObservable, observable} from "mobx";
import {RegistrationRepository} from "../../data/repository/RegistrationRepository";
import User from "../../data/dto/RegistrationDTO";
import ErrorState from "../errors/ErrorState";

@injectable()
class RegistrationViewModel extends ViewModel {
    @observable loginErrorState: ErrorState;
    @observable emailErrorState: ErrorState;
    @observable passwordErrorState: ErrorState;
    @observable requestError = '';

    constructor(private app: RegistrationRepository) {
        super();
        makeObservable(this);
        this.loginErrorState = new ErrorState('', 'login is incorrect');
        this.emailErrorState = new ErrorState('', 'email is incorrect');
        this.passwordErrorState = new ErrorState('', 'password is incorrect');
    }

    sendUser = (user: User) => {
        if (!(this.loginErrorState.isCorrect() && this.emailErrorState.isCorrect() && this.passwordErrorState.isCorrect())){
            this.requestError = 'fill all fields correctly'
            return;
        }
        alert(this.app.checkIfUserExists(user))
        if (!this.app.checkIfUserExists(user)){
           this.app.sendUser(user);
        } else {

            this.requestError = 'user with this login already exists'
        }
    }

    checkLogin = (login: string) => {
        this.loginErrorState.changeStateWithPredicate(login.length >= 3);
    }

    checkEmail = (email: string) => {
        this.emailErrorState.changeStateWithPredicate(email.length >= 3 && email.includes('@'));
    }

    checkPassword = (password: string) => {
        this.passwordErrorState.changeStateWithPredicate(password.length >= 5);
    }
}

export default RegistrationViewModel