import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link } from 'react-router-dom';
const Register = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(error => console.log(error))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(err => console.log(err))
        // form.reset()
    }
    console.log(user);
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-56">
            <form onSubmit={handleSubmit} className="card-body border rounded-md border-gray-600">
                <h2 className="text-3xl text-center text-green-500 font-semibold">Register</h2>
                {user && <h1 className="text-center text-lg text-lime-200">{user.email}</h1>}
                <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />
                    <label className="fieldset-label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type="submit" className="btn btn-neutral mt-4">Register</button>
                    <button type="button" onClick={handleGoogleLogin} className="btn btn-success text-white mt-4">Sign In With Google</button>
                </fieldset>
                <p className="text-center">Already have an account? <Link className="font-bold underline text-green-500" to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;