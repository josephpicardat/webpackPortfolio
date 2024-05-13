import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import '../components/css/contact.css';

const FORM_ENDPOINT =
    'https://public.herotofu.com/v1/9a730000-8bdb-11ed-a003-6f0b76086b1c';

const Contact = () => {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Anything you need to inject dynamically
        const injectedData = {
            DYNAMIC_DATA_EXAMPLE: count,
        };
        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        Object.assign(data, injectedData);

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                // It's likely a spam/bot request, so bypass it to validate via captcha
                if (response.status === 422) {
                    Object.keys(injectedData).forEach((key) => {
                        const el = document.createElement('input');
                        el.type = 'hidden';
                        el.name = key;
                        el.value = injectedData[key];

                        e.target.appendChild(el);
                    });

                    e.target.submit();
                    throw new Error('Please finish the captcha challenge');
                }

                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => setStatus("We'll be in touch soon."))
            .then(() => setCount(count + 1))
            .catch((err) => setStatus(err.toString()));
    };

    if (status) {
        return (
            <>
                <div className='text-2xl'>Thank you!</div>
                <div className='text-md'>{status}</div>
            </>
        );
    }

    const CustomTextField = styled(TextField)(({ theme }) => ({
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        color: 'black',
        boxShadow:
            'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;',
    }));

    const ColorButton = styled(Button)(({ theme }) => ({
        fontFamily: 'Courier New Courier monospace',
        width: '10rem',
        height: '4rem',
        fontSize: '2rem',
        backgroundColor: 'transparent',
        color: 'var(--off_white)',
        border: '2px solid var(--green)',
        padding: '6px 12px',
        '&:hover': {
            backgroundColor: 'var(--green)',
            color: 'black',
            border: '2px solid var(--green)',
        },
    }));

    return (
        <section className=' contactPageWrapper'>
            <div className='contactPage'>
                <h2 className='header_sections' id='contact'>
                    <span className='num'>0.3 </span>
                    Contact
                </h2>
                <Box
                    component='form'
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method='POST'
                    target='_blank'
                    className='formStyling'
                >
                    <div className='formDiv'>
                        <CustomTextField
                            id='name'
                            label='Name'
                            variant='filled'
                            className='formInputs'
                            name='name'
                            required
                        />
                        <CustomTextField
                            type='email'
                            name='email'
                            id='email'
                            label='Email'
                            variant='filled'
                            className='formInputs'
                            required
                        />
                        <CustomTextField
                            id='message'
                            name='message'
                            label='Message'
                            variant='filled'
                            multiline
                            rows={6}
                            required
                        />
                    </div>

                    <ColorButton type='submit' value='submit' id='submit'>
                        Submit
                    </ColorButton>
                </Box>
            </div>
        </section>
    );
};

export default Contact;
