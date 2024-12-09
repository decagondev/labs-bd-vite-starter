import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="sticky top-0 bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                <Link to="/" className="flex">
                    <div className="text-green-600 font-bold lg:text-2xl">BD Labs Frontend</div>
                    <span className="ml-2 lg:text-2xl font-semibold text-gray-600">Starter</span>
                </Link>
                </div>
                <div className="flex align-center justify-center">

                    <ul className="hidden md:hidden lg:flex space-x-1 md:space-x-8 text-gray-800 font-xs md:font-medium ml-2 gap-2 md:gap-2 mr-8 mt-2">
                        <li><Link to="/speek" className="hover:text-green-600 hidden md:hidden lg:flex">Speak</Link></li>
                        <li><Link to="/game" className="hover:text-green-600 flex">Game</Link></li>
                        <li><a href="#team" className="hover:text-green-600">Team</a></li>
                    </ul>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Login</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;