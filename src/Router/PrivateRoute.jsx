/* eslint-disable react/prop-types */
import { Player } from "@lottiefiles/react-lottie-player";
import AuthHook from "../Hooks/AuthHook";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = AuthHook()
    const location = useLocation()
    if (loading) {
        return (
            <div className="flex items-center justify-center mt-20"> <Player className=" h-[200px]"
                autoplay
                loop
                src="https://lottie.host/98a52070-d6d5-495e-be3f-5db7273e54ff/rDwtiXbEtj.json"
            >
            </Player></div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;