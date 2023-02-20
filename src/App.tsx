import React from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import Auth from "./components/Auth/Auth";
import Score from "./components/Score/Score";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </>
  );
}

export default App;
