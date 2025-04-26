import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItem = <>
        <li><Link to= '/'>হোম</Link></li>
        <li tabIndex={0}>
            <details>
                <summary>আবেদন</summary>
                <ul className="p-2">
                    <li><Link to= '/fromApplication'>নাগরিক আবেদন</Link></li>
                    <li><Link to= '/fromApplication'>ওয়ারিশ/পারিবারিক আবেদন</Link></li>
                    <li><Link to= '/fromApplication '>ট্রেড লাইসেন্স আবেদন</Link></li>
                    <li><Link to= '/fromApplication'>নতুন হোল্ডিং আবেদন</Link></li>
                </ul>
            </details>
        </li>
        <li><Link to= '/sonodJacai'>সনদ যাচাই</Link></li>
        <li><Link to= '/jugajog'>যোগাযোগ</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-blue-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;