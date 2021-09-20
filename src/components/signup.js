
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button, Input, Form, Grid, Header, Segment, Message, Image, Label} from 'semantic-ui-react';
import logo from "../images/bookshelf-logo.png"


const SignUp = (props) => {
  	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const  { signup } = useAuth();
    const history = useHistory();

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    // function signup from AuthContext, create new user using firebase auth
    const handleSubmit = (e) => {
        if(!validateEmail(email)){
            setPasswordError('This is not a valid email!');
        }
        if (password !== confirmPassword) {
            setPasswordError(`Passwords don't match!`)
        }
         if(validateEmail(email) && password === confirmPassword){
            signup(email, password)
            setPasswordError('');
            setEmailError('');
            setPassword('');
            setEmail('');
            setConfirmPassword('');
            history.push('/Homepage');
        }
    }

    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    	    <Grid.Column style={{maxWidth: 450 }} >
                <Header as="h1" color='teal' textAlign="center" style={{height: '100px'}}>
                    <Image src={logo}/>
                    Create your account
                </Header>

                <Form size="large" onSubmit={handleSubmit}>
    		        {props.children}
                    <Segment stacked>
                    <Form.Field>
                            {passwordError && <Message className={'ui negative message'}>{passwordError}</Message>}
                            {emailError && <Message className={'ui negative message'}>{emailError}</Message>}
                        <label>Enter your email</label>
                        <Input 
                            className="ui input"
                            icon="at"
                            iconPosition="left"
                            name="email"
                            placeholder="e.g. booklover@ilovebooks.com"
                            type="text" required
                            onChange={e=>setEmail(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Enter your password</label>
                        <Input
                            className="ui input"
                            icon="key"
                            iconPosition="left"
                            name="password"
                            placeholder="●●●●●●●●●●●"
                            type="password" required
                            onChange={e=>setPassword(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm your password</label>
                        <Input
                            className="ui input"
                            icon="key"
                            iconPosition="left"
                            name="confirmPassword"
                            placeholder="●●●●●●●●●●●"
                            type="password" required
                            onChange={e=>setConfirmPassword(e.target.value)}/>
                        </Form.Field>

                    <Button 
                         className="ui primary button" 
                        type="submit"    
                    >
                            Create account</Button>
                     </Segment>
                </Form>
        <Message size="small">Already have an account? <Link to='/signin'>Sign in!</Link></Message>
        </Grid.Column>
      </Grid>    
      </>
    );
}


export default SignUp;