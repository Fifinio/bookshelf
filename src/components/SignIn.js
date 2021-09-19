import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button, Input, Form, Grid, Header, Segment, Message, Image} from 'semantic-ui-react';
import logo from "../images/bookshelf-logo.png"

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { signin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault()
        signin(email, password)
    }

    return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    	     <Grid.Column style={{maxWidth: 450 }} >
                <Header as="h1" color='teal' textAlign="center" style={{height: '100px'}}>
                    <Image src={logo}/>
                    Log-in to your account
                </Header>

                <Form size="large">
                    <Segment stacked>
                    <Form.Field>
                        <Input 
                            className="ui input"
                            name="email"
                            placeholder="Email"
                            type="text" required
                            onChange={e => setEmail(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <Input
                            className="ui input"
                            name="password"
                            placeholder="Password"
                            type="password" required
                            onChange={e => setPassword(e.target.value)}/>
                    </Form.Field>
                    <Button 
                            type="submit"
                            className="ui primary button"
                            onClick={handleSubmit}>
                            Sign In</Button>
                     </Segment>
                </Form>
        <Message size="small">Don't have account? <Link to='/signup'>Create one!</Link></Message>
        </Grid.Column>
      </Grid>
        
    );
}

export default SignIn;