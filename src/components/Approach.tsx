// import reactLogo from '../assets/approach.jpg';
import RandomImage from './RandomImage';
const Approach = () => {
    return (
        <div className="py-16" id='approach'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-[50%] text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Labs Approach</h2>
                    <p>3 Tickets | 1 Ticket every 2 weeks | Agile Workflow</p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Go All-in with Labs</h3>
                    <p className="mt-2 text-gray-600">Leverage your learning to make something with Labs</p>
                    <ul className="mt-4 list-disc list-inside text-gray-600">
                        <li>One Ticket every two weeks</li>
                        <li>Real world problem solving</li>
                        <li>Front End | Back End | Any End</li>
                        <li>Project Based Agile Workflow</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">What is an Ideal Labs Learner?</h3>
                    <p className="text-gray-800 mt-6">An ideal labs learner is one that gets the job done and articulates their problem solving process along the way.</p>
                </div>

                <div className="md:w-[50%] p-12 mt-6 md:mt-0 flex justify-center">
                {/* <img src={reactLogo} alt="" className="w-[900px] max-w-lg border shadow-2xl rounded-xl" /> */}
                <RandomImage />
                </div>
            </div>
        </div>
    );
}

export default Approach;