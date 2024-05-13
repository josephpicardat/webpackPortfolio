import React from 'react';
import Profile from '../assets/profile_picture.jpeg';
import '../components/css/about-me.css';

const About = () => {
    return (
        <section className='aboutMePageWrapper' id='about-me'>
            <div className='aboutMePage'>
                <div className='homeCardLeft'>
                    <h2 className='header_sections'>
                        <span className='num'>0.1 </span>About Me
                    </h2>
                    <h3 className='text-sections'>
                        Hi my name is Joseph Picardat and I enjoy adventure such
                        as scuba diving and the creativity that programming
                        offers me. Over the years I have been acquainted with
                        many different genres of academics in my college career
                        including engineering, computer science, and music
                        performance. I am an Eagle Scout and love the outdoors
                        and will take charge in any situation as needed.
                    </h3>

                    <h3 className='text-sections'>
                        I have experience in a few programing languages
                        including: Python, MatLab, C++, HTML, CSS, and
                        Javascript. I am not only acquainted with full-stack
                        development, but have years of experience with
                        SolidWorks, 3D printer software, and VCarve Pro. This
                        includes the understanding and use of CNC machines, 3D
                        printers, and laser cutters as well.
                    </h3>
                </div>
                <img
                    id='profileImg'
                    alt='profile'
                    src={Profile}
                    className='aboutCardRight'
                ></img>
            </div>
        </section>
    );
};

export default About;
