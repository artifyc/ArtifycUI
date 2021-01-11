import React, {useState} from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import Compose from "../Compose";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";

export default function Messenger(props) {
  const [currConvo, setCurrConvo] = useState([])

  function setConvo(id) {
    setCurrConvo(id);
  }

  return (
  <div className="message-container">
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList {...props.username} changeConvo={setConvo}/>
      </div>

      <div className="scrollable message-content">
        <MessageList {...props.username} currConvo={currConvo}/>
      </div>
    <div className="message-grid-filler"/>
      <Compose rightItems={[
        <AttachFileIcon id="messenger-icons"/>,
        <SendIcon id="messenger-icons" />
      ]}/>
    </div>
  </div>
  );
}