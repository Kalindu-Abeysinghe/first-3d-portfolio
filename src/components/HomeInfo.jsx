import React from 'react';
import {Link} from "react-router-dom";
import {arrow} from "../assets/icons/index.js";


const InfoBox = ({text, link, btnText}) => {
    return (
        <div className="info-box shadow-none">
            <p className='font-medium text-center sm:text-l'>
                {text}
            </p>
            <Link to={link} className="neo-brutalism-white neo-btn">
                {btnText}
                <img src={arrow} className="w-4 h-4 object-contain" alt="arrow-icon"/>
            </Link>
        </div>
    );
};

const renderContent = {
    1: (
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Kalindu</span>👋
            <br/>
            A Software Engineer from Sri Lanka 🇱🇰
        </h1>
    ),
    2: (
        <InfoBox
            text="A passionate software engineer and cloud solutions architect specializing in scalable systems"
            link="/about"
            btnText="Learn more"
        />
    ),
    // 3: (
    //     <InfoBox
    //         text="Explore my portfolio of successful projects and innovative solutions across various technologies"
    //         link="/projects"
    //         btnText="Visit my portfolio"
    //     />
    // ),
    4: (
        <InfoBox
            text="Ready to bring your ideas to life? Let's discuss your next project and make it happen!"
            link="/contact"
            btnText="Get in Touch!"
        />
    )
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;