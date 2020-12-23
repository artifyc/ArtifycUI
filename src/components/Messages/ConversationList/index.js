import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
      // getting convos from server goes here
        let newConversations = [
          {
            photo: "https://avatars0.githubusercontent.com/u/19934651?s=460&u=63e4e3b3f4e3e5b8a0ce31eea96b2d0a9e4d5d46&v=4",
            name: "Janky Leeroy",
            text: "I hate React"
          },
        {
            photo: "https://giantbomb1.cbsistatic.com/uploads/scale_small/0/1976/224310-cv_sotn_succubus.jpg", // don't visit this site
            name: "Kal Shooshi",
            text: "Suh breh!"
        }
        ];
        setConversations([...conversations, ...newConversations])
    };

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
}