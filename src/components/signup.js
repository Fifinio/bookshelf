import React, {useState} from 'react';

//Async function sending a POST request to the server
const sendSignUp = async ( email, password, confirmPassword) => {
    //API URL FOR THE REGISTER
    const API_URL = '';

    const item = JSON.stringify({
        email : email,
        password: password
    });
    if(password===confirmPassword){
        const data = await fetch(API_URL, {
            method: 'POST',
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type":"application/json"
            },
            body: item,
        })
        .then(response => response.json())
        .then(data => data)
        .catch(err=>console.error(err))

    }
    else{
        alert("Passwords don't match!");
    }
}



const SignUp = (props) => {
  	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
  	const [confirmPassword, setConfirmPassword] = useState('');

    return (
    	<div className="ui container form">
    		{props.children}
        <h4 id="regHead">Create a new account</h4>
        
        <label>Email</label>
        <input
            className="middle"
			name="email" 
			placeholder="Email" 
			type="text" required
			onChange={e=>setEmail(e.target.value)}/>
                
        <label>Password</label>
        <input 

			name="password" 
			placeholder="Password" 
			type="password" required 
			onChange={e=>setPassword(e.target.value)}/>
                
        <label>Email</label>
        <input 
			name="confirmPassword" 
			placeholder="Repeat Password" 
			type="password" required 
			onChange={e=>setConfirmPassword(e.target.value)}/>
                
        <button className="ui button" onClick={() => sendSignUp(email, password, confirmPassword)}>Sign up</button>
      </div>
    );
}

export default SignUp;