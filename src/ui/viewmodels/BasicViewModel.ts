import {ViewModel} from "@yoskutik/react-vvm";
import {observable} from "mobx";
import {Mapper} from "../errors/Mapper";
import {ErrorsCode} from "../errors/ErrorsCode";

export class BasicViewModel extends ViewModel {
    @observable error = '';
    @observable isLoading = false;

    constructor() {
        super();
    }

    onErrorFound = (error: ErrorsCode) => {
        this.error = Mapper(error)
    }
}