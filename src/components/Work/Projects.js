import { useState } from 'react';
import Cards from './Cards.js';
import CardData from './CardData.js';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Box, Typography } from '@mui/material'; // Import Material UI components

import '../css/work/projects.css';

const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
    const outside = children.map((child) => child.props);
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`custom-tabpanel-${index}`}
            aria-labelledby={`custom-tab-${index}`}
            {...other}
            className='tabPanel'
        >
            {value === index && (
                <Box sx={{ p: 3 }} className='card-container'>
                    {outside.map((card) => (
                        <Cards
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            imageSrc={card.image}
                            imageArray={card.imageArray}
                            language={card.language}
                            link={card.link}
                            linkType={card.linkType}
                        ></Cards>
                    ))}
                </Box>
            )}
        </div>
    );
};

const a11yProps = (index) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
};

const Projects = () => {
    const [value, setValue] = useState(0); // State for active tab

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = [
        { label: 'All', content: [] },
        { label: 'React', content: [] },
        { label: 'JavaScript', content: [] },
    ];

    CardData.forEach((card) => {
        if (card.language.includes('React')) {
            tabs[1].content.push(<Cards key={card.id} {...card} />);
        } else if (
            card.language.includes('Javascript') ||
            card.language.includes('JS')
        ) {
            tabs[2].content.push(<Cards key={card.id} {...card} />);
        }
        tabs[0].content.push(<Cards key={card.id} {...card} />);
    });

    const StyledTabs = styled((props) => (
        <Tabs
            {...props}
            TabIndicatorProps={{
                children: <span className='MuiTabs-indicatorSpan' />,
            }}
        />
    ))({
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 90,
            width: '100%',
            backgroundColor: 'var(--green)',
        },
    });

    return (
        <div className='card-container'>
            <Box sx={{ width: '100%' }} className='tabBox'>
                <Box
                    sx={{
                        borderColor: 'divider',
                    }}
                >
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label='card tabs'
                        centered
                    >
                        {tabs.map((tab, index) => (
                            <Tab
                                key={index}
                                label={tab.label}
                                {...a11yProps(index)}
                                className='workTabs'
                                sx={{
                                    fontFamily: [
                                        '"Courier"',
                                        '"New Courier"',
                                        'monospace',
                                    ].join(','),
                                    '&.Mui-selected': {
                                        color: 'var(--green)',
                                    },
                                    color: 'var(--off-white)',
                                    fontWeight: 'bold',
                                    fontSize: '1.5rem',
                                    padding: '20px',
                                }}
                            />
                        ))}
                    </StyledTabs>
                </Box>
                {tabs.map((tab, index) => (
                    <CustomTabPanel key={index} value={value} index={index}>
                        {tab.content.length > 0 ? (
                            tab.content
                        ) : (
                            <Typography>
                                No projects in this category yet.
                            </Typography>
                        )}
                    </CustomTabPanel>
                ))}
            </Box>
        </div>
    );
};

export default Projects;
