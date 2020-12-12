import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/logo.jpg'
import { Link } from "react-router-dom"
import { Auth } from 'aws-amplify';
import Button from '@material-ui/core/Button';
import DropButton from './dropdownButton'

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

  const descriptionArray = [
    {
        title: "Messages",
    },
    {
        title: "Notifications",
    },
    {
        title: "Account",
    }
]

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: '#2E3B55' }} height="100">
        <Toolbar>
          <Link to='/' className="logo">          
            <img alt="logo" className={"grow"} src={logo} height={50}/>
          </Link>
          <div className={classes.grow} />
          { props.loggedIn &&
            <div className={classes.sectionDesktop}>
              {descriptionArray.map(value => (
                    <DropButton key={value.title} {...value}/>
                ))}
            </div>
          }
          { !props.loggedIn &&
            <div>
              <Link to='/signup'>
                <Button className={classes.buttonBoxing}  variant="contained" color="secondary" >Become a Creator</Button>
              </Link>
              <Button className={classes.buttonBoxing} variant="contained" color="primary" onClick={() => Auth.federatedSignIn()}>Sign In</Button>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

