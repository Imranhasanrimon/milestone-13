import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="bg-gray-900 py-2">
            <ul className="flex justify-between items-center px-14">
                <Link href="/"><li>Home</li></Link>
                <Link href="/services"><li>Services</li></Link>
                <Link href="/about"><li>About</li></Link>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;