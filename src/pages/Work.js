import React from 'react';
import Projects from '../components/Work/Projects.js';
import '../components/css/work/work.css';

const Work = () => {
    return (
        <section className='pastWorkWrapper' id='pastWork'>
            <div className='Workpage'>
                <h2 className='work_header_sections' id='workHeader'>
                    <span className='num'>0.2 </span>
                    Work
                </h2>
                <Projects />
            </div>
        </section>
    );
};
export default Work;
