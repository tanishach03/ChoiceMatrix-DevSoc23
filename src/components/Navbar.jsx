import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
        <Link to='/' className='Logo'>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              textDecoration: 'none',
              color: 'black',
              alignItems: 'center',
              ":hover": {
                color: "black"
              }
            }}
            component={Link}
            to={"/"}
          >
            <img src={Logo} alt='logo' className='logo'/>
            CHOICEMATRIX
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                flexDirection: 'column',
              }}
              className='nav-menu'
            >
              <MenuItem key={'Home'} onClick={handleCloseNavMenu}>
                <Link to='/about' className='navlink'>
                  <Typography textAlign="center">About</Typography>
                </Link>
              </MenuItem>
              <MenuItem key={'About'} onClick={handleCloseNavMenu}>
                <Link to='/contact' className='navlink'>
                  <Typography textAlign="center">Contact Us</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
            <Typography
              variant="h5"
              noWrap
              component='a'
              href='/'
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
                CHOICEMATRIX
            </Typography>
          <Box sx={{ my: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end", }}>
            <Link to='/about' className='navlink'>
              <Button
                key='About'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000000a6', display: 'block', margin: '0 40px 0 40px', fontWeight: 'bolder', textTransform: 'capitalize', "&:hover": { backgroundColor: "transparent" }, fontSize: '11pt' }}
              >
                About
              </Button>
            </Link>
            <Link to='/contact' className='navlink'>
              <Button
                key='About'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000000a6', display: 'block', margin: '0 40px 0 40px', fontWeight: 'bolder', textTransform: 'capitalize', "&:hover": { backgroundColor: "transparent" }, fontSize: '11pt' }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

}
export default Navbar;