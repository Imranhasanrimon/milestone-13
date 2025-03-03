"use client"
import { signIn } from "next-auth/react"
const LoginBtn = () => {
    return (
        <div>
            <button onClick={() => signIn()} className="border rounded-full p-3 cursor-pointer">Login</button>
        </div>
    );
};

export default LoginBtn;