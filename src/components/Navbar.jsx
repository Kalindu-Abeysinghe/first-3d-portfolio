import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <header className="header">
            <NavLink
                to="/"
                className="w-25 h-10 p-2 object-contain rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">Kalindu</p>
            </NavLink>
            <nav className="flex text-xl gap-10 font-large">
                <NavLink
                    to="/about"
                    className={({isActive}) => isActive ? " text-blue-500" : "text-black"}
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({isActive}) => isActive ? " text-blue-500" : "text-black"}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar