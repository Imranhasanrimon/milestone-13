import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) return <div className="h-20 flex justify-center items-center"><span className="loading loading-spinner text-error loading-xl"></span></div>

    if (user) {
        return children;
    };

    return (
        <Navigate to="/login" />
    );
};

export default PrivateRoute;