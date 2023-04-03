import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import nileLogo from "../assets/images/Nile-XLogo.png";
import { Link } from "@mui/material";

const MainAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" sx={{ paddingY: 2 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href="/" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={nileLogo} srcSet={nileLogo} alt="nilex id" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#ffffff" }}
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
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="roadmap" onClick={handleCloseNavMenu}>
                <Link href="#river-roadmap" sx={{ textDecoration: "none" }}>
                  <Typography textAlign="center" color="#FFFFFF">
                    Roadmap
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem key="foundersClub" onClick={handleCloseNavMenu}>
                <Link href="/founders-club" sx={{ textDecoration: "none" }}>
                  <Typography textAlign="center" color="#FFFFFF">
                    Founders Club
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem key="team" onClick={handleCloseNavMenu}>
                <Link href="/team" sx={{ textDecoration: "none" }}>
                  <Typography textAlign="center" color="#FFFFFF">
                    Team
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem key="ecosystem" onClick={handleCloseNavMenu}>
                <Link href="/ecosystem" sx={{ textDecoration: "none" }}>
                  <Typography textAlign="center" color="#FFFFFF">
                    Ecosystem
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem key="tokenomics" onClick={handleCloseNavMenu}>
                <Link href="/tokenomics" sx={{ textDecoration: "none" }}>
                  <Typography textAlign="center" color="#FFFFFF">
                    Tokenomics
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Link href="/" sx={{ display: { xs: "flex", md: "none" }, mr: 5 }}>
            <img src={nileLogo} srcSet={nileLogo} alt="nilex id" width="85%" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href="#river-roadmap" sx={{ textDecoration: "none" }}>
              <Button
                key="roadmap"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, px: 2, color: "white", display: "block" }}
              >
                Roadmap
              </Button>
            </Link>

            <Link href="/founders-club" sx={{ textDecoration: "none" }}>
              <Button
                key="foundersClub"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, px: 2, color: "white", display: "block" }}
              >
                Founders Club
              </Button>
            </Link>

            <Link href="/team" sx={{ textDecoration: "none" }}>
              <Button
                key="team"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, px: 2, color: "white", display: "block" }}
              >
                Team
              </Button>
            </Link>

            <Link href="/ecosystem" sx={{ textDecoration: "none" }}>
              <Button
                key="ecosystem"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, px: 2, color: "white", display: "block" }}
              >
                Ecosystem
              </Button>
            </Link>

            <Link href="/tokenomics" sx={{ textDecoration: "none" }}>
              <Button
                key="tokenomics"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, px: 2, color: "white", display: "block" }}
              >
                Tokenomics
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              size="medium"
              sx={{
                my: 2,
                background: `${props.colorz.bgColor}`,
                display: "block",
                textTransform: "capitalize",
                fontWeight: 800,
              }}
            >
              <Link
                href="/contact-us"
                sx={{
                  textDecoration: "none",
                  color: `${props.colorz.txtColor} !important`,
                }}
              >
                Contact Us
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainAppBar;
