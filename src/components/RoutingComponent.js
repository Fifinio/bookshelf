import { Redirect, Route, Switch } from "react-router";
import PrivateRoute  from './PrivateRoute'
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useAuth } from "../contexts/AuthContext";

const RoutingComponent = () => {

    const { currentUser } = useAuth();
    return ( 
        <Switch>
            <PrivateRoute exact path='/' component={Homepage} />
            {!currentUser ? <Route path='/SignIn' component={SignIn}/> : <Redirect to='/'/>}
            {!currentUser ? <Route path='/SignUp' component={SignUp}/> : <Redirect to='/'/> }   
        </Switch>
     );
}
 
export default RoutingComponent;