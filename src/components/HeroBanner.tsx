import { Link } from "react-router-dom";

const HeroBanner = () => {
    return (
        <div className="min-h-[80vh] flex items-center bg-blue-100 hero">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Unlock Your Potential <span className="text-green-600">With Labs</span></h1>
                <p className="mt-4 text-lg md:text-xl text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ad optio pariatur magnam nemo, natus dolores similique? Error, praesentium quis quaerat exercitationem repellat nihil iste voluptatibus optio mollitia laboriosam vel.</p>
                <div className="mt-6">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700"><Link to={'/chat'}>Chat with DecaChat</Link></button>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;