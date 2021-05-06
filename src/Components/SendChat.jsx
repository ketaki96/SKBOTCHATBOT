import React from "react";

function sendChat(props) {
  return (
    <div className="outgoing">
      <div className="bubble">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default sendChat;
