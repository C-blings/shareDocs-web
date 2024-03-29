import {singleton} from "tsyringe";
import axios from "axios";
import app from "../../App";
import {APIConstants} from "./APIConstants";

@singleton()
export class BasicAPI {
    public static api = axios.create({
        baseURL: APIConstants.BASE_URL
    })
}