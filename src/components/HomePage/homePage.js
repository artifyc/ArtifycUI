import TopSection from './TopSection';
import AboutSite from './AboutSite';
import HowItWorks from './HowItWorks';
import Form from './Form';
import React from 'react';


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div><TopSection /></div>
                <div><AboutSite /></div>
                <div><HowItWorks /></div>
                <div><Form /></div>
            </div>
        )
    }
}

export default HomePage;