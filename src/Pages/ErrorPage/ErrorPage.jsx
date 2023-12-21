import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div>
                <Player className=" h-[600px]"
                    autoplay
                    loop
                    src="https://lottie.host/e56250aa-a0d7-4dc9-ab37-7bc6d4c3f032/iF7SghvpKH.json"
                >
                </Player>
            </div>
            <div className="flex items-center justify-center">
                <Link to="/" className="btn bg-green-700 text-white text-xl">Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;