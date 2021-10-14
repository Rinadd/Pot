import Navbar from "./Navbar";
import "../assets/Header.css";
import { nativeTouchData } from "react-dom/test-utils";

const Header = () => {
    return (
        <>
        <div className="navBar">
            <Navbar />
        </div>
        </>
    );
};

export default Header;