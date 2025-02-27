"use client";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
    const router = useRouter()
    const isLogin = false
    const handleClick = () => {
        if (isLogin) {
            router.push("/services/webdevelopment")
        } else {
            router.push("/")
        }
    }
    return (
        <div>
            <p className='text-2xl font-semibold mb-5'>ServicesPage</p>
            <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-900 cursor-pointer" onClick={handleClick}>WebDevelopment</button>
        </div>
    );
}
