import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import { useNavigate } from "react-router-dom";
import Example from "./pages/Example";

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/example" element={<Example />} />
      </Routes>
    </>
  );
}

export default App;
