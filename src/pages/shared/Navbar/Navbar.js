import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
// import {icon} from '../../../../src/assests/musicly-fav.png'
import icon from '../../../assests/musicly-fav.png'
import './Navbar.css'
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";





const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleLogout = () => {
        logout()
            .then(result => {
                toast.success('Logout Succefully')
                navigate('/login')
            })
            .catch(err => toast.error(err))
    }


    const menuItems = <React.Fragment>
        <li className='font-semibold'><NavLink className={({isActive})=> isActive? 'text-violet-600': 'text-black'} to='/home'>Home</NavLink></li>
        <li className='font-semibold'><NavLink className={({isActive})=> isActive? 'text-violet-600': 'text-black'}  to='/dashboard'>Dashboard</NavLink></li>
        <li className='font-semibold'><NavLink className={({isActive})=> isActive? 'text-violet-600': 'text-black'}  to='/blogs'>Blogs</NavLink></li>
        <li className='font-semibold'><NavLink className={({isActive})=> isActive? 'text-violet-600': 'text-black'} to='/about'>About Us</NavLink></li>
    </React.Fragment>


    return (
        <div className="navbar bg-white px-9">

            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <Link to='/' className="mt-1 pt-2 hidden lg:block btn btn-ghost normal-case text-xl text-indigo-600">Musicly</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-center">
                <Link to='/' className="mt-1 pt-2 block lg:hidden btn btn-ghost normal-case text-xl text-indigo-600">Musicly</Link>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">



                        <div className="w-8 rounded-full ring ring-accent ring-offset-base-200 ring-offset-2">
                            <img src="https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg" alt='' />
                        </div>


                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {/* <li>
                            <Link className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link>Settings</Link></li> */}

                        {
                            user?.uid ?
                                <li ><button onClick={handleLogout}>Logout</button></li>
                                :
                                <li ><Link to='/login'>Login</Link></li>
                        }
                    </ul>

                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;