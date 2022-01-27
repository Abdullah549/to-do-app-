export default (task = [], action) => {
  switch (action.type) {
    case "GETDATA":
      return action.payload;
    case "CREATE":
      return [...task, action.payload];
    case "UPDATE":
      return task.map((t) => {
        // remove brackets
        return <>{t._id === action.payload.id ? action.payload : t}</>;
      });
    case "DELETE":
      return task.filter((t) => t._id !== action.payload);
    default:
      return task;
  }
};
