import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content bg-slate-50">
                    <Outlet className=""></Outlet>
                </div>

                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allUser">All Users</Link></li>
                            </>
                        }

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default DashboardLayout;