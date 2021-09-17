import React from 'react';
import SignUp from './components/SignUp'
import { AuthProvider } from './contexts/AuthContext';
import SignIn from './components/SignIn';


  import './styles/index.css';
const App = () => {
    return (
    <AuthProvider>
         <SignUp />
         <br/>
         <hr/>
         <SignIn/>
    </AuthProvider>
    )
}

export default App;