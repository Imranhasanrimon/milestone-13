import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet />

        </div>
    );
};

export default Root;