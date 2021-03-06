import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const BootstrapButton = withStyles({
    root: {
      textTransform: 'none',
    },
  })(Button);
  
  


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
    
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


export default function CustomizedMenus(props) {
  const handleChange= props.handleChange
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  

  const handleSelectAndCLose = (text, event) => {
    handleClose(event);
    handleChange(
        {
            target: {
                name: "full_time",
                value: text
            } 
        }
    )
  };

  const prefix = props.prefix
  const timeItem = props.item 
  const size = props.size
  return (
    <div>
    { props.item === "" &&
        <BootstrapButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        value={timeItem}
        size={size}
      >
        {prefix} Please Select One <KeyboardArrowDownIcon/>
      </BootstrapButton>
    }
    { props.item !== "" &&
        <BootstrapButton 
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        value={timeItem} 
        size={size}
        >
            {prefix}{timeItem} <KeyboardArrowDownIcon/>
        </BootstrapButton>
    }
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={(event) => handleSelectAndCLose("Full-Time", event)}>
          <ListItemText primary="Full-Time" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(event) => handleSelectAndCLose("Part-Time", event)}>
          <ListItemText primary="Part-Time" />
        </StyledMenuItem>
        <StyledMenuItem onClick={(event) => handleSelectAndCLose("For Fun", event)}>
          <ListItemText primary="For Fun" />
        </StyledMenuItem>
        </StyledMenu>
        
    </div>
  );
}
