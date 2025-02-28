"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();
    if (pathname.includes('dashboard')) {
        return <></>
    }
    return (
        <nav className="bg-gray-900 py-2">
            <ul className="flex justify-between items-center px-14">
                <Link href="/"><li>Home</li></Link>
                <Link href="/services"><li>Services</li></Link>
                <Link href="/products"><li>Products</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
                <Link href="/posts"><li>Posts</li></Link>
            </ul>
        </nav>
    );
};

export default NavBar; 