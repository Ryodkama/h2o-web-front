import React from "react";
import Top from "./routes/Top/Top";
import Login from "./routes/Login/Login";
import Signup from "./routes/Signup/Signup";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Studio from "./routes/Studio/Studio";
import FindOrche from "./routes/FindOrche/FindOrche";
import Collection from "./routes/Collection/Collection";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/findorche" element={<FindOrche />} />
      <Route path="/mycln" element={<Collection />} />
    </Routes>
  </>
);

export default App;
