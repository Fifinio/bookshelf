import React, {useState} from 'react';

const sendSignUp = async ( email, password, confirmPassword) => {
    const item = JSON.stringify({
        email : email,
        password: password
    });
    if(password===confirmPassword){
        const data = await fetch('https://recruitment.ultimate.systems/auth/local/register', {
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

        if(data){
            document.getElementById('regHead').value = "Signed up successfully";
        }
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
    	<div className="form">
    		{props.children}
        <h4 id="regHead">Create a new account</h4>
        
        <input 
			name="email" 
			placeholder="Email" 
			type="text" required
			onChange={e=>setEmail(e.target.value)}/>
        <input 
			name="password" 
			placeholder="Password" 
			type="password" required 
			onChange={e=>setPassword(e.target.value)}/>
        <input 
			name="confirmPassword" 
			placeholder="Repeat Password" 
			type="password" required 
			onChange={e=>setConfirmPassword(e.target.value)}/>
        <button onClick={() => sendSignUp(email, password, confirmPassword)}>Create</button>
      </div>
    );
}

export default SignUp