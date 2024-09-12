import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import Header from "./components/layout/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />}>
          <Route path=":courseId" element={<h2>wow</h2>} />
        </Route>
      </Routes>
    </>
  );
}

const Course = () => {
  return (
    <>
      <h1>COURSE</h1>
      <Outlet />
    </>
  );
};

export default App;
