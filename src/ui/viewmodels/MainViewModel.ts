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
        this.workspaces = []
        let date = new Date().toLocaleString()
        for (let i = 1; i <= 12; i++) {
            this.workspaces.push({
                id: i.toString(),
                title: "БПИ22" + i.toString(),
                image: "https://sun1-16.userapi.com/impg/gOqiE-JS9IFHkVeC9eepP3nA3ZLKs-f0ICSAHw/QrNn3kUz-go.jpg?size=1920x1280&quality=96&sign=e0c16272afa6b1b37a7236195789adde&type=album",
                info: "Ближайший дедлайн: " + date
            })
        }
        // this.repository.getWorkspaces().then(
        //     result => {
        //         console.log(result)
        //         this.workspaces = result
        //     }
        // )
    }
}

export default MainViewModel