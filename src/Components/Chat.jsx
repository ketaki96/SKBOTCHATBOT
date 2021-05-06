import React from "react";
import ReceiveChat from "./ReceiveChat";
import SendChat from "./SendChat";

const Chat = (props) => {
    return(
        <div>
            <SendChat text={props.question} />
            <ReceiveChat text={props.answer} />
        </div>
    );
}

export default Chat;