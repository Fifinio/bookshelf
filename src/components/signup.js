
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button, Input, Form, Grid, Header, Segment, Message, Image} from 'semantic-ui-react';
import logo from "../images/bookshelf-logo.png"


const SignUp = (props) => {
  	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const  { signup } = useAuth();
    const history = useHistory();



    // function signup from AuthContext, create new user using firebase auth
    const handleSubmit = (e) => {

        console.log(password)
        console.log(confirmPassword)

        if (password !== confirmPassword) {
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
                    Create your account
                </Header>

                <Form size="large" onSubmit={handleSubmit}>
    		        {props.children}
                    <Segment stacked>
                    <Form.Field>
                            {passwordError && <Message className={'ui negative message'}>{passwordError}</Message>}
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