import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-2 md:px-10 py-5">
            <img className="w-40" src="https://i.ibb.co/d5xX68d/Logo.png" alt="logo" />
            <ul className="flex gap-2 md:gap-5 font-semibold">
                <li className="hover:text-red-700 hover:underline"><NavLink to={"/home"}>Home</NavLink></li>
                <li className="hover:text-red-700 hover:underline"><NavLink to={"/donations"}>Donations</NavLink></li>
                <li className="hover:text-red-700 hover:underline"><NavLink to={"/statistics"}>Statistics</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;