import React, { useState } from "react";
import {
  Paper,
  IconButton,
  Typography,
  TextField,
  Modal,
  Grid,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import axiosConfig from "../../services/axiosConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  typography: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AddItem = () => {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosConfig
      .post("/add", {
        message,
        completed: false,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage("");
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleOpen}
      >
        <Add />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper className={classes.root}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid>
              <Typography
                align="center"
                variant="h6"
                className={classes.typography}
              >
                Add Item
            </Typography>
            </Grid>
            <Grid container direction="row">
              <form noValidate autoComplete="off">
                <TextField
                  id="message"
                  label="e.g. Milk"
                  variant="outlined"
                  onChange={handleChange}
                />
              </form>
              <IconButton onClick={handleSubmit}>
                <Add />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  );
};

export default AddItem;
