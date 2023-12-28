import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
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
  // gap: '3rem',
};

function Navbar() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar style={navContainerStyles}>
          <StyledLink to="/">
            <Typography
              variant="h6"
              // noWrap
              // component="div"
              // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Home
            </Typography>
          </StyledLink>

          <StyledLink to="/AboutMe">
            <Typography variant="h6">About me</Typography>
          </StyledLink>

          <StyledLink to="/Blog">
            <Typography variant="h6">Blog</Typography>
          </StyledLink>

          <StyledLink target="_blank" to="https://google.com">
            <Typography variant="h6">CV</Typography>
          </StyledLink>

          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton> */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;
