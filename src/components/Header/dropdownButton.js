import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const titleToResourcesMap = {
    "Account": {
      image: <AccountCircle />,
      dropItems: [{
        itemName: 'Profile',
        itemLink: '/Profile'
      },
      {
        itemName: 'Dashboard',
        itemLink: '/Dashboard'
      },
      {
        itemName: 'Settings',
        itemLink: '/Settings'
      }]
    },
    "Notifications": {
      image: <Badge badgeContent={0} color="secondary"><NotificationsIcon /></Badge>,
      dropItems: [{
        itemName: 'No new notifications',
        itemLink: '/Notifications'
      }]
    },
    "Messages": {
      image: <Badge badgeContent={0} color="secondary"><MailIcon /></Badge>,
      dropItems: [{
        itemName: 'No new messages',
        itemLink: '/Messages'
      }]
    },
  };

export default function MenuListComposition({title}) {
  console.log(title)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const imageName = titleToResourcesMap[title].image
  const dropItems = titleToResourcesMap[title].dropItems

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color='inherit'
        >
          {imageName}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {dropItems.map(value => (
                        <MenuItem key={value.itemName} component={Link} to={value.itemLink} onClick={handleClose}>{value.itemName}</MenuItem>
                    ))}
    
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}