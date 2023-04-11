import React from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import Auth from "./components/Auth/Auth";
import Score from "./components/Score/Score";
import Admin from "./components/Admin/Admin";
import CreateConsultant from "./components/CreateConsultant/CreateConsultant";
import ChooseAuth from "./components/ChooseAuth/ChooseAuth";
import ConsultantAuth from "./components/ConsultantAuth/ConsultantAuth";
import ConsultantPanel from "./components/ConsultantPanel/ConsultantPanel";
import User from "./components/User/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChooseAuth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/score" element={<Score />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/consultant-auth" element={<ConsultantAuth />} />
        <Route path="/create-consultant" element={<CreateConsultant />} />
        <Route path="/consultant/:id" element={<ConsultantPanel />} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </>
  );
}

export default App;
