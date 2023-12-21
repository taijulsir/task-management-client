import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navlinks =
        <>

            <li className="text-lg font-medium mr-2"><NavLink to='/'  className={({ isActive }) => (isActive ? 'active ' : 'inactive')}>Home</NavLink></li>
            <li className="text-lg font-medium mr-2"><NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'active ' : 'inactive')}>Dashboard</NavLink></li>
            <li className="text-lg font-medium mr-2"><NavLink to='/aboutUs' className={({ isActive }) => (isActive ? 'active ' : 'inactive')}>About Us</NavLink></li>
            <li className="text-lg font-medium mr-2"><NavLink to='/contact' className={({ isActive }) => (isActive ? 'active ' : 'inactive')}>Contact</NavLink></li>
        </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl shadow-xl font-semibold text-zinc-950">Unique <span className=" text-green-600">TaskHub</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;