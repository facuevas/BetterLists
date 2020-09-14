import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Modal,
  IconButton,
} from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import AddItem from "../AddItem/AddItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleOpen}
          >
            <Add />
          </IconButton>
          <Modal open={open} onClose={handleClose} className={classes.modal} aria-labelledby="modal-title" aria-describedby="modal-description">
            <AddItem />
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
