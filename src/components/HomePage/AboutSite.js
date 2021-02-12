import React from 'react';
import uuid from 'react-uuid';
import '../../style/HomePage.css'

const blocks = [
  {
    h1: "noble patronage",
    p: `artists keep 100% of the profits from
        every commission, feel confident in 
        supporting artists directly`,
    img: require("../../assets/trees.jpg")
  },
  {
    h1: "artis-tree",
    p: `plant a tree with every commission - on us! 
        we’re partnered with Eden Reforestation 
        to make amends for all the trees 
        we’ve used as art supplies over the years`,
    img: require("../../assets/money.jpg")
  },
  {
    h1: "state of the art",
    p: `our all-in-one platform handles 
        payments, customer notifications, 
        and scheduling for your commissions.
        leave it all to us, you just focus on the art`,
    img: require("../../assets/circuit.jpg")
  },
];

const BenefitList = (props) => (
  <div className="description-section">
    {props.profiles.map(profile => <Benefit key={uuid()} {...profile}/>)};
  </div>
);

class Benefit extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="description-blurb">
        <h1 className="description-blurb-font">{profile.h1}</h1>
        <p className="render-break">{profile.p}</p>
        <img alt="description" className="description-photo" src={profile.img}/>
      </div>
    );
  }
}

class AboutSite extends React.Component {
  state = {profiles: blocks};

  render() {
    return (
      <div>
        <BenefitList profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default AboutSite;