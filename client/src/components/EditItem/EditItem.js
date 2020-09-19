import React, { useState } from "react";
import {
    Paper,
    IconButton,
    Typography,
    TextField,
    Modal,
    Grid,
    FormGroup,
    FormControlLabel,
    Switch,
    Button
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import axiosConfig from "../../services/axiosConfig";

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
    },
    iconButton: {
        padding: "0 10px 0 0",
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(3),
    }
}));

const EditItem = props => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(props.todo.message);
    const [completed, isCompleted] = useState(props.todo.completed);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSwitchChange = (event) => {
        isCompleted(completed => !completed);
        console.log(completed);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosConfig.put(`/edit/${props.todo._id}`, {
            message,
            completed
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        setOpen(false);
    }

    return (
        <>
            <IconButton className={classes.iconButton} onClick={handleOpen}>
                <Edit />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Paper>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography className={classes.typography} variant="h6">Todo ID {props.todo._id}</Typography>
                        <form noValidate autoCorrect="off" className={classes.root}>
                            <TextField
                                required
                                id="outlined-basic"
                                label="Todo Message"
                                variant="outlined"
                                defaultValue={message}
                                helperText="Edit the Todo message here"
                                onChange={handleMessageChange} />
                        </form>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={completed}
                                        name="completed"
                                        color="primary"
                                        onChange={handleSwitchChange} />
                                }
                                label="Todo Completed"
                            />
                        </FormGroup>
                        <Button
                            variant="contained"
                            className={classes.button}
                            color="primary"
                            startIcon={<Edit />}
                            onClick={handleSubmit}
                        >
                            Save Changes
                        </Button>
                    </Grid>
                </Paper>
            </Modal>
        </>
    );
}

export default EditItem;