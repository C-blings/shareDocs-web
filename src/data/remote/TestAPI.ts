import {BasicAPI} from "./BasicAPI";
import app from "../../App";
import {injectable} from "tsyringe";
import TestDTO from "../dto/TestDTO";
@injectable()
export class TestAPI extends BasicAPI {

    constructor() {
        super();
    }

    getApp = () => {
        return TestAPI.api.get<unknown, TestDTO>('/')
    }

}