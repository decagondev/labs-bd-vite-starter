const NavBar = () => {
    return (
        <nav className="sticky top-0 bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-green-600 font-bold text-2xl">BD Labs Frontend</div>
                    <span className="ml-2 text-2xl font-semibold text-gray-600">Starter</span>
                </div>
                <ul className="flex space-x-6 text-gray-800 font-medium ml-80 gap-8">
                    <li><a href="#approach" className="hover:text-green-600">How do we do Labs?</a></li>
                    <li><a href="#team" className="hover:text-green-600">Meet the Team</a></li>
                    <li><a href="#price" className="hover:text-green-600">Pricing</a></li>
                </ul>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Login</button>
            </div>
        </nav>
    );
}

export default NavBar;