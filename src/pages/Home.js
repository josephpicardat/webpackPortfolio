import Turtle from '../assets/Turtle.png';
import '../components/css/home.css';
function Home() {
    return (
        /* Home Page */
        <section className='homeWrapper' id='home'>
            <div className='homePage'>
                <div className='homeCardLeft'>
                    <p className='title'>Hi! I'm</p>

                    <p className='title' id='nameTitle'>
                        Joseph Picardat,
                    </p>
                    <p className='normalText'>
                        A <span className='highlight'>web designer</span> in the
                        works who's ready to take on any challenge you hit me
                        with. I have a certificate for a{' '}
                        <span className='highlight'>Coding Bootcamp </span>
                        under the <span id='ut'>University of Texas</span>{' '}
                        banner. I am expecting to graduate from the University
                        of Texas at Austin with a BA in Music in summer 2024.
                        This site is where all of my work is documented, feel
                        free to look around!
                    </p>
                </div>
                <div className='homeCardRight'>
                    <img id='homeLogo' alt='enlarged logo' src={Turtle}></img>
                </div>
            </div>
        </section>
    );
}

export default Home;
