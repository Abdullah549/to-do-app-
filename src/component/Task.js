import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AddTask from "./AddTask";
import { getTask, deleteTask } from "../action/task";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Task() {
  const dispatch = useDispatch();
  const GetAllTask = async () => {
    dispatch(getTask());
  };

  const DispatchDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  useEffect(() => {
    GetAllTask();
  }, []);

  const tasks = useSelector((state) => state.task);
  const taskList = tasks.map((task, index) => {
    return (
      <>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Task" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={`Task ${index + 1}`}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {task.name}
                  </Typography>
                </React.Fragment>
              }
            />
            <IconButton aria-label="delete">
              <DeleteIcon onClick={() => DispatchDeleteTask(task._id)} />
            </IconButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </>
    );
  });
  return (
    <>
      <div className="row">
        <div className="col-4">
          <AddTask></AddTask>
          <div className="mt-1">{taskList}</div>
        </div>
      </div>
    </>
  );
}
export default Task;
