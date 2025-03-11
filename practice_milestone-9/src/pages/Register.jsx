import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => console.log('user updated'))

            })
            .catch(err => console.log(err))
        // form.reset()
    }


    console.log(user);
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto my-56">
            <img className="rounded-full w-32 h-32 mx-auto mb-2" src={user?.photoURL} alt="" />
            <form onSubmit={handleSubmit} className="card-body border rounded-md border-gray-600">
                <h2 className="text-3xl text-center text-green-500 font-semibold">Register</h2>
                {user && <h1 className="text-center text-lg text-lime-200">{user.email}</h1>}
                <fieldset className="fieldset">

                    <label className="fieldset-label">Name</label>
                    <input name="name" type="text" className="input  w-full" placeholder="User Name" />

                    <label className="fieldset-label">Photo URL</label>
                    <input name="photo" type="text" className="input  w-full" placeholder="Photo URL" />

                    <label className="fieldset-label">Email</label>
                    <input name="email" type="email" className="input  w-full" placeholder="Email" />

                    <label className="fieldset-label">Password</label>
                    <input name="password" type="password" className="input  w-full" placeholder="Password" />

                    <button type="submit" className="btn btn-neutral mt-4">Register</button>
                    <button type="button" onClick={handleGoogleLogin} className="btn btn-success text-white mt-4">Sign In With Google</button>
                </fieldset>
                <p className="text-center">Already have an account? <Link className="font-bold underline text-green-500" to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;