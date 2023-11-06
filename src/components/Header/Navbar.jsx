import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo-1.png'
import './navStyle.css'
import defaultUser from '../../assets/defaultUser.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { userSignOut, user } = useContext(AuthContext);
    const handleLogOut =()=>{
        userSignOut();
        window.location.pathname='/'
    }

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/items'>Items</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        {
            user ? <li onClick={handleLogOut} className="text-white hover:text-[#ffa600] hover:underline cursor-pointer">Logout</li>
                : <li><NavLink to='/login'>Login</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-[#061606] font-playpen max-w-[1250px] mx-auto lg:rounded-2xl z-10 lg:mt-10 flex justify-between lg:sticky top-0">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-10 p-5 space-y-4 shadow bg-[#023302] text-white rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="flex items-center"><img src={logo} alt="logo" className="w-16 h-16 lg:w-24 lg:h-24" /><h3 className="text-lg lg:text-3xl font-semibold text-[#64a13b]">Yam<span className="text-[#ffa600]">Web</span></h3></Link>
            </div>
            <div>
                <div className="hidden lg:flex">
                    <ul className=" flex gap-6 px-6 text-xl">
                        {navLink}
                    </ul>
                </div>
                {
                    user && <div className="dropdown dropdown-end mr-4">
                        <label tabIndex={0} className="hover:cursor-pointer">
                            {
                                user?.photoURL ? <img src={user.photoURL} className="rounded-full w-12 h-12 object-cover" alt="" />
                                    : <img src={defaultUser} alt="" className="rounded-full w-12 h-12 object-cover" />
                            }
                        </label>
                        <ul tabIndex={0} className="space-y-4 p-5 dropdown-content z-[20] shadow bg-[#023302] text-white rounded-box w-52 mt-4">
                            <li><Link to='/myAddedItems'> My added food items</Link></li>
                            <li><Link to='/myOrderedFood'> My ordered items</Link></li>
                            <li><Link to='/addfooditem'> Add a food item</Link></li>
                        </ul>
                    </div>
                }
            </div>
        </div>


    );
};

export default Navbar;