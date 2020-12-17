import React from 'react';
import '../../style/footer.css';
import '../../style/grid.css';

class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
            <div className="grid-container">
                <grid-header>Company</grid-header>
                <grid-header>About</grid-header>
                <grid-header>Resources</grid-header>
                <grid-header></grid-header>
                <div>Press</div>
                <div>Founders</div>
                <div>Artist's Guide</div>
                <div></div>
                <div>Legal</div>
                <div>Mission</div>
                <div>Buying on Artifyc</div>
                <div className="social-tags">
                    <div className="instagram"></div>
                    <div className="pinterest"></div>
                    <div className="facebook"></div>
                    <div className="twitter"></div>

                </div>
                <div>Partnerships</div>
                <div>State of the Art Report</div>
                <div>Terms and Conditions</div>
                <div></div>
          </div>
      </div>
    )
  }
}

export default Footer;