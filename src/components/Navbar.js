import { useState, Fragment } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Stack,
    Button,
    List,
    ListItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import jpLogo from '../assets/jpLogo.png';
import resume from '../assets/pdf/joseph_picardat_resume.pdf';
import './css/navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
    const [expanded, setExpanded] = useState(false);
    const [clicked, setClicked] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 94;
            const sectionTop =
                section.getBoundingClientRect().top + window.pageYOffset;
            if (sectionId === 'contact') {
                window.scrollTo({
                    top: sectionTop - 200,
                    behavior: 'smooth',
                });
            } else {
                window.scrollTo({
                    top: sectionTop - offset,
                    behavior: 'smooth',
                });
            }
            setActiveSection(sectionId);
        }
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        fontFamily: 'Courier, New Courier, monospace',
        color: 'var(--off_white)',
        fontSize: '1.3rem',
        fontWeight: 500,
        border: 'none',
        padding: '6px 12px',
        '&:hover': {
            backgroundColor: 'transparent',
            color: 'var(--green)',
            border: 'none',
        },
        '&:active': {
            color: 'var(--green)',
        },
        '&.active': {
            color: 'var(--green)',
        },
    }));

    const ColorIconButton = styled(IconButton)(({ theme }) => ({
        color: 'var(--off_white)',
        '&:hover': {
            backgroundColor: 'transparent',
            color: 'var(--green)',
            border: 'none',
        },
    }));

    const toggleExpanded = (location) => {
        setExpanded(!expanded);
        setClicked(!clicked);
        if (location === 'resume') {
            return;
        } else {
            scrollToSection(location);
        }
    };

    return (
        <Fragment>
            <AppBar
                position='fixed'
                sx={{
                    backgroundColor: 'var(--lighter_background)',
                    borderBottom: '3px solid',
                    borderBottomColor: 'var(--background)',
                    boxShadow: 'none',
                }}>
                <Toolbar>
                    <ColorIconButton
                        size='large'
                        edge='start'
                        // color='inherit'
                        aria-label='logo'
                        href='#home'>
                        <img
                            className='logo'
                            src={jpLogo}
                            alt='logo'
                        />
                    </ColorIconButton>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Stack
                        direction='row'
                        spacing={2}
                        sx={{
                            color: 'var(--off_white)',
                        }}
                        className='navbarStack'>
                        <ColorButton
                            color='inherit'
                            href='#about-me'
                            className={`${
                                activeSection === 'about-me' ? 'active' : ''
                            }`}
                            onClick={() => scrollToSection('about-me')}>
                            <span className='navbarNumbers'>01.</span>
                            About Me
                        </ColorButton>
                        <ColorButton
                            color='inherit'
                            href='#pastWork'
                            className={`${
                                activeSection === 'pastWork' ? 'active' : ''
                            }`}
                            onClick={() => scrollToSection('pastWork')}>
                            <span className='navbarNumbers'>02.</span>
                            Work
                        </ColorButton>
                        <ColorButton
                            color='inherit'
                            href='#contact'
                            className={`contactSection ${
                                activeSection === 'contact' ? 'active' : ''
                            }`}
                            onClick={() => scrollToSection('contact')}
                            sx={{ borderRadius: '0' }}>
                            <span className='navbarNumbers'>03.</span>
                            Contact
                        </ColorButton>
                        <div className='resumeWrapper'>
                            <ColorButton
                                color='inherit'
                                href={resume}
                                target='_blank'
                                rel='noreferrer'>
                                Resume
                            </ColorButton>
                            <ColorButton
                                href={resume}
                                download='Joseph_Picardat_Resume.pdf'>
                                <DownloadIcon id='downloadButton' />
                            </ColorButton>
                        </div>

                        <ColorIconButton
                            color='inherit'
                            href='https://github.com/josephpicardat'
                            target='_blank'
                            rel='noreferrer'
                            sx={{ marginLeft: '8px !important' }}>
                            <GitHubIcon />
                        </ColorIconButton>
                    </Stack>
                    <MenuIcon
                        className={`menuIcon ${clicked ? 'clicked' : ''}`}
                        onClick={toggleExpanded}
                    />
                </Toolbar>
            </AppBar>

            <Box
                sx={{
                    height: expanded ? '256px' : '0',
                    backgroundColor: 'var(--lighter_background)',
                    transition: 'height .3s ease-in-out',
                    position: 'fixed',
                    top: '94px',
                    right: '0px',
                    zIndex: 1000,
                    width: '100%',
                    textAlign: 'center',
                    overflow: 'hidden',
                }}>
                <List
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',

                        padding: 0,
                    }}>
                    {/* Your navigation links here */}
                    <ListItem
                        onClick={() => toggleExpanded('about-me')}
                        href='#about-me'
                        className={`navListItem ${
                            activeSection === 'about-me' ? 'active' : ''
                        }`}>
                        <div className='navBarDrawerDiv'>
                            <span className='navbarNumbersList'>01.</span>
                            About Me
                        </div>
                    </ListItem>
                    <ListItem
                        onClick={() => toggleExpanded('pastWork')}
                        href='#pastWork'
                        className={`navListItem ${
                            activeSection === 'pastWork' ? 'active' : ''
                        }`}>
                        <div className='navBarDrawerDiv'>
                            <span className='navbarNumbersList'>02.</span>
                            Work
                        </div>
                    </ListItem>
                    <ListItem
                        onClick={() => toggleExpanded('contact')}
                        href='#contact'
                        className={`navListItem ${
                            activeSection === 'contact' ? 'active' : ''
                        }`}>
                        <div className='navBarDrawerDiv'>
                            <span className='navbarNumbersList'>03.</span>
                            Contact
                        </div>
                    </ListItem>
                    <ListItem
                        className='navListItem'
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            window.open(resume, '_blank', 'noreferrer');
                            toggleExpanded('resume');
                        }}>
                        <div className='navBarDrawerDiv'>
                            <span className='navbarNumbersList'>04.</span>
                            Resume
                        </div>
                    </ListItem>
                </List>
            </Box>
        </Fragment>
    );
};

export default Navbar;
