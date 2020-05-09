import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone';
import ViewListIcon from '@material-ui/icons/ViewList';
import BrushIcon from '@material-ui/icons/Brush';
import { CardActionArea } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "50%",
  },
  paper: {
    margin: '20px',
    maxWidth: "100%",
  },
  image: {
    width: 128,
    height: 128,
  },
    actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0.35,
    }
  },
  focusHighlight: {color: 'white'},
  card: {
    borderRadius: '5px',
    borderColor: '#cdcdcd'
  }
  
}));

const titleToResourcesMap = {
  "View Orders": {
    path: "orders",
    image: <ViewListIcon style={{fontSize: "7rem", opacity: 0.5, color: "#e60000"}}/>,
    bcolor: "#e60000"
  },
  "View Messages": {
    path: "messages",
    image: <QuestionAnswerTwoToneIcon style={{fontSize: "7rem", opacity: 0.5, color: "#ffaa00"}}/>,
    bcolor: '#ffaa00'
  },
  "Account Settings": {
    path: "settings",
    image: <SettingsIcon style={{fontSize: "7rem", opacity: 0.5, color: "#3385ff"}}/>,
    bcolor: '#3385ff'
  },
  "Portfolio Settings": {
    path: "portfolio",
    image: <BrushIcon style={{fontSize: "7rem", opacity: 0.5, color: "green"}}/>,
    bcolor: 'green'
  },
};

function getIcon(title) {
  return titleToResourcesMap[title].image;
}

export default function ComplexGrid({title, description}) {
  const classes = useStyles();

  var path = titleToResourcesMap[title].path;
  var bcolor = titleToResourcesMap[title].bcolor
  var icon = getIcon(title);
  return (
    <CardActionArea className={classes.root} classes={{
      root: classes.actionArea,
      focusHighlight: classes.focusHighlight
    }} component={Link} to={path} disableRipple>
      <Box border={5} borderColor={bcolor} margin={'5px'}>
        <Grid container spacing={2} justify="center" alignContent="center">
          <Grid item xs={12} sm>
              {icon}
          </Grid>
          <Grid item xs={12} sm container>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {description}
                </Typography>
              </Grid>
          </Grid>
        </Grid>
      </Box>
    </CardActionArea>
  );
}