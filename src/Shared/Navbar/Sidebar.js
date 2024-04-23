import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { GiTireIronCross } from "react-icons/gi";
import { GiSelfLove } from "react-icons/gi";

import { Link } from 'react-router-dom';
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    return (
        <>
            {showSidebar ? (

                <GiTireIronCross onClick={() => setShowSidebar(!showSidebar)} className='flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50' />
            ) : (

                <div className='flex items-center gap-2'>
                    <label
                        onClick={() => setShowSidebar(!showSidebar)}
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src='' alt="" />
                        </div>
                    </label>
                    <div>
                        <p className='font-semibold'>{user?.displayName}</p>
                    </div>
                </div>
            )}

            <div
                className={`top-0 right-0 w-[35vw] bg-red-800  p-10 text-white fixed h-full z-40  ease-in-out duration-500 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <div className='bg-black p-5 rounded-t-3xl'>
                <div className="flex justify-center">
                    <img className='rounded-lg' src={user?.photoURL} alt="" />
                </div>
                <p className='text-4xl text-center py-2 font-bold'>{user?.displayName}</p>
                <p className='text-center'>{user?.email}</p>
                <div className='flex justify-center mt-2'>
                    <Link
                        class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-white"
                        href="/download"
                    >
                        View Profile
                    </Link>
                </div>
                </div>
                <div className='mt-3'>
                    <ul>
                        <li className='flex gap-3 items-center cursor-pointer text-xl p-2 hover:bg-black hover:bg-opacity-30'>
                            <AiOutlineSetting /> Settings
                        </li>
                        <Link
                            to={'/favorite'}>
                            <li className='flex gap-3 items-center cursor-pointer text-xl p-2 hover:bg-black hover:bg-opacity-30'>
                                <GiSelfLove /> Favorite list
                            </li>
                        </Link>
                    </ul>
                    <div onClick={logOut} className='flex gap-3 items-center text-xl justify-center cursor-pointer p-2 hover:bg-black hover:bg-opacity-30'>
                        <AiOutlineLogout /> Log Out
                    </div>
                </div>
            </div>

        </>

    );
};

export default Sidebar;