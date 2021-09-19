
import React, {useRef, useState} from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button, Input, Form, Grid, Header, Segment, Message, Image} from 'semantic-ui-react';
import logo from "../images/bookshelf-logo.png"


const SignUp = (props) => {
  	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const  { signup, currentUser } = useAuth();
    const confirmPasswordRef = useRef();
    const history = useHistory();

    if(currentUser) {
        history.push('./homepage')
    }


    // function signup from AuthContext, create new user using firebase auth
    const handleSubmit = (e) => {
        if (password !== confirmPasswordRef.current.value) {
            setPasswordError(`Passwords don't match!`)
        }
        else {
            signup(email, password)
            setPasswordError('')
            history.push('/Homepage')
        }
    }

    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    	    <Grid.Column style={{maxWidth: 450 }} >
                <Header as="h1" color='teal' textAlign="center" style={{height: '100px'}}>
                    <Image src={logo}/>
                    Log-in to your account
                </Header>

                <Form size="large">
    		        {props.children}
                    <Segment stacked>
                    <Form.Field>
                        <Input 
                            className="ui input"
                            name="email"
                            placeholder="Email"
                            type="text" required
                            onChange={e=>setEmail(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <Input
                            className="ui input"
                            name="password"
                            placeholder="Password"
                            type="password" required
                            onChange={e=>setPassword(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <Input
                            className="ui input"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type="password" required
                            ref={confirmPasswordRef}/>
                        </Form.Field>

                    <Button 
                         className="ui primary button" 
                            onClick={handleSubmit}>
                            Create account</Button>
                     </Segment>
                </Form>
        <Message size="small">Already have an account? <Link to='/signin'>Sign in!</Link></Message>
        </Grid.Column>
      </Grid>
      {passwordError && <span>{passwordError}</span>}

      
      </>
    );
}


export default SignUp;