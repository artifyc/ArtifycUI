import React from 'react';
import uuid from 'react-uuid';
import '../../style/HomePage.css'

const blocks = [
  {
    h1: "1",
    p: `send your Artifyc
        link to your clients`
  },
  {
    h1: "2",
    p: `complete commissions
        through the platform`
  },
  {
    h1: "3",
    p: `get paid, earn rewards,
        and plant trees!`
  },
];

const BonusList = (props) => (
  <div className="how-it-works-section">
    {props.profiles.map(profile => <Bonus key={uuid()} {...profile}/>)}
  </div>
);

class Bonus extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="how-it-works-blurb">
        <h1 className="how-it-works-number">{profile.h1}</h1>
        <p className="decription-blurb-font">{profile.p}</p>
      </div>
    );
  }
}


class HowItWorks extends React.Component {
  state = {profiles: blocks};

  render() {
    return (
      <div id="how-it-works">
        <h3 id="how-it-works-header">how it works:</h3>
        <BonusList profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default HowItWorks;
