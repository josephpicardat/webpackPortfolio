import React from 'react';
import Profile from '../assets/profile_picture.png';
import '../components/css/about-me.css';

const About = () => {
    return (
        <section
            className='aboutMePageWrapper'
            id='about-me'>
            <div className='aboutMePage'>
                <div className='homeCardLeft'>
                    <h2 className='header_sections'>
                        <span className='num'>0.1 </span>About Me
                    </h2>
                    <h3 className='text-sections'>
                        Hi my name is Joseph Picardat and I am an aspiring
                        full-stack software engineer with expertise in
                        Javascript and its modern libraries and domain skills
                        like React, Node, and MongoDB. I am confident in my
                        ability to add value to any project I undertake.
                    </h3>

                    <h3 className='text-sections'>
                        I have almost a year in complex project development and
                        I am currently pursuing an AWS certification and a
                        Bachelor of Arts from the University of Texas at Austin.
                        As a self-taught developer, I have built several web
                        applications within a team setting in and outside my
                        Coding Bootcamp at the University of Texas at Austin.
                        These projects consisted of many different technologies
                        and have helped me learn and thrive in a collaborative,
                        fast-paced environment. I am very confident in my
                        ability to demonstrate clean, readable code.
                    </h3>
                </div>
                <img
                    id='profileImg'
                    alt='profile'
                    src={Profile}
                    className='aboutCardRight'></img>
            </div>
        </section>
    );
};

export default About;
