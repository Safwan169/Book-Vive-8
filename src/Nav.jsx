import { NavLink } from "react-router-dom";

const Nav = ({ }) => {
    const nav = <>
        <li><NavLink to={'/home'} style={({ isActive }) => ({
            background: isActive ? "white" : "", color: "black"
        })}>Home</NavLink></li>
        <li>
            <NavLink to={'/listedbooks'} style={({ isActive }) => ({
                background: isActive ? "white" : "", color: "black"
            })}>Listed Books</NavLink>
        </li>
        <li><NavLink to={'/read'} style={({ isActive }) => ({
            background: isActive ? "white" : "", color: "black"
        })} >Pages to read</NavLink></li>
        <li>
            <NavLink to={'/stationary'} style={({ isActive }) => ({
                background: isActive ? "white" : "", color: "black"
            })}>stationary</NavLink>
        </li>
        <li><NavLink to={'/about'} style={({ isActive }) => ({
            background: isActive ? "white" : "", color: "black"
        })} >About us</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-2xl">Book Vive</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end  lg:visible lg:flex hidden lg:flex-row gap-3">
                    <a className="btn hover:bg-green-600 bg-green-500 text-white">Sign In</a>
                    <a className="btn hover:bg-blue-500 bg-blue-400 text-white">Sign Up</a>
                </div>
            </div>

        </div>

    );
};

export default Nav;