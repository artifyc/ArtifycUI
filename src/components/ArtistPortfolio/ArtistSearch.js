import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import '../../style/artistPortfolio/artistSearch.css'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

export default function ArtistSearch() {
  const classes = useStyles();
  return (
    <div class="artistSearch">
    <p> Search sabimaki's Portfolio </p>
    <Paper component="form" className={classes.root}>
    <IconButton type="submit" className={classes.iconButton} aria-label="search">
      <SearchIcon />
    </IconButton>
    <InputBase
  className={classes.input}
  placeholder="Search artist portfolio"
  inputProps={{ 'aria-label': 'search artist portfolio' }}
            variant="outlined"
/>

</Paper>

</div>
  );
}
