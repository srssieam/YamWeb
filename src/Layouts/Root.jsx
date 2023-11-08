import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";


const Root = () => {
    const location = useLocation();
    useEffect(()=>{
        document.title = location.pathname;
        document.title = `YamWeb ${location.pathname.replace("/","| ")}`;
    },[location.pathname])
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[90vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;