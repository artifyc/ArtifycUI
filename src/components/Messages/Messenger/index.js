import React, {useEffect, useState} from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import Compose from "../Compose";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import useInterval from "@use-it/interval";

const MESSAGES_API_PATH = "https://t0sdxxjt2h.execute-api.us-east-1.amazonaws.com/qa/messages";

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

  useInterval(() => {
    getMessages()
  }, 5000)

  function setConvo(convo) {
    setCurrConvo(convo);
  }

  const getMessages = () => {
    if (currConvo.id === undefined)
      return

    fetch(MESSAGES_API_PATH + "?orderId=" + currConvo.id, {
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
      })
      .catch(err => console.error(err))
  }

  function sendComposeMessage(event) {
    if (currConvo.id === undefined) {
      return
    }
    fetch(MESSAGES_API_PATH, {
      method: "POST",
      body: JSON.stringify({
        userId: "koomasi_blue",
        convId: currConvo.id,
        message: composeMessage
      })
    }).then(() => getMessages());
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
          <MessageList {...props.username} currConvo={currConvo} messages={currMessages}/>
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