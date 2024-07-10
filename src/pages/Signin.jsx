import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((value) => alert('Signed In Successfully'))
        .catch((err) => console.log(err));
    };


    
    return (
        <div className='signin-page'>
            <h1>Signin Page</h1>
            <label>Enter your email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required placeholder='Enter your email here'/>
            <label>Enter your password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder='Enter your password here'/>
            <button onClick={signinUser} >Sign In</button>
        </div>
    );
}

export default SigninPage;