import { useContext, useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const { user, googleSignIn, signInUser } = useContext(AuthContext);
    const forgetEmail = useRef();

    const handleGoogleLogin = () => {
        googleSignIn()
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => console.log(result.user))
            .catch(err => console.log(err))
        // form.reset()
    }

    const handleForget = () => {
        const email = forgetEmail.current.value;

        if (email.length < 5) {
            alert('provide valid email');
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Check inbox");
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto my-56">
            <img className="rounded-full w-32 h-32 mx-auto mb-2" src={user?.photoURL} alt="" />
            <form onSubmit={handleSubmit} className="card-body border rounded-md border-gray-600">
                <h2 className="text-3xl text-center text-green-500 font-semibold">Login</h2>
                {user && <h1 className="text-center text-lg text-lime-200">{user.email}</h1>}
                <fieldset className="fieldset">

                    <label className="fieldset-label">Email</label>
                    <input name="email" ref={forgetEmail} type="email" className="input" placeholder="Email" />

                    <label className="fieldset-label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />

                    <div><button type="button" onClick={handleForget} className="link link-hover">Forgot password?</button></div>

                    <button type="submit" className="btn btn-neutral mt-4">Login</button>
                    <button type="button" onClick={handleGoogleLogin} className="btn btn-success text-white mt-4">Sign In With Google</button>
                </fieldset>
                <p className="text-center">Don't  have an account? <Link className="font-bold underline text-green-500" to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;