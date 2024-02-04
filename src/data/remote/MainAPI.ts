import {singleton} from "tsyringe";
import {BasicAPI} from "./BasicAPI";
import WorkspaceInListDTO from "../dto/WorkspaceInListDTO";
import {data} from "browserslist";


@singleton()
export class MainAPI extends BasicAPI {

    getWorkspace = () => {
        // return new Promise<GroupInListDTO[]>((resolve, reject) => {
        //     return [{id: "10"}, {id: "20"}, {id: "30"}]
        // });
        return MainAPI.api.get<WorkspaceInListDTO[]>('/get-workspaces')
    }

}