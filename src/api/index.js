import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/task" });

export const fetchAll = () => API.get("/getAll");
export const createTask = (task) => API.post("/createTask", task);
export const updateTask = (task) => API.put("/updateTask", task);
export const delateTask = (id) => API.delete(`/deleteTask/${id}`);
