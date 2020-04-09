import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import React, { Component } from 'react';


class TopSection extends React.Component {

    constructor(props)  {
        super(props);
        this.state = {
            typing: true
        }
    }

    done = () => {
        this.setState({ typing: false }, () => {
          this.setState({ typing: true })
        });
    }

    render() {
        return(
            <div className="top-section">
            <div className="centerfold">
                <img className="logo" src={ require("../../assets/logo.jpg") }/>
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
                <img className="main-photo" src={ require("../../assets/owls.jpg") }/>
    
                <a id='red-main-button' href="#form-section" >SIGN UP FOR THE BETA</a>
            </div>
        </div>
        )
    }
}

export default TopSection;