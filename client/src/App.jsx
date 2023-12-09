import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import UploadVideo from "./components/UploadVideo";
import SingleVideo from "./components/SingleVideo";
import Dashboard from "./pages/Dashboard";
import SearchVideo from "./components/SearchVideo";
import Userprofile from "./components/Userprofile";
import Video from "./components/Video";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path='/single' element={<SingleVideo />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
