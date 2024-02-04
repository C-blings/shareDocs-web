import {BasicViewModel} from "./BasicViewModel";
import {injectable} from "tsyringe";
import {computed, makeObservable, observable} from "mobx";
import WorkspaceInListDTO from "../../data/dto/WorkspaceInListDTO";
import {MainRepository} from "../../data/repository/MainRepository";

@injectable()
class MainViewModel extends BasicViewModel {
    @observable workspaces: WorkspaceInListDTO[] = []

    constructor(private repository: MainRepository) {
        super();
        makeObservable(this)
    }

    getWorkspaces = () => {
        this.workspaces = [{id: "10"}, {id: "20"}, {id: "30"}, {id: "30"}, {id: "30"}, {id: "30"}, {id: "30"}, {id: "30"}, {id: "30"}]
        // this.repository.getWorkspaces().then(
        //     result => {
        //         console.log(result)
        //         this.workspaces = result
        //     }
        // )
    }
}

export default MainViewModel