import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import UploadVideo from "./components/UploadVideo";
import SingleVideo from "./components/SingleVideo";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path='/single' element={<SingleVideo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
