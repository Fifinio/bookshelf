import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

//styles
import 'semantic-ui-css/semantic.min.css'
import './styles/index.css';
import RoutingComponent from './components/RoutingComponent';


const App = () => {

    return (
        <Router>
            <AuthProvider>
                <RoutingComponent />
            </AuthProvider>
        </Router> 
    )

}

export default App;