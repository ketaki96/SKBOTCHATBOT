import React from "react";
import Linkify from 'react-linkify';

function receiveChat(props) {
  return (
    <div className="incoming">
      <div className="bubble">
        <Linkify><p>{props.text}</p></Linkify>
      </div>
    </div>
  );
}

export default receiveChat;
