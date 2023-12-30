import styled from "@emotion/styled";
import { Box, Grid, IconButton, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../App";

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2px;
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
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar style={navContainerStyles}>
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
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
            </Grid>
            <Grid item xs>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  // bgcolor: "background.default",
                  color: "text.primary",
                }}
              >
                {theme.palette.mode} mode
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;
