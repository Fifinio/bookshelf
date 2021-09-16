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
            setPasswordError(`Password don't match!`)
        }
        else {
            signup(email, password)
            setPasswordError('')
        }
    }

    return (
        <>
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
            ref={confirmPasswordRef}/>
        <button onClick={handleSubmit}>Create</button>
      </div>
      {passwordError && <span>{passwordError}</span>}
      </>
    );
}

export default SignUp