import { useAuth } from "../contexts/AuthContext";

const Homepage = () => {

    const { logout, currentUser } = useAuth();

    console.log(currentUser)
    return ( 
        
        <>
        <h3>
            Homepage
        </h3>

                {currentUser && currentUser.email}
                <button onClick={logout}>Log out</button>
        </>
     );
}
 
export default Homepage;