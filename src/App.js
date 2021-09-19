import React from 'react';
import SignUp from './components/SignUp'
import { AuthProvider } from './contexts/AuthContext';
import SignIn from './components/SignIn';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

//styles
import 'semantic-ui-css/semantic.min.css'
import './styles/index.css';


const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute exact path='/' component={Homepage} />
                    <PrivateRoute path='/homepage' component={Homepage}/>
                    <Route path='/signin' component={SignIn}/>
                    <Route path='/signup' component={SignUp}/>
                    
                </Switch>
            </AuthProvider>
        </Router> 
    )

}

export default App;