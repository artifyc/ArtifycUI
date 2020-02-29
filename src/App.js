import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Footer from './components/footer';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import Dropdown from './components/dropdown'
import './style/App.css'


class App extends React.Component {

    constructor(props)  {
        super(props);
        this.state = {
            typing: true,
            first: '',
            last: '',
            email: '',
            value: 'Becoming a founding artist',
            message: '',
            show: false,
            font: '',
            thanks: false
          };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    
  handleChange = (font) => () => {
      this.setState({ value: font, show: false });
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit');

    const data = {
        email: this.state.email,
        firstName: this.state.first,
        lastName: this.state.last,
        interest: this.state.value,
        message: this.state.message
    };

    fetch('https://nqga4cwr46.execute-api.us-east-1.amazonaws.com/prod', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"

      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      this.setState({first: '', last: '', email: '', value: 'Becoming a founding artist', show: false, message: '', thanks: true});
  }

  handleToggle = (e) => {
      e.target.focus();
      this.setState({ show: !this.state.show });
  }

  handleBlur = (e) => {
      // firefox onBlur issue workaround
      if (e.nativeEvent.explicitOriginalTarget &&
          e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
      return;
      }

      if (this.state.show) {
      setTimeout(() => {
          this.setState({ show: false });
      }, 200);
      }
  }

  render() {
    return (
      <div>
        <div className="top-section">
            <div className="centerfold">
                <img className="logo" src={ require("./assets/logo.jpg") }/>
                <h1 className="header-main">enabling more &thinsp;
                    {this.state.typing ? <Typist onTypingDone={this.done} cursor={{ hideWhenDone: false, blink: true }}>
                        <span className="word-change-red"> 
                        fairly-paid
                            <Typist.Delay ms={1550} />
                            <Typist.Backspace count={11} delay={1000} />
                        organized
                            <Typist.Delay ms={1550} />
                            <Typist.Backspace count={9} delay={1000} />
                        carbon negative
                            <Typist.Delay ms={1550} />
                            <Typist.Backspace count={15} delay={1000} />
                        </span>
                    </Typist> : ''}
                    &thinsp;
                    artists
                </h1>
            </div>
            <div className="bottom-grid">
                <p className="artist-credit">birch by sabimaki</p>
                <img className="main-photo" src={ require("./assets/owls.jpg") }/>
            
                <a id='red-main-button' href="#form-section" >SIGN UP FOR THE BETA</a>
            </div>
        </div>
        <div className="description-section">
            <div className="description-blurb">
                <h1 className="description-blurb-font">noble patronage</h1>
                <p>artists keep 100% of the profits from <br />every commission*, feel confident in <br />supporting artists directly</p>
                <img className="description-photo" src={ require("./assets/money.jpg") }/>
                <p id="description-small-text">*(minus taxes, sadly not much we can do about those)</p>
            </div>
            <div className="description-blurb">
                <h1 className="description-blurb-font"> artis-tree</h1>
                <p>plant a tree with every commission - on us!<br /> we’re partnered with Eden Reforestation <br />to make amends for all the trees <br />we’ve used as art supplies over the years</p>
                <img className="description-photo" src={ require("./assets/trees.jpg") }/>
            </div>
            <div className="description-blurb">
                <h1 className="description-blurb-font">state of the art</h1>
                <p>our all-in-one platform handles <br /> payments, customer notifications, <br /> and scheduling for your commissions.<br />leave it all to us, you just focus on the art</p>
                <img className="description-photo" src={ require("./assets/circuit.jpg") }/>
            </div>
        </div>
        <div className="cat-section">
            <img id="cat-photo" src={ require("./assets/catboy.jpg") }/>
            <p className="artist-credit">fantasy by cdd20</p>
        </div>
        <div><h3 id="how-it-works-header">how it works:</h3></div>
        <div className="how-it-works-section">
            <div className="how-it-works-section"> 
                <div className="how-it-works-blurb">
                    <img className="how-it-works-photo" src={ require("./assets/1.jpg") }/>
                    <p className="decription-blurb-font">send your Artifyc <br/> link to your clients</p>
                </div>
                <div className="how-it-works-blurb">
                    <img className="how-it-works-photo" src={ require("./assets/2.jpg") }/>
                    <p className="decription-blurb-font">complete commissions<br/ >through the platform</p>
                </div>
                <div className="how-it-works-blurb">
                    <img className="how-it-works-photo" src={ require("./assets/3.jpg") }/>
                    <p className="decription-blurb-font">get paid, earn rewards,<br/ > and plant trees!</p>
                </div>
            </div>
        </div>
        <div id="form-section">
            <div><h3 id="how-it-works-header">sign up for the beta:</h3></div>
            <form id="form-top" onSubmit={this.handleSubmit}>
                <div className="name-section">
                    <label className="label-padding">
                        First Name:<span className="word-change-red">*</span>
                        <input className="input-margin" onChange={this.handleInputChange} value={this.state.first} type="text" name="first" />
                    </label>
                </div>
                <div className="name-section">
                    <label className="label-padding">
                                Last Name:<span className="word-change-red">*</span>
                                <input className="input-margin" onChange={this.handleInputChange} value={this.state.last} type="text" name="last" />
                    </label>
                </div>
                <div className="name-section">
                    <label className="label-padding">
                            Email:<span className="word-change-red">*</span> <span id="word-change-grey">Test.</span>
                            <input className="input-margin" onChange={this.handleInputChange} value={this.state.email} type="text" name="email" />
                    </label>
                </div>
                <div className="name-section">
                    <label className="label-padding">
                        I'm interested in:<span className="word-change-red">*</span>
                        <Dropdown
                        show={this.state.show}
                        value={this.state.value}
                        handleToggle={this.handleToggle}
                        handleBlur={this.handleBlur}
                        handleChange={this.handleChange}
                        />
                    </label>
                </div>
                <div className="name-section">
                    <label className="label-padding">
                            Message: <span id="word-change-grey">Te.</span>
                            <textarea className="textarea-message-margin" type="text" onChange={this.handleInputChange} value={this.state.message} name="message" />
                    </label>
                </div>
                <div>
                { this.state.thanks
                    ? <div className="label-padding thanks">Thanks for signing up!</div>
                    : null
                }
                </div>  
                <div className="name-section">
                <input id="submit-button" type="submit" value="SIGN UP" />
                </div>
            </form>
        </div>
    </div>
    )
  }
}


export default App;
