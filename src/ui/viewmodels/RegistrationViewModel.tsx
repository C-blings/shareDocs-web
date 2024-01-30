import {injectable} from "tsyringe";
import {ViewModel} from "@yoskutik/react-vvm";
import {makeObservable, observable} from "mobx";
import {RegistrationRepository} from "../../data/repository/RegistrationRepository";
import User from "../../data/dto/RegistrationDTO";
import ErrorState from "../errors/ErrorState";
import {BasicViewModel} from "./BasicViewModel";

enum Error {
    IncorrectLogin = 'login is incorrect',
    IncorrectEmail = 'email is incorrect',
    IncorrectPassword = 'password is incorrect',
    IncorrectFields = 'fill all fields correctly',
    UserExists = 'user with this login already exists'
}

@injectable()
class RegistrationViewModel extends ViewModel {
    @observable loginErrorState: ErrorState;
    @observable emailErrorState: ErrorState;
    @observable passwordErrorState: ErrorState;
    @observable requestError = '';

    constructor(private app: RegistrationRepository) {
        super();
        makeObservable(this);
        this.loginErrorState = new ErrorState('', Error.IncorrectLogin);
        this.emailErrorState = new ErrorState('', Error.IncorrectEmail);
        this.passwordErrorState = new ErrorState('', Error.IncorrectPassword);
    }

    sendUser = (user: User) => {
        if (!(this.loginErrorState.isCorrect() && this.emailErrorState.isCorrect() && this.passwordErrorState.isCorrect())){
            this.requestError = Error.IncorrectFields;
            return;
        }
        this.app.checkIfUserExists(user).then(
            result => {
                if (!result){
                    this.app.sendUser(user);
                } else {
                    this.requestError = Error.UserExists;
                }
            }
        )
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