import { Route, Routes } from "react-router-dom";
import "./Stylesheets/App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
