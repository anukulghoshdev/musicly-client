import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
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
                        <li><Link to="/dashboard/allUser">All Users</Link></li>

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default DashboardLayout;