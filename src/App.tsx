import { Route, Routes } from "react-router-dom";
import "./Stylesheets/App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Blog from "./Pages/Blog";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
