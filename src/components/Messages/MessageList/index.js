import React, {useEffect, useState} from 'react';
import Message from '../Message';
import moment from 'moment';
import './MessageList.css';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  },[])

  
  const getMessages = () => {
     var tempMessages = [
        {
          id: 1,
          author: 'apple',
          message: 'Suh mate!',
          timestamp: new Date().getTime()
        },
        {
          id: 2,
          author: 'apple',
          message: 'I\'m in dire need for some furry art',
          timestamp: new Date().getTime()
        },
        {
          id: 3,
          author: 'orange',
          message: 'Sure, I make the best furry art',
          timestamp: new Date().getTime()
        },
        {
          id: 4,
          author: 'orange',
          message: 'What are you thinking?',
          timestamp: new Date().getTime()
        },
        {
          id: 5,
          author: 'apple',
          message: 'I have always wanted to top a furry, no homo',
          timestamp: new Date().getTime()
        },
        {
          id: 6,
          author: 'apple',
          message: 'You think you can help me with that?',
          timestamp: new Date().getTime()
        },
        {
          id: 7,
          author: 'orange',
          message: 'I don\'t usually judge but that\'s gross, bro',
          timestamp: new Date().getTime()
        },
        {
          id: 8,
          author: 'orange',
          message: 'You need jesus, bro',
          timestamp: new Date().getTime()
        },
        {
          id: 9,
          author: 'apple',
          message: '...',
          timestamp: new Date().getTime()
        },
        {
          id: 10,
          author: 'orange',
          message: 'I blocked you, go get help',
          timestamp: new Date().getTime()
        },
        {
          id: 11,
          author: 'apple',
          message: 'Dude',
          timestamp: new Date().getTime()
        },
        {
          id: 12,
          author: 'apple',
          message: 'Quit fucking around',
          timestamp: new Date().getTime()
        },
        {
          id: 13,
          author: 'apple',
          message: 'There is no blocking feature here',
          timestamp: new Date().getTime()
        },
        {
          id: 14,
          author: 'apple',
          message: 'And no read receipts either',
          timestamp: new Date().getTime()
        },
        {
          id: 15,
          author: 'apple',
          message: 'If you ever read this, I want you to know that you\'re a cunt and your art sucked to begin with',
          timestamp: new Date().getTime()
        },
        {
          id: 16,
          author: 'apple',
          message: '🖕',
          timestamp: new Date().getTime()
        },
      ]
      setMessages([...messages, ...tempMessages])
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

    return(
      <div className="message-list">
        <div className="message-list-container">{renderMessages()}</div>
      </div>
    );
}