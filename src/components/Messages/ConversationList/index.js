import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import SearchIcon from '@material-ui/icons/Search';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = async () => {
   const pics = await getProfPic()
   const convos = await getConvos(); // TODO: pass currUser from props here

   let newConversations = convos.map(convo => {
     return {
       id: convo["order_id"],
       photo: pics[(Math.random() * (8)) << 0]["small"],
       name: convo["customer_id"],
       text: convo["status"]
     }
   })
   setConversations([...conversations, ...newConversations])
 };

  return (
    <div className="conversation-list">
      <Toolbar
        title="Conversations"
        leftItems={[

        ]}
        rightItems={[
          <SearchIcon id="messenger-icons"/>
        ]}
      />
      <ConversationSearch />
      {
        conversations.map(conversation =>
          <ConversationListItem
            key={conversation.id}
            data={conversation}
            changeConvo={props.changeConvo}
          />
        )
      }
    </div>
  );
}

async function getProfPic() {
  const r = ((Math.random() * (7)) << 0) + 1
  const res = await fetch("https://api.jikan.moe/v3/character/" + r + "/pictures", {
    method: "GET"
  }).then(res => res.json())

  return res["pictures"];
}

async function getConvos() {
  return await fetch("https://zwn5735jke.execute-api.us-east-1.amazonaws.com/qa/orders?userId=koomasi_blue", {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
    },
  }).then(res => res.json())
}
