import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/main';
import Project from './component/project';
import ProjectPublish from './component/project/publish/ProjectPublish';
import Detail from './component/project/detail/Detail';
import Club from './component/club';
import SignUp from './component/club/signUp/SignUp';
import ClubPublish from './component/club/publish/ClubPublish';
import ClubAdmin from './component/club/admin/ClubAdmin';
import { Header } from './component/emotion/Header';
import { PreventAutoScroll, ScrollToTop } from './util/util';

function App() {
  PreventAutoScroll();

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:sort?" element={<Project />} />
          <Route path="/project/detail/:id" element={<Detail />} />
          <Route path="/project/publish" element={<ProjectPublish />} />
          <Route path="/club" element={<Club />} />
          <Route path="/club/signUp" element={<SignUp />} />
          <Route path="/club/publish" element={<ClubPublish />} />
          <Route path="/club/admin" element={<ClubAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
