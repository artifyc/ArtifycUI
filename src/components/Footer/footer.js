import React from 'react';
import '../../style/grid.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <grid-header>Company</grid-header>
        <grid-header>About</grid-header>
        <grid-header>Resources</grid-header>
        <div>Press</div>
        <div>Founders</div>
        <div>Artist's Guide</div>
        <div>Legal</div>
        <div>Mission</div>
        <div>Buying on Artifyc</div>
        <div>Partnerships</div>
        <div>State of the Art Report</div>
        <div>Terms and Conditions</div>
      </div>
    )
  }
}

export default Footer;
