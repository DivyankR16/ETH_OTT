import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import UploadVideo from "./components/UploadVideo";
import SingleVideo from "./components/SingleVideo";
import UserProfile from "./pages/Dashboard";
import SearchVideo from "./components/SearchVideo";

import Video from "./components/Video";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchVideo" element={<SearchVideo />} />
          <Route path="/video" element={<Video />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/insmetamask" element={<ErrorPage />} />
          {/* <Route path="/upload" element={<UploadVideo />} />
          <Route path='/single' element={<SingleVideo/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
