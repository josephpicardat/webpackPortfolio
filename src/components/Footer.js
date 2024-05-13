import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdMailOutline } from 'react-icons/md';
import '../components/css/footer.css';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='socialLinks'>
                <a
                    href='https://www.linkedin.com/in/josephpicardat/'
                    className='icons'
                    id='linkedIn'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsLinkedin className='socialLink' />
                </a>
                <a
                    href='https://github.com/josephpicardat'
                    className='icons'
                    id='github'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsGithub className='socialLink' />
                </a>
            </div>
            <a href='mailto: josephpicardat1@gmail.com' className='emailLink'>
                <p className='icons' id='email'>
                    <MdMailOutline />
                </p>
                josephpicardat1@gmail.com
            </a>
        </section>
    );
};

export default Footer;
