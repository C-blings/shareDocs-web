import {injectable} from "tsyringe";
import {ViewModel} from "@yoskutik/react-vvm";
import {computed, makeObservable} from "mobx";
import {AppStore} from "../../data/repository/AppStore";

@injectable()
class AppViewModel extends ViewModel {
    @computed get text(): string {
        return this.app.greetingText;
    }

    constructor(private app: AppStore) {
        super();
        makeObservable(this);
    }

    onChangeGreeting = () => {
        this.app.changeText()
    }
}

export default AppViewModel