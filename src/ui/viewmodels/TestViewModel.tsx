import {injectable} from "tsyringe";
import {ViewModel} from "@yoskutik/react-vvm";
import {computed, makeObservable} from "mobx";
import {TestRepository} from "../../data/repository/TestRepository";

@injectable()
class TestViewModel extends ViewModel {
    @computed get text(): string {
        return this.app.greetingText;
    }

    constructor(private app: TestRepository) {
        super();
        makeObservable(this);
    }

    onChangeGreeting = () => {
        this.app.changeText()
    }
}

export default TestViewModel