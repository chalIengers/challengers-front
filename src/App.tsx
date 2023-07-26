import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component';
import Project from './component/project';
import ProjectPublish from './component/project/publish/ProjectPublish';
import Detail from './component/project/detail/Detail';
import Club from './component/club';
import { Header } from './component/emotion/component';
import SignUp from './component/club/signUp/SignUp';
import ClubPublish from './component/club/publish/ClubPublish';
import Admin from './component/admin';
import AdminClub from './component/admin/club/AdminClub';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/detail" element={<Detail />} />
          <Route path="/project/publish" element={<ProjectPublish />} />
          <Route path="/club" element={<Club />} />
          <Route path="/club/signUp" element={<SignUp />} />
          <Route path="/club/publish" element={<ClubPublish />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/club" element={<AdminClub />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
