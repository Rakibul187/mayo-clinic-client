import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 text-base-content">
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && <li><Link to='/dashboard/allusers'>All Users</Link></li>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;