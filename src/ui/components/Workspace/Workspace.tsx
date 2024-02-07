import {useParams} from "react-router-dom";

const Workspace = () => {
    const params = useParams()
    return (
        <h1>Hello at {params.id}</h1>
    )
}

export default Workspace