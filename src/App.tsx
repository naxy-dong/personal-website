import { Route, Routes } from "react-router-dom";
import "./Stylesheets/App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import { ThemeProvider, createTheme } from "@mui/material";
const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </ThemeProvider>

    </>
  );
}

export default App;
