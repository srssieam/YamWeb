import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";


const Root = () => {
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