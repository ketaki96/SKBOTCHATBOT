import React, {useState} from "react";
import axios from "axios";

import ChatBOX from "./ChatBox";

const App = () => {
	const[isClicked, setIsClicked] = useState(false);

	const[greet , setGreet] = useState("");

	const callChatBox = async () => {
		setIsClicked(true);
		
		const config = {
			method: 'GET',
			url: `https://testskchatbot.herokuapp.com/greet`
		}

		const data = await axios(config);

		setGreet(data.data);

		console.log(data.data);
	}

	const closeForm = (state) => {
		setIsClicked(state);
	}


	return(
		<>
			<button className="callbot" onClick={callChatBox}>
				<img id="img1"src="botlogo6.png"/>
			</button>
			{isClicked && <ChatBOX greetData = {greet} closeChatBox = {closeForm} />}
		</>
	);
}

export default App;
