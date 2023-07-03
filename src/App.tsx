import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component";
import Project from "./component/project";
import Publish from "./component/project/publish/Publish";
import Detail from "./component/project/detail/Detail";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/*" element={<Project />}>
            <Route path="detail" element={<Detail />} />
            <Route path="publish" element={<Publish />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
