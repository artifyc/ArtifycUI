import React from "react";
import "./NotFound.css";

export default function NotFound() {
  const messages = [<h2 className="text-error">404: Looks like you're in the wrong trace at the right time</h2>,
    <h2 className="text-error">404: Page not found, try a different brush</h2>,
    <h2 className="text-error">404: Brush those tears away,<br/>we’ll get you back to the right page!</h2>,
    <h2 className="text-error">404: Oops something went wrong,<br/>we're blending over backwards to fix it</h2>,
    <h2 className="text-error">404: Sorry! We’re drawing a blank</h2>,
    <h2 className="text-error">404: Looks like you found a blank canvas,<br/>let’s get you back home</h2>]

  return (
    <div style={{padding: 10}}>
      <img className="not-found-gif" src={require("../assets/animated_owl.gif")}/>
      {messages[Math.floor(Math.random() * messages.length)]}
    </div>
  );
}



