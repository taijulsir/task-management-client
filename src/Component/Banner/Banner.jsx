import { Link } from "react-router-dom";
import AuthHook from "../../Hooks/AuthHook";

const Banner = () => {
    const {user} = AuthHook()
    return (
        <div >
            <div className="py-20 h-[400px] md:h-[700px] dark:bg-gray-700" style={{backgroundImage: 'url(https://i.ibb.co/W6Pknr5/top-view-desk-with-notepad-clock.jpg)', backgroundSize:'cover',backgroundRepeat: 'no-repeat'}}>
                <div className="max-w-7xl px-4 mx-auto md:px-0 font-poppins">
                    <div className="flex flex-wrap items-center px-4">
                        <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
                            <span
                                className="inline-block mb-4 text-sm font-semibold leading-none text-red-600 capitalize dark:text-red-200">
                                let`s manage your task effeciently
                            </span>
                            <h2
                                className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-300 md:text-5xl lg:text-5xl">
                                Elevate Your Efficiency with Unique TaskHub
                            </h2>
                            <p className="mb-6 font-medium tracking-wide text-gray-600 dark:text-gray-400 md:text-lg">
                            Experience a new era of productivity. Unique TaskHub is your gateway to efficiency – simplify tasks, collaborate in real-time, and achieve success effortlessly.
                            </p>
                            <Link  to={user? '/dashboard' : '/login'}
                                className="inline-flex items-center justify-center px-8 py-3 text-gray-100 bg-blue-600 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 ">
                                Explore Now</Link>
                        </div>
                        <div className="w-full px-4 md:w-1/2 hidden lg:flex">
                            <div className="relative mx-auto md:mr-0 max-w-max">                               
                                <div className="relative overflow-hidden rounded-7xl">
                                    <img src="https://i.ibb.co/44qb8N5/3121087.png" alt=""
                                        className="relative z-10 object-cover w-[400px] h-full rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;