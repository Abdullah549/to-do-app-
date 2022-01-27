import * as api from "../api";
export const getTask = () => async (dispatch) => {
  console.log("in get task...");
  try {
    const { data } = await api.fetchAll();
    dispatch({ type: "GETDATA", payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const creatTask = (task) => async (dispatch) => {
  console.log("i am in create task", task);
  try {
    const { data } = await api.createTask(task);
    dispatch({ type: "CREATE", payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const updatedTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(task);
    dispatch({ type: "UPDATE", payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const deleteTask = (id) => async (dispatch) => {
  try {
    const { data } = await api.delateTask(id);
    console.log(data);
    dispatch({ type: "DELETE", payload: data });
  } catch (err) {
    console.log(err);
  }
};
