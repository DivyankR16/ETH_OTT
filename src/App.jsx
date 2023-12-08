import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import UploadVideo from "./components/UploadVideo";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<UploadVideo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
