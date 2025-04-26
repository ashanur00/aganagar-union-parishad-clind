import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import TopBanner from "../Component/TopBanner/TopBanner";

const Main = () => {
    return (
        <div>
            <TopBanner/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;