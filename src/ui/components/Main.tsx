import {view} from "@yoskutik/react-vvm";
import MainViewModel from "../viewmodels/MainViewModel";
import React, {useEffect} from "react";
import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import WorkspaceInList from "../molecules/WorkspaceInList";
import {useNavigate} from "react-router-dom";

const useStyle = makeStyles((theme: Theme) => createStyles({
    main: {
        height: "100vh"
    },
    list: {
        paddingTop: "10px",
        listStyleType: "none"
    },
    listItem: {
        margin: "10px"
    }
}))

const Main = view(MainViewModel)(({viewModel}) => {
    const classes = useStyle()
    const workspaces = viewModel.workspaces
    const navigate = useNavigate()

    useEffect(() => {
        viewModel.getWorkspaces()
    }, [])

    const onItemClick = (id: string) => {
        navigate(`/workspace/${id}`)
    }

    return (
        <div className={classes.main}>
            <h1>Workspaces</h1>
            <Grid container className={classes.list}>
                {workspaces.map((workspace, i) => {
                    return (
                        <Grid item className={classes.listItem} key={i}>
                            <WorkspaceInList
                                workspace={workspace}
                                onClick={onItemClick}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
});

export default Main