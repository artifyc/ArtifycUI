import React, {useEffect, useState} from 'react';
import './Compose.css';

export default function Compose(props) {
  const [inputValue, setInputValue] = useState([""]);

  useEffect(() => {
    setInputValue(props.currMessage)
  }, [props.currMessage])

  return (
    <div>
      <form className="compose" onSubmit={props.sendMessage}>
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message..."
          value={inputValue}
          onChange={props.onMessageChange}
          disabled={props.enabled}
        />

        {
          props.rightItems
        }
      </form>
    </div>
  );
}