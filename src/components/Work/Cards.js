import { styled } from '@mui/material/styles';
import {
    Stack,
    Modal,
    Backdrop,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
} from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import { useState, forwardRef, cloneElement, useEffect, useRef } from 'react';
import WorkModal from './workModal';
import '../css/work/projects.css';

const Fade = forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div
            ref={ref}
            style={style}
            {...other}>
            {cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

const ColorButton = styled(Button)(({ theme }) => ({
    fontFamily: 'Courier New Courier monospace',
    color: '#e31b6d',
    border: '2px solid #e31b6d',
    padding: '6px 12px',
    width: '50%',
    '&:hover': {
        backgroundColor: '#e31b6d',
        color: 'white',
        border: '2px solid #e31b6d',
    },
}));

function Cards({
    imageSrc,
    imageArray,
    title,
    language,
    subtitle,
    description,
    link,
    linkType,
    what,
    role,
    completed,
    video = null,
    index,
    favorited,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchScreen, setIsTouchScreen] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const largeBreakPoint = 1170;
    const mediumBreakPoint = 780;
    const currentWidth = window.screen.width;

    const test = () => {
        console.log(isTouchScreen);
    };

    console.log(moveLeft.large);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleModalClose = () => {
        handleClose(); // Close the modal in Cards component
    };

    useEffect(() => {
        const isTouchScreen =
            'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouchScreen(isTouchScreen);

        if (currentWidth > largeBreakPoint && [3, 6, 9].includes(index)) {
            setMoveLeft(true);
        } else {
            setMoveLeft(false);
        }
    }, []);

    return (
        <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='box_card_container'
            sx={{ borderRadius: 'none !important' }}
            onClick={test}>
            <Card
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    position: 'relative',
                }}
                className='card'>
                <img
                    src={imageSrc}
                    alt={title}
                    className='cardImgs'></img>
            </Card>
            {favorited && (
                <StarIcon
                    className='star-icon'
                    sx={{
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        color: 'gold',
                        zIndex: 5,
                    }}
                />
            )}
            {/* Hover Video */}
            {isHovered && !isTouchScreen && (
                <video
                    className='hover-video'
                    src={video}
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 3,
                    }}
                />
            )}

            {/* Drawer Card (second card) */}
            <Box
                className='drawer_container'
                sx={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    width: '100%',
                    height: '100%',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    zIndex: isHovered ? 2 : -1,
                    transition: 'transform 0.5s ease', // Add smooth transition effect
                    '@media (min-width: 1170px)': {
                        transform:
                            isHovered && !isTouchScreen
                                ? moveLeft
                                    ? 'translateX(-100%)'
                                    : 'translateX(100%)'
                                : 'translateX(0)', // Slide in/out on hover
                    },
                    // Medium screen styles
                    '@media (min-width: 780px) and (max-width: 1170px)': {
                        transform:
                            isHovered && !isTouchScreen
                                ? 'translateY(100%)'
                                : 'translateX(0)',
                    },
                    // Small screen styles
                    '@media (max-width: 779px)': {
                        transform:
                            isHovered && !isTouchScreen
                                ? 'translateY(100%)'
                                : 'translateX(0)',
                    },
                }}>
                <Box className='drawer'>
                    <Typography
                        variant='h5'
                        sx={{ paddingTop: '1rem' }}>
                        {title}
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{ fontStyle: 'italic' }}>
                        {role}
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{ color: completed ? '#11ffa8' : '#e31b6d' }}>
                        {completed ? 'Completed' : 'In Progress'}
                    </Typography>
                    <Typography
                        variant='body1'
                        className='what'
                        sx={{ fontSize: '0.9rem' }}>
                        {what}
                    </Typography>
                    <ColorButton onClick={handleOpen}>Learn More</ColorButton>

                    <Modal
                        aria-labelledby='spring-modal-title'
                        aria-describedby='spring-modal-description'
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                TransitionComponent: Fade,
                            },
                        }}>
                        <Fade in={open}>
                            <WorkModal
                                title={title}
                                subtitle={subtitle}
                                description={description}
                                imageArray={imageArray}
                                link={link}
                                linkType={linkType}
                                onClose={handleModalClose}
                            />
                        </Fade>
                    </Modal>
                </Box>
            </Box>
        </Box>
    );
}

export default Cards;
