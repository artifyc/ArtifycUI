import React, {useEffect, useState} from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import Compose from "../Compose";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";

const MY_USER_ID = 'apple';

export default function Messenger(props) {
  const [currConvo, setCurrConvo] = useState([{
    id: undefined,
    name: undefined,
  }]);
  const [composeMessage, setComposeMessage] = useState([]);
  const [currMessages, setCurrMessages] = useState([]);

  useEffect(() => {
    getMessages();
    return () => { // cleanup before next render
      setCurrMessages([]);
    }
  }, [currConvo.id])

  function setConvo(convo) {
    setCurrConvo(convo);
  }

  const getMessages = () => {
    if (currConvo.id === undefined)
      return

    fetch("https://t0sdxxjt2h.execute-api.us-east-1.amazonaws.com/qa/messages?orderId=" + currConvo.id, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => res.json())
      .then(res => {
        const tempMessages = res.map((item, i) => {
          return {
            id: i++,
            author: item["user_id"],
            message: item["msg_payload"],
            timestamp: item["time_stamp"]
          }
        })
        setCurrMessages(tempMessages);
      }).catch(err => console.error(err))
  }

  function sendComposeMessage(event) {
    if (currConvo.id === undefined) {
      return
    }
    event.preventDefault();
    setComposeMessage("");
  }

  function updateComposeMessage(changeEvent) {
    setComposeMessage(changeEvent.target.value);
  }

  return (
    <div className="message-container">
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList {...props.username} changeConvo={setConvo}/>
        </div>

        <div className="scrollable message-content">
          <MessageList {...props.username} currConvo={currConvo} messages={currMessages} myUserId={MY_USER_ID}/>
        </div>
        <div className="message-grid-filler"/>
        <Compose currMessage={composeMessage}
                 enabled={currConvo.id === undefined}
                 onMessageChange={updateComposeMessage}
                 sendMessage={sendComposeMessage}
                 rightItems={[
                   <AttachFileIcon id="messenger-icons"/>,
                   <SendIcon id="messenger-icons" onClick={sendComposeMessage}/>
                 ]}/>
      </div>
    </div>
  );
}