import React, {useRef, useState} from 'react';
import { useAuth } from '../contexts/AuthContext';


const SignUp = (props) => {
  	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const  { signup } = useAuth();
    const confirmPasswordRef = useRef();


    // function signup from AuthContext, create new user using firebase auth
    const handleSubmit = (e) => {
        if (password !== confirmPasswordRef.current.value) {
            setPasswordError(`Passwords don't match!`)
        }
        else {
            signup(email, password)
            setPasswordError('')
        }
    }

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
            ref={confirmPasswordRef}/>
        <button onClick={handleSubmit}>Create</button>
      </div>
      {passwordError && <span>{passwordError}</span>}
      </>
    );
}

export default SignUp;