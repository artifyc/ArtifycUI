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
          <AttachFileIcon id="messenger-icons"/>,
          <SendIcon id="messenger-icons" />
        ]}/>
      </div>
    </div>
    );
}