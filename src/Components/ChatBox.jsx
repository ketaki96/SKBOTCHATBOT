import React, {useState, useRef, useEffect} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import TextboxButton from "./TextboxButton";
import Chat from "./Chat";
import RecevieChat from "./ReceiveChat";
import PopUp from "./PopUp";

const  ChatBOX = (props) => {
	const [items, setItems] = useState([]);

    const [cookiesName, setCookiesName] = useCookies(["name"]);

	const [cookiesEmail, setCookiesEmail] = useCookies(["email"]);

	const [enableTextBox, setEnableTextBox] = useState(true);

	const [reply, setReply] = useState("");

	const [isShowReply, setIsShowReply] = useState(false);

	const [isCloseBox, setIsCloseBox] = useState(true);

    const[isYes, setIsYes] = useState(false);

	const[submitInfo, setSubmitInfo] = useState(true);

	const [error, setError] = useState("");

	async function handleClick(inputText) {
		
		// console.log("inputttttttttttttttttt", cookiesName.name);
		// console.log("inputttttttttttttttttt", cookiesEmail.email);

		const config1 = {
			method: 'GET',
			url: `https://testskchatbot.herokuapp.com/cbot?ques=${inputText}&name=${cookiesName.name}&mail=${cookiesEmail.email}`
		}

		await axios(config1).then((data1) => {
			//console.log(data1);
			setItems((previousItem) => [...previousItem, ({question: inputText, answer: data1.data})]);
		});

		const div = document.getElementById("bodyId");
		div.scrollTop = div.scrollHeight - div.clientHeight;
		
	}

    const optionNoClick = () => {

		setCookiesName("name", "Unknown Name", {
			path: "/"
		});
		setCookiesEmail("email", "Unknown Email", {
			path: "/"
		});

		setIsYes(false);
		setSubmitInfo(false)
		setEnableTextBox(false);
		setReply("OK. How can I help you?");
		setIsShowReply(true);
    }

    const optionYesClick = async () => {
        setIsYes(true);
        setSubmitInfo(false);
    }

    const handlePopUpButtonClick = (contact) => {

		if(contact.fullName === "" && contact.email === ""){
			setError("Please Enter Something!!");
		} else if(contact.fullName === "") {
			setError("Please Enter Name!!");
		}  else if(contact.email === "") {
			setError("Please Enter Email!!");
		} else {
			setCookiesName("name", contact.fullName, {
				path: "/"
			});
			
			setCookiesEmail("email", contact.email, {
				path: "/"
			});
			
			setError("");
			setIsYes(false);
			setEnableTextBox(false);
			setReply("Thank You for sharing your information. How Can I help you!!");
			setIsShowReply(true);	
		}

		//console.log("popupppppppppppppppppp", cookiesName.name);
		//console.log("popupppppppppppppppppp", cookiesEmail.email);	
		
    }
	
	function scrollToBottom () {

	}

  	return (
    	<div className="container">
    		<div className="chat_box">
      			<div className="head">
        			<div className="user">
          				<div className="name">ChatBot
                            <button type="button" className="close" onClick={() => {
                                props.closeChatBox(setIsCloseBox(false))
                                }}>
                                X
                            </button>
                        </div>
        			</div>
      			</div>
				  
      			<div className="body" id="bodyId">
        			<img id="img" alt="Avater" src="bot1.png" />
        			<div id="chat-title">SK</div>
        			<div id="space"></div>
					<div>
                        <RecevieChat text = {props.greetData} />
                        <RecevieChat text = {isShowReply ? reply : "Would you like to share your name and email?"} />
                        
                        <a href="#popup1">{submitInfo && <button className="yesno" onClick={optionYesClick}>Yes</button>}</a>
					    {submitInfo && <button type="button" className="yesno" onClick={optionNoClick}>No</button>}
                        
                        {isYes && <PopUp errorMessage={error} popUpButtonClick={handlePopUpButtonClick} popUpCrossButtonClick = {optionNoClick} />}

        				{items.map((chats, index) => (
            				<Chat
              					key={index}
              					question={chats.question}
								answer={chats.answer}
            				/>
          				))}
					</div>
      			</div>
      			<TextboxButton buttonClick = {handleClick} visibleTextbox = {enableTextBox} />
    		</div>
  		</div>
	);
}

export default ChatBOX;

//https://testskchatbot.herokuapp.com/greet
//https://testskchatbot.herokuapp.com/cdet?option=no
//https://testskchatbot.herokuapp.com/cdet?option=yes&name=ketaki&mail=k@email.com
//https://testskchatbot.herokuapp.com/cbot?ques=What is the attire for the college?
//const str = 'What is the attire for the college?';