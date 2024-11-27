import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import { useNavigate } from "react-router-dom";
import Example from "./pages/Example";
import Applynow from "./pages/Applynow";
import Contactus from "./pages/Contactus";
import Gallery from "./pages/Gallery";
import Notices from "./pages/Notices";

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/example" element={<Example />} />
        <Route path="/applynow" element={<Applynow />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
    </>
  );
}

export default App;
