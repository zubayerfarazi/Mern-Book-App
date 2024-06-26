import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/books/create" element={<CreateBook></CreateBook>}></Route>
        <Route path="/books/edit/:id" element={<EditBook></EditBook>}></Route>
        <Route
          path="/books/details/:id"
          element={<ShowBook></ShowBook>}
        ></Route>
        <Route
          path="/books/delete/:id"
          element={<DeleteBook></DeleteBook>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
