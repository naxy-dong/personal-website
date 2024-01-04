import styled from "@emotion/styled";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import ColorModeContext from "../hooks/ColorModeContext";

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

  const drawerWidth = 240;
  const navItems = ["Home", "About", "Contact"];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar position="fixed" component="nav">
        <Toolbar style={navContainerStyles}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <Box>
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
              </Box>
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
                  // color: "text.primary",
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
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* This toolbar is create vertical offset at the top. */}
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;
