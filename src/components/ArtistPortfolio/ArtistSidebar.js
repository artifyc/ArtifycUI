import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArtistAbout from './ArtistAbout';
import ArtistAcclaim from './ArtistAcclaim';
import ArtistSearch from './ArtistSearch';
import '../../style/artistPortfolio/artistSidebar.css';

export default function ArtistSidebar(props) {

  return (
    <div class="sidebar">
      <ArtistAbout data={props.data}/>
      <div class="ending-black-line"> </div>
      <ArtistSearch  />
      <div class="ending-black-line"> </div>
      <ArtistAcclaim  data={props.data}/>
    </div>
  );
}
