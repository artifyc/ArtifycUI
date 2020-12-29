import React from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import Compose from "../Compose";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";

export default function Messenger(props) {
    return (
    <div className="message-container">
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList />
        </div>

        <div className="scrollable message-content">
          <MessageList />
        </div>
      <div className="message-grid-filler"/>
        <Compose rightItems={[
          <AttachFileIcon style={{color:"#3f51b5", fontSize: 30}} />,
          <SendIcon style={{color:"#3f51b5", fontSize: 30}} />
        ]}/>
      </div>
    </div>
    );
}