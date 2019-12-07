import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GearsIcon from '../../assets/settings-gears.png';
import { CardActionArea } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "50%",
  },
  paper: {
    margin: '20px 10px',
    maxWidth: "100%",
  },
  image: {
    width: 128,
    height: 128,
    background: "#f1f1f1",
    '&:hover': {
      background: "#f00",
    }
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0.5,
    }
  },
  focusHighlight: {}
}));

export default function ComplexGrid({title, description}) {
  const classes = useStyles();

  const titleToPathMap = {
    "View Orders": "orders",
    "View Messages": "messages",
    "Account Settings": "settings",
    "Portfolio Settings": "portfolio",
  }

  var path = titleToPathMap[title]

  return (
    <CardActionArea className={classes.root} classes={{
      root: classes.actionArea,
      focusHighlight: classes.focusHighlight
    }} component={Link} to={path} disableRipple>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
              <img className={classes.img} alt="complex" src={GearsIcon} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </CardActionArea>
  );
}