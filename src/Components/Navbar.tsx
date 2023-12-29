import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  display: inline-block;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
  }

  &:visited {
    color: white;
  }
`;

const navContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // gap: '1rem',
};

function Navbar() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar style={navContainerStyles}>
          <StyledLink to="/">
            <Typography variant="h6">Home</Typography>
          </StyledLink>

          <StyledLink to="/AboutMe">
            <Typography variant="h6">About me</Typography>
          </StyledLink>

          <StyledLink to="/Courses">
            <Typography variant="h6">Courses</Typography>
          </StyledLink>

          <StyledLink to="/Blog">
            <Typography variant="h6">Blog</Typography>
          </StyledLink>

          <StyledLink to="/Contact">
            <Typography variant="h6">Contact</Typography>
          </StyledLink>

          <StyledLink target="_blank" to="https://google.com">
            <Typography variant="h6">CV</Typography>
          </StyledLink>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;
