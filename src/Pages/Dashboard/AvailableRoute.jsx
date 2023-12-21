

import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { LuTableProperties } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";

const AvailableRoute = () => {
    return (
        <div>
            <li>
                <Link
                    to="/"
                    className="flex items-center text-sm px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-600 hover:rounded-md ">
                    <span className="inline-block mr-3">
                        <FaHome className="text-2xl"></FaHome>
                    </span>
                    <span>Go Home</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/allProperties"
                    className="flex items-center text-sm px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <LuTableProperties className="text-2xl"></LuTableProperties>
                    </span>
                    <span>Add Properties</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    className="flex items-center text-sm px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <AiOutlineMail className="text-2xl"></AiOutlineMail>
                    </span>
                    <span>Contact Us</span>
                </Link>
            </li>
        </div>
    );
};

export default AvailableRoute;