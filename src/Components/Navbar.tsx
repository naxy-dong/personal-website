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
  // Themes and color
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  // Responsive navbar & drawer
  const drawerWidth = 240;
  const navItems = [
    ["Home", "/"],
    ["About", "/AboutMe"],
    ["Courses", "/Courses"],
    ["Blog", "/Blog"],
    ["Contact", "/Contact"],
    ["CV", "https://google.com"],
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        My Website
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={item[1]}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item[0]} />
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
                {navItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <StyledLink to={item[1]}>
                      <Typography variant="h6">{item[0]}</Typography>
                    </StyledLink>
                  </React.Fragment>
                ))}
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
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
