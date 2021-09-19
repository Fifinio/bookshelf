import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from 'react-router';

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { signin } = useAuth();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        signin(email, password)
        history.push('/Homepage')
    }

    return (
    
        <>
        <div className="ui container form">
            <form onSubmit={handleSubmit}>
                <input 
                    type={"email"}
                    name={"email"}
                    className="formTextInput"
                    placeholder={"Email"}
                    onChange={e => setEmail(e.target.value)}
                    required />
                <input 
                    type={"password"}
                    name={"password"}
                    className="formTextInput"
                    placeholder={"Password"}
                    onChange={e => setPassword(e.target.value)}
                    required />
                <button 
                type={'submit'}
                className={'button'}>Sign in</button>
            </form>

            <span>Need an accout? <Link to='/signup'>Sign up!</Link></span>

        </div>
        </>
    );
}

export default SignIn;