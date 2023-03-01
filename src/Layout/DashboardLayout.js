import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
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
                        <li><Link to='/'>Sidebar Item 1</Link></li>
                        <li><Link to='/'>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;