import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import steve from "../assets/images/steve.png"

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <div className="flex items-center justify-center neo-brutalism-blue py-4 px-8 mx-5">
                <h1 className="sm:text-xl sm:leading-snug text-white text-left">
                    Hi, I'm
                    <span className="font-semibold mx-2 text-white">Steephan Raj</span>
                    👋
                    <br />
                    A Full Stack Developer from Tamilnadu
                </h1>
                <div className="ml-6">
                    <img src={steve} className="w-30 h-32" />
                </div>
            </div>


        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Done many internships during my college days<br /> and picked up many skills along the way
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Learn more
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    Done many projects which helps me to explore new things <br /> Curious about them?
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visit my portfolio
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Let's talk
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;