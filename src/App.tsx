import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component';
import Project from './component/project';
import Publish from './component/project/publish/Publish';
import Detail from './component/project/detail/Detail';
import { Header } from './component/emotion/component';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/detail" element={<Detail />} />
          <Route path="/project/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
