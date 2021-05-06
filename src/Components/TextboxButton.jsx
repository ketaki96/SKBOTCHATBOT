import React, {useState} from "react";

const  TextboxButton = (props) => {

	const [inputText, setInputText] = useState("");

	const handleChange = (event) => {
		const value = event.target.value;
		setInputText(value);
	}

	const handleKeypress = e => { 
		if (e.key === "Enter") {
			props.buttonClick(inputText);   
			setInputText(""); 
		}  
	};

	return (
		<div className="foot">
			<input 
				onChange={handleChange}
				onKeyPress={handleKeypress}
				disabled={props.visibleTextbox} 
				type="text" 
				className="msg" 
				placeholder="Type a message..." 
				value={inputText} 
			/>
			<button
				name="Hello"
				disabled={props.visibleTextbox} 
				onClick={() => {
					props.buttonClick(inputText)
					setInputText("");
				}}
			>
				<i className="fas fa-paper-plane"></i>
			</button>
		</div>
	);
}

export default TextboxButton;


/**
https://testskchatbot.herokuapp.com/greet
https://testskchatbot.herokuapp.com/cdet?option=no
https://testskchatbot.herokuapp.com/cdet?option=yes&name=ketaki&mail=k@email.com

https://testskchatbot.herokuapp.com/cbot?ques=MCA
 */

// const handleClick = async (event) => {
	// 	event.preventDefault();

	// 	//const str = 'What is the attire for the college?';

	// 	const config1 = {
	// 		method: 'GET',
	// 		url: `https://testskchatbot.herokuapp.com/cdet?option=no`,
	// 		headers: { "Access-Control-Allow-Origin": "*"}
	// 	}

	// 	const data1 = await axios(config1);
	// 	console.log(data1);

	// 	const config = {
	// 		method: 'GET',
	// 		url: `https://testskchatbot.herokuapp.com/cbot?ques=${inputText}`,
	// 		headers: { "Access-Control-Allow-Origin": "*"}
	// 	}

	// 	console.log(inputText);

	// 	const data = await axios(config);

	// 	console.log(data);

	//  };
