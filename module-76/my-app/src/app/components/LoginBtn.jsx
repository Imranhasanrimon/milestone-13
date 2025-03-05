"use client"
import { signIn } from "next-auth/react"
const LoginBtn = () => {
    return (
        <div>
            <button onClick={() => signIn()} className="border rounded-full px-3 py-1 cursor-pointer m-2">Login</button>
        </div>
    );
};

export default LoginBtn;