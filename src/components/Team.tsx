import michael from '../assets/michael.png';

const Team = () => {

    const teamMembers = [
        { name: "Michael Habermas",
            role: "BD Learning Assistant",
            description: "Michael has got a myriad of expreience in cross functional teams to leverage the best yield of education in the BD labs team",
            image: michael },
            { name: "Michael Habermas",
                role: "BD Learning Assistant",
                description: "Michael has got a myriad of expreience in cross functional teams to leverage the best yield of education in the BD labs team",
                image: michael },
                { name: "Michael Habermas",
                    role: "BD Learning Assistant",
                    description: "Michael has got a myriad of expreience in cross functional teams to leverage the best yield of education in the BD labs team",
                    image: michael }
    ];
    return (
        <div className="bg-gray-50 py-16 bg-[#145074]" id="team">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the People behind Labs</h2>
                <p className="text-white text-lg mt-2">Decades of combined Engineering Experience</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
                            <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover" />
                            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                            <p className="text-gray-600 text-lg mt-2">{member.role}</p>
                        </div>
                    ))}



                </div>
            </div>
        </div>
    );
}

export default Team;