import { Search } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton> */}
          <Link to="/">
            <Typography
              variant="h6"
              // noWrap
              // component="div"
              // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Home
            </Typography>
          </Link>
          <Link to="/AboutMe">
            <Typography
              variant="h6"
              // noWrap
              // component="div"
              // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              About me
            </Typography>
          </Link>

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
