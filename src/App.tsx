import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './component/main';
import Project from './component/project';
import ProjectPublish from './component/project/publish/ProjectPublish';
import Detail from './component/project/detail/Detail';
import Club from './component/club';
import SignUp from './component/signUp/SignUp';
import ClubPublish from './component/club/publish/ClubPublish';
import ClubAdmin from './component/club/admin/ClubAdmin';
import { Header } from './component/emotion/Header';
import { RefreshTokenUtil, ScrollToTop } from './util/util';
import Login from './component/signUp/Login';
import MyPage from './component/signUp/MyPage';

function App() {
  // PreventAutoScroll();
  RefreshTokenUtil();

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project/:sort?" element={<Project />} />
        <Route path="/project/detail/:id" element={<Detail />} />
        <Route path="/project/publish" element={<ProjectPublish />} />
        <Route path="/club/:page" element={<Club />} />
        <Route path="/club/publish" element={<ClubPublish />} />
        <Route path="/club/admin/:clubId" element={<ClubAdmin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
