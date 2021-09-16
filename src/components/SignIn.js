import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
// import { AuthProvider } from "../contexts/AuthContext";

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { signin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault()
        signin(email, password)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type={"email"}
                name={"email"}
                placeholder={"Email"}
                onChange={e => setEmail(e.target.value)}
                required />
            <input type={"password"}
                name={"password"}
                placeholder={"Password"}
                onChange={e => setPassword(e.target.value)}
                required />
                <button type={'submit'}>Sign in</button>
        </form>

        {/* <AuthProvider.Consumer>
            {user => console.log(user)}
        </AuthProvider.Consumer> */}
        </>
    );
}

export default SignIn;