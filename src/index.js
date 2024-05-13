import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom/client';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const home = document.getElementById('home');
            const about = document.getElementById('about-me');
            const work = document.getElementById('pastWork');
            const contact = document.getElementById('contact');
            const sections = [home, about, work, contact];
            const windowHeight = window.innerHeight;

            const scrollPosition = window.scrollY + windowHeight / 2;

            let newActiveSection = null;

            sections.forEach((section, index) => {
                if (
                    section &&
                    ((scrollPosition >= section.offsetTop &&
                        scrollPosition <=
                            section.offsetTop + section.offsetHeight) ||
                        (index === sections.length - 1 &&
                            scrollPosition >= section.offsetTop))
                ) {
                    newActiveSection = section.id;
                }
            });

            if (newActiveSection !== activeSection) {
                setActiveSection(newActiveSection);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    return (
        <section className='wrapper'>
            <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <Home id='home' />
            <About id='about-me' />
            <Work id='pastWork' />
            <Contact id='contact' />
            <Footer />
        </section>
    );
};

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<App />);
