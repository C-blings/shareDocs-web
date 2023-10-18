import {BasicAPI} from "./BasicAPI";
import app from "../../App";
import {injectable} from "tsyringe";
import AppDTO from "../dto/AppDTO";
@injectable()
export class AppAPI extends BasicAPI {

    constructor() {
        super();
    }

    getApp = () => {
        return AppAPI.api.get<unknown, AppDTO>('/')
    }

}