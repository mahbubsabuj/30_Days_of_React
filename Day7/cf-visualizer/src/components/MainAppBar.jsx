import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { SvgIcon } from "@mui/material";
import { Container } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const pages = ["Home", "Contests", "Compare", "About"];
const routes = ["/", "/contests", "/compare", "/about"];

const MainAppBar = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {pages.map((page, index) => (
        <MenuItem
          style={{ textDecoration: "none" }}
          component={Link}
          to={routes[index]}
          key={page}
          value={index}
        >
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <SvgIcon sx={{ pr: 2 }}>
            <path
              fill="#F44336"
              d="M24,19.5V12c0-0.828-0.672-1.5-1.5-1.5h-3c-0.828,0-1.5,0.672-1.5,1.5v7.5c0,0.828,0.672,1.5,1.5,1.5h3C23.328,21,24,20.328,24,19.5z"
            />
            <path
              fill="#2196F3"
              d="M13.5,21c0.828,0,1.5-0.672,1.5-1.5v-15C15,3.672,14.328,3,13.5,3h-3C9.673,3,9,3.672,9,4.5v15c0,0.828,0.673,1.5,1.5,1.5H13.5z"
            />
            <path
              fill="#FFC107"
              d="M0,19.5C0,20.328,0.673,21,1.5,21h3C5.328,21,6,20.328,6,19.5V9c0-0.828-0.672-1.5-1.5-1.5h-3C0.673,7.5,0,8.172,0,9V19.5z"
            />
          </SvgIcon>

          <Typography variant="h6" noWrap component="div">
            Codeforces Visualizer
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <MenuItem
                style={{ textDecoration: "none" }}
                component={Link}
                to={routes[index]}
                key={page}
                value={index}
              >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
      </Container>
    </AppBar>
  );
};

export default MainAppBar;
