

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DashBoardNav from "./DashboardNav";
import DashboardRouter from "./DashboardRouter";
import AvailableRoute from "./AvailableRoute";
import AuthHook from "../../Hooks/AuthHook";

const DashBoard = () => {
    const [open, setOpen] = useState(true)
    const [dropdown, setDropdown] = useState(false)
    const {user} = AuthHook()
   

    return (
        <div className=" font-raleway ">
            
            <div className="bg-gradient-to-r from-gray-800 to-indigo-800 dark:bg-gray-800">
                <div className={`body-content ${open ? 'open' : ''}`}>

                    {/* navlink  */}
                    <div className="relative lg:block navbar-menu">
                        <nav
                            className={`fixed top-0 bg-gradient-to-r from-gray-800 to-indigo-800 transition-all lg:mt-0 z-40 mt-16 left-0 dark:bg-gray-900 bottom-0 flex flex-col ${open ? 'w-[280px]' : 'w-0'
                                } lg:border-none border-r border-gray-200 dark:border-gray-800 text-white overflow-hidden`}
                            id="sidenav"
                        >

                            {/* website logo */}
                            <div
                                className="flex items-center w-full px-4 pt-4 pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                                <Link to='/dashboard'>
                                    <div className="flex items-center ml-2">
                                        <img src="https://i.ibb.co/LQ5jG4p/logo.png" className='h-12 w-28 lg:h-16 lg:w-36' alt="" />
                                    </div>
                                </Link>
                            </div>
                            {/* user photo and name */}
                            <div className="flex flex-wrap items-center px-4">
                                <div className="px-2">
                                    <img src={user?.photoURL}
                                        className="object-cover object-right w-10 h-10 rounded-full" alt="person" />
                                </div>
                                <div className="px-2">
                                    <span className="text-sm text-white dark:text-gray-400 ">Welcome,</span>
                                    <h2 className="text-lg text-zinc-950 font-medium dark:text-gray-300 ">{user?.displayName}</h2>
                                </div>
                            </div>

                            {/* routes */}
                            <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">

                                {/* normal user */}
                                <ul className="mb-8 text-sm">
                                    <DashboardRouter></DashboardRouter>
                                </ul>
                               
                            </div>

                            <div className="divider divider-warning mt-12 px-6"></div>
                            {/* available all routes */}
                            <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                                <ul className=" list-none">
                                   <AvailableRoute></AvailableRoute>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* content side */}
                    <div className={`mx-auto  transition-all content-wrapper ${!open ? 'lg:ml-0' : 'lg:ml-[280px]'}`} id="dash">
                        {/* navbar */}
                        <div>
                            <DashBoardNav open={open} setOpen={setOpen} dropdown={dropdown} setDropdown={setDropdown}></DashBoardNav>
                        </div>
                        <div className=" font-raleway ">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default DashBoard;