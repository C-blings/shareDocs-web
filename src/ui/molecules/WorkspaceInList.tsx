import WorkspaceInListDTO from "../../data/dto/WorkspaceInListDTO";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";

const useStyle = makeStyles((theme: Theme) => createStyles({
    main: {
        backgroundColor: theme.palette.backgroundSecondary.main,
        position: "relative",
        textAlign: "center",
        width: 300,
        height: 100,
        borderRadius: "5px"
    },
    title: {
        position: "absolute",
        top: "2px",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    info: {
        position: "absolute",
        width: 300,
        height: 50,
        top: "50%",
        left: "0%",
        right: "0%"
    },
    photo: {
        position: "absolute",
        top: "0%",
        left: "0%",
        width: 300,
        height: 50,
        padding: "-10px",
        borderRadius: "5px 5px 0px 0px",
        objectFit: "cover",
        overflow: "hidden",
        filter: "blur(1px) brightness(50%)"
    }
}))

const WorkspaceInList = (
    {
        workspace,
        onClick
    }:
        {
            workspace: WorkspaceInListDTO,
            onClick: (id: string) => void
        }
) => {

    const onClickFunction = () => {
        onClick(workspace.id)
    }

    const classes = useStyle()
    return (
        <div className={classes.main} onClick={onClickFunction}>
            <img className={classes.photo}
                 src="https://sun1-16.userapi.com/impg/gOqiE-JS9IFHkVeC9eepP3nA3ZLKs-f0ICSAHw/QrNn3kUz-go.jpg?size=1920x1280&quality=96&sign=e0c16272afa6b1b37a7236195789adde&type=album"
                 alt={"workspace photo"}
            />
            <h6 className={classes.title}>БПИ221</h6>
            <h6 className={classes.info}>Last edited 5 minutes ago</h6>
        </div>
    )
}

export default WorkspaceInList