import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import UploadVideo from "./components/UploadVideo";
import SingleVideo from "./components/SingleVideo";
import SearchVideo from "./components/SearchVideo";
import Userprofile from "./components/Userprofile";
import Video from "./components/Video";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Layout />}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/searchVideo" element={<SearchVideo />} />
          <Route path="/video" element={<Video />} />
          <Route path="/userprofile" element={<Userprofile />} />
          {/* <Route path="/upload" element={<UploadVideo />} />
          <Route path='/single' element={<SingleVideo/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
