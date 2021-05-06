import React,{useState} from "react";

const PopUp = (props) => {
    
    const [contact, setContact] = useState({
        fullName: "",
        email: ""
      });
    
    function handleChange(event) {
        const { name, value } = event.target;
    
        setContact((prevValue) => {
          return { ...prevValue, [name]: value };
        });
    }

    return(
        <div id="popup1" className="overlay">
	        <div className="popup">
		        <h2>Information</h2>
		        <button className="close" onClick={() => props.popUpCrossButtonClick()}><i class="fas fa-times"></i></button>
		        <div className="content">
			        <input onChange={handleChange} type="text" className="infotext" name="fullName" placeholder="Enter Name" value={contact.fullName} required />
                    <input onChange={handleChange} type="email" className="infotext" name="email"  placeholder="Enter Email" value={contact.email} required />
      		        <button className="infosubmit" name="enter" 
                        onClick={() => {
                          props.popUpButtonClick(contact)
			                  }} 
                  >Submit</button>
                  <p>{props.errorMessage}</p>
		        </div>
	        </div>
        </div>
    )
}

export default PopUp;