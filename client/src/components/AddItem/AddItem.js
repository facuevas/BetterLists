import React, { useState } from 'react';
import { Paper, IconButton, Typography, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import axiosConfig from '../../services/axiosConfig';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    typography: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
}));

const AddItem = props => {
    const classes = useStyles();
    const [message, setMessage] = useState("");

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        axiosConfig.post('/add', {
            message,
            completed: false
        })
        .then(response => {
            console.log("TODO ADDED")
            //window.location.reload(false);
        })
        .catch(error => {
            console.log(error);
        });
        setMessage("");
    };

    return (
        <Paper className={classes.paper}>
            <Typography align="center" variant="h4" className={classes.typography}>
                Add Item
            </Typography>
            <form noValidate autoComplete="off">
                <TextField id="message" label="e.g. Milk" onChange={handleChange}/>
            </form>
            <IconButton onClick={handleSubmit}>
                <Add />
            </IconButton>
        </Paper>
    );
};

export default AddItem;