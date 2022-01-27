import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Task from "./component/Task";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Task />}></Route>
          <Route exact path="/contact"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
