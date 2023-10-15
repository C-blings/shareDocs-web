import {ErrorsCode} from "./ErrorsCode";

export const Mapper = (error: ErrorsCode) => {
    switch (error) {
        case ErrorsCode.NotFound:
            return "Not found"
        case ErrorsCode.BadRequest:
            return "BadRequest"
    }
}