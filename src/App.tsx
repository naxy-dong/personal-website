import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./Stylesheets/App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ColorModeContext from "./hooks/ColorModeContext";

function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export { App };
