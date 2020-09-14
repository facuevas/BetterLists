import React from "react";
import { Paper, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, Edit, Done } from "@material-ui/icons";
import axiosConfig from "../../services/axiosConfig";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "10px",
    maxWidth: "auto",
    height: "50px",
    padding: "15px 0 0 10px",
  },
  isCompleted: {
    textDecoration: "line-through",
    fontStyle: "italic",
  },
  deleteButton: {
    padding: "0 10px 0 0",
  },
}));

const TodoItem = (props) => {
  const classes = useStyles();

  const handleDelete = () => {
    const todoId = props.todo._id;
    axiosConfig
      .delete(`/delete/${todoId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleComplete = () => {
    const todoId = props.todo._id;
    axiosConfig
      .put(`/edit/${todoId}`, {
        completed: !props.completed,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid>
          {props.todo.completed ? (
            <Typography className={classes.isCompleted}>
              {props.todo.message}
            </Typography>
          ) : (
            <Typography>{props.todo.message}</Typography>
          )}
        </Grid>
        <Grid>
          <IconButton className={classes.deleteButton} onClick={handleComplete}>
            <Done />
          </IconButton>
          <IconButton className={classes.deleteButton}>
            <Edit />
          </IconButton>
          <IconButton className={classes.deleteButton} onClick={handleDelete}>
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoItem;
