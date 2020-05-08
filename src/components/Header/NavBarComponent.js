import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from '../../assets/logo.jpg'
import { Link } from "react-router-dom"
import { Auth } from 'aws-amplify';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  
  buttonBoxing: {
    margin: theme.spacing(2)
  }

}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

 

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuCloseAndSignout = () => {
    setAnchorEl(null);
    Auth.signOut({ global: true })
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to="/Profile" onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem component={Link} to="/Dashboard" onClick={handleMenuClose}>Dashboard</MenuItem>
      <MenuItem component={Link} to="/Settings" onClick={handleMenuClose}>Settings</MenuItem>
      <MenuItem component={Link} to="/" onClick={handleMenuCloseAndSignout}>Sign Out</MenuItem>
    </Menu>
  );  

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: '#2E3B55' }} height="100">
        <Toolbar>
          <Link to='/' className="logo">          
            <img alt="logo" className={"item"} src={logo} height={100}/>
          </Link>
          <div className={classes.grow} />
          { props.loggedIn &&

            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit" 
              >
                <AccountCircle />
              </IconButton>
            </div>

          }

          { !props.loggedIn &&
            <div>
              <Button className={classes.buttonBoxing} variant="contained" color="secondary" >Become a Creator</Button>
              <Button className={classes.buttonBoxing} variant="contained" color="primary" onClick={() => Auth.federatedSignIn()}>Sign In</Button>

            </div>

          }
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

