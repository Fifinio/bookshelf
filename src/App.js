import React from 'react';
import SignUp from './components/signup'
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
    return (
    <AuthProvider>
         <SignUp />
    </AuthProvider>
    )
}

export default App;