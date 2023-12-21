import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {

    const navlinks =
        <>

            <li className="text-lg font-medium mr-2"><NavLink to='/'  className={({ isActive }) => (isActive ? 'active ' : 'inactive')}>Home</NavLink></li>
            <li className="text-lg font-medium mr-2"><NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'active ' : 'inactive')}>Dashboard</NavLink></li>
            <li className="text-lg font-medium mr-2"><NavLink to='/aboutUs' className={({ isActive }) => (isActive ? 'active ' : 'inactive')}>About Us</NavLink></li>
            <li className="text-lg font-medium mr-2"><NavLink to='/contact' className={({ isActive }) => (isActive ? 'active ' : 'inactive')}>Contact</NavLink></li>
            <li className="text-lg font-medium mr-2 lg:hidden"><NavLink to='/login' className={({ isActive }) => (isActive ? 'active ' : 'inactive')}>Login</NavLink></li>
        </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                           <FiMenu className="text-2xl"></FiMenu>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl  font-semibold text-zinc-950">Unique <span className=" text-green-600">TaskHub</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                <Link to='/login'
                        className="inline-block px-4 py-3 mr-2 text-lg font-medium leading-none text-blue-600 border border-blue-200 rounded dark:hover:border-blue-300 dark:hover:text-blue-300 dark:text-gray-400 dark:border-gray-400 hover:text-blue-700 hover:border-blue-300">Log
                        In</Link>
                    <Link to='/register'
                        className="inline-block px-4 py-3 mr-2 text-lg font-medium leading-none text-gray-100 bg-blue-600 border border-blue-200 rounded dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700">Sign
                        Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;