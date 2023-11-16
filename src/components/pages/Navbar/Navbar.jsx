import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

const pages = ["pizzas", "panes"];
const settings = [];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" elevation="24" sx={{ bgcolor: "grey" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <CartWidget sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
          </Link>
          <Box
            sx={{
              flexGrow: { xs: 10, md: 1 },
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  to={`/category/${page}`}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="end" color="black">
                      {page}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h2"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "flex", md: "block" },
                flexGrow: { xs: 10, md: 50 },
                ml: { xs: 2, md: 20 },
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 28,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Pizza string
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end", // Alineación a la derecha
              marginRight: "20px", // Ajuste del margen derecho
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={`/category/${page}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "orange",
                    display: "block",
                    marginLeft: "20px", // Ajuste del margen izquierdo entre las categorías
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://res.cloudinary.com/dohsaecvv/image/upload/v1696266028/sxfcenahcd2xjixe1wqk.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="black">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
