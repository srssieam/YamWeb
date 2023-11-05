import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo-1.png'
import './navStyle.css'

const Navbar = () => {
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/items'>Items</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-[#023302] font-playpen max-w-[1250px] mx-auto lg:rounded-2xl lg:mt-10 flex justify-between lg:sticky top-0">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-[#023302] text-white rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="flex items-center"><img src={logo} alt="logo" className="w-12 h-12 lg:w-24 lg:h-24" /><h3 className="text-lg lg:text-3xl font-semibold text-[#64a13b]">Yam<span className="text-[#ffa600]">Web</span></h3></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className=" flex gap-6 px-6 text-xl">
                    {navLink}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;