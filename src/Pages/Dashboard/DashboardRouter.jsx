
import { FaBook, FaHeart, FaSuperpowers } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


const DashboardRouter = () => {
    return (
        <div>
            <li>
                <Link
                
                    className="flex items-center px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <MdOutlineDashboard className="text-2xl"></MdOutlineDashboard>
                    </span>
                    <span>My Profile</span>
                </Link>
            </li>
            <li>
                <Link
                to="createTask"
                    className="flex items-center px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <FaBook className="text-2xl"></FaBook>
                    </span>
                    <span>Create New Task</span>
                </Link>
            </li>
            <li>
                <Link
                to="toDoList"
                    className="flex items-center px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <FaSuperpowers className="text-2xl"></FaSuperpowers>
                    </span>
                    <span>To-Do List</span>
                </Link>
            </li>
            <li>
                <Link
               
                    className="flex items-center px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <FaHeart className="text-2xl"></FaHeart>
                    </span>
                    <span>Wishlist</span>
                </Link>
            </li>
           
           
        </div>
    );
};

export default DashboardRouter;