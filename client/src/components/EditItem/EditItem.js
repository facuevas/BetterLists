import React, { useState } from "react";
import {
    Paper,
    IconButton,
    Typography,
    TextField,
    Modal
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    typography: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));

const EditItem = props => {
    const classes = useStyles();
}