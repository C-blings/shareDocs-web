import {BasicViewModel} from "./BasicViewModel";
import {injectable} from "tsyringe";
import {computed, makeObservable} from "mobx";
import GroupInListDTO from "../../data/dto/GroupInListDTO";

@injectable()
class MainViewModel extends BasicViewModel {
    @computed get groupsList(): GroupInListDTO[] {
        return [{id: "10"}, {id: "20"}, {id: "30"}]
    }

    constructor() {
        super();
        makeObservable(this)
    }
}

export default MainViewModel