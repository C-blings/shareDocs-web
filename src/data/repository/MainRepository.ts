import {singleton} from "tsyringe";
import {BasicRepository} from "./BasicRepository";
import {MainAPI} from "../remote/MainAPI";
import WorkspaceInListDTO from "../dto/WorkspaceInListDTO";
import {data} from "browserslist";


@singleton()
export class MainRepository extends BasicRepository {

    constructor(private api: MainAPI) {
        super();
    }

    getWorkspaces = async () =>
        await this.api.getWorkspace().then(
            data => {
                // return [{id: "10"}, {id: "20"}, {id: "30"}]
                return data.data
            }
        )

}