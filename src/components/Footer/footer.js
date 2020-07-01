import React from 'react';
import ReactDOM from 'react-dom';
import '../style/footer.css';
import '../style/grid.css';
import { Grid, Paper, makeStyles } from '@material-ui/core';

class Footer extends React.Component {
  render() {
    return (
       <div class="grid-container">  
        <grid-header></grid-header>
        <grid-header></grid-header>
        <grid-header></grid-header>
        <grid-header>Company</grid-header>
        <grid-header>About</grid-header>
        <grid-header>Resources</grid-header>
        <grid-header></grid-header>
        <div></div>
        <div></div>
        <div></div>
        <div>Press</div>
        <div>Founders</div>
        <div>Artist's Guide</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>Legal</div>
        <div>Mission</div>
        <div>Buying on Artifyc </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>Partnerships</div>
        <div>State of the Art Report</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>Terms and Conditions</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="grid-base">
          <ad></ad>
          <div class="twitter"></div>
          <div class="instagram"></div>
          <div class="facebook"></div>
          <div class="pinterest"></div>
        </div>
      </div>
    )
  }
}

export default Footer;
