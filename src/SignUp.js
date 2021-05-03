import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./SignUp.css"

function SignUp() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");

    const signUp = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className="signup">
            <Link to="/">
                <img className="signup__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="signup__container">
                <h1>Sign-up</h1>

                <form>
                    <h5>Your Name</h5>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} name="" id=""  />

                    <h5>Mobile Number</h5>
                    <input type="tel" value={mobile} onChange={e => setMobile(e.target.value)} name="" id="" placeholder="Mobile" />

                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="" id="" />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="" id="" placeholder="Password" />

                    <button type="submit" onClick={signUp} className="signup__signUpBtn">Sign Up</button>
                </form>

                <p>
                    By signing-up you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <p>Already have an account? <a href="/login">Sign In</a></p>
            </div>
        </div>
    )
}

export default SignUp
