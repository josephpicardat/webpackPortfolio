import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import { useSpring, animated } from '@react-spring/web';
import { useState, forwardRef, cloneElement } from 'react';
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
        <animated.div ref={ref} style={style} {...other}>
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

function Cards({
    imageSrc,
    imageArray,
    title,
    language,
    subtitle,
    description,
    link,
    linkType,
}) {
    const [open, setOpen] = useState(false); // sets whether or not work modal is opened
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const ColorButton = styled(Button)(({ theme }) => ({
        fontFamily: 'Courier New Courier monospace',
        color: '#e31b6d',
        border: '2px solid #e31b6d',
        padding: '6px 12px',
        '&:hover': {
            backgroundColor: '#e31b6d',
            color: 'white',
            border: '2px solid #e31b6d',
        },
    }));

    const handleModalClose = () => {
        handleClose(); // Close the modal in Cards component
    };

    return (
        <div className='card'>
            <img src={imageSrc} alt={title}></img>
            <div className='overlay'>
                <Stack spacing={2} direction='column' className='stack'>
                    <div className='text'>
                        <span id='title'>{title}</span>
                        <span id='highlight'>{language}</span>
                    </div>
                    <ColorButton variant='outlined' onClick={handleOpen}>
                        LEARN MORE
                    </ColorButton>
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
                        }}
                    >
                        <Fade in={open}>
                            {/* open */}
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
                </Stack>
            </div>
        </div>
    );
}

export default Cards;
