import RecipeIO from '../../assets/recipeIO.png';
import Gifter from '../../assets/gifter.png';
import FlexBoxIO from '../../assets/flexboxIO.png';
import EmployeeIO from '../../assets/EmployeeIO.png';
import NoteTakerIO from '../../assets/NoteTakerIO.png';
import SocialNetworkIO from '../../assets/SocialNetworkIO.png';
import TarotDeck from '../../assets/TarotDeck.png';
import README_Generator from '../../assets/Readme_Generator.png';

// PeaceofMind imports
import PeaceofMind from '../../assets/PeaceofMindV2/peaceOfMindv2.png';
import x43_about from '../../assets/PeaceofMindV2/x43_about.png';
import x43_post_comment from '../../assets/PeaceofMindV2/x43_post_comment.png';
import full_community from '../../assets/PeaceofMindV2/full_community.png';
import full_dashboard from '../../assets/PeaceofMindV2/full_dashboard.png';
import full_landing from '../../assets/PeaceofMindV2/full_landing.png';
import full_post_comments from '../../assets/PeaceofMindV2/full_post_comments.png';
import full_signup from '../../assets/PeaceofMindV2/full_signup.png';
import full_single_post from '../../assets/PeaceofMindV2/full_single_post.png';

// RecipeIO imports
import MainMenu from '../../assets/RecipeIO/MainMenu.png';
import Recipe from '../../assets/RecipeIO/Recipe.png';

// Gifter imports
import preview from '../../assets/Gifter/preview.png';
import gifter from '../../assets/Gifter/gifter.png';

// FlexboxIO imports
import align_content from '../../assets/FlexboxIO/align_content.png';
import align_items from '../../assets/FlexboxIO/align_items.png';
import align_self from '../../assets/FlexboxIO/align_self.png';
import flex_shrink from '../../assets/FlexboxIO/flex_shrink.png';
import justify_content from '../../assets/FlexboxIO/justify_content.png';
import navbar from '../../assets/FlexboxIO/navbar.png';

// TarotDeck
import dashboard from '../../assets/TarotDeck/dashboard.png';
import newReading from '../../assets/TarotDeck/newReading.png';
import reading from '../../assets/TarotDeck/reading.png';
import settings from '../../assets/TarotDeck/settings.png';

// EmployeeIO

//NoteTakerIO
import clean_note from '../../assets/NoteTakerIO/clean_note.png';
import hello_note from '../../assets/NoteTakerIO/hello_note.png';
import new_note from '../../assets/NoteTakerIO/new_note.png';

// SocialNetworkIO
import All_thoughts from '../../assets/SocialNetworkIO/All_thoughts.png';
import all_users from '../../assets/SocialNetworkIO/all_users.png';
import create_new_thought from '../../assets/SocialNetworkIO/create_new_thought.png';

const cardData = [
    {
        id: 1,
        title: 'Peace of Mind',
        subtitle: 'Mental Health Social Media App',
        description:
            'Peace of Mind is a website that will allow anyone with a need to connect to others regarding mental health and support. We provide a safe space for everyone to discuss their feelings without fear of retaliation.',
        image: PeaceofMind,
        imageArray: [
            {
                path: full_landing,
                alt: 'Landing Page',
            },
            {
                path: full_signup,
                alt: 'SignUp Page',
            },
            {
                path: full_dashboard,
                alt: 'Dashboard Page',
            },
            {
                path: full_community,
                alt: 'Community Page',
            },
            {
                path: full_single_post,
                alt: 'Single Post',
            },
            {
                path: full_post_comments,
                alt: 'Post with comments',
            },
            {
                path: x43_post_comment,
                alt: 'Post Comment Page',
            },
            {
                path: x43_about,
                alt: 'About Page',
            },
        ],
        language: 'React JS / GraphQL',
        link: 'https://peace-of-mind-app-v2.herokuapp.com/',
        linkType: 'Deployment',
    },
    {
        id: 2,
        title: 'RecipeIO',
        subtitle: 'Recipe Search Engine',
        description:
            'Recipe IO is a application that uses mysql2 to store users recipes and recipe books.',
        image: RecipeIO,
        imageArray: [
            {
                path: MainMenu,
                alt: 'Login Page',
            },
            {
                path: Recipe,
                alt: 'Recipe Example',
            },
        ],
        language: 'MYSQL / Handlebars / JS',
        link: 'https://github.com/josephpicardat/RecipeIO',
        linkType: 'Repository',
    },
    {
        id: 3,
        title: 'Gifter',
        subtitle: 'Gift Card Reminder Website',
        description:
            'A calendar application that sends gift cards to friends and family. It also a remind app.',
        image: Gifter,
        imageArray: [
            {
                path: preview,
                alt: 'Example Reminder',
            },
            {
                path: gifter,
                alt: 'Main Page',
            },
        ],
        language: 'Javascript',
        link: 'https://github.com/josephpicardat/gifter',
        linkType: 'Repository',
    },
    {
        id: 4,
        title: 'FlexBoxIO',
        subtitle: 'A Flexbox Playground',
        description:
            'An react application that is designed to give the user an easy understanding of the properties of the flex container and flex items alike.',
        image: FlexBoxIO,
        imageArray: [
            {
                path: align_content,
                alt: 'Align Content Page',
            },
            {
                path: align_items,
                alt: 'Align Items Page',
            },
            {
                path: align_self,
                alt: 'Align Self Page',
            },
            {
                path: flex_shrink,
                alt: 'Flex Shrink Page',
            },
            {
                path: justify_content,
                alt: 'Justify Content Post',
            },
            {
                path: navbar,
                alt: 'Navbar',
            },
        ],
        language: 'React JS',
        link: 'https://github.com/josephpicardat/FlexBoxIO',
        linkType: 'Repository',
    },
    {
        id: 5,
        title: 'TarotDeck',
        subtitle: 'Embrace Clarity: Tarot Card Readings Made Simple',
        description:
            'Embark on a journey of reflection and fun with the Tarot Deck app—a digital twist on the ancient practice of tarot readings. Our app offers users a unique opportunity to explore various tarot spreads, delve into the meanings of the cards, and gain personal insights, all with a touch of a button.',
        image: TarotDeck,
        imageArray: [
            {
                path: dashboard,
                alt: 'Dashboard',
            },
            {
                path: newReading,
                alt: 'New Tarot Reading',
            },
            {
                path: reading,
                alt: 'Previous Readings',
            },
            {
                path: settings,
                alt: 'Settings Page',
            },
        ],
        language: 'GraphQL / AWS / JS',
        link: 'https://github.com/AndreaRene/tarot-application',
        linkType: 'Repository',
    },
    {
        id: 6,
        title: 'EmployeeIO',
        subtitle: 'Employee Management Terminal with MYSQL',
        description:
            'Your comprehensive solution for efficiently organizing and tracking employee data. Powered by MySQL, this intuitive terminal-based application offers seamless management of employee information, from departments and roles to individual employee details.',
        image: EmployeeIO,
        imageArray: [
            {
                path: EmployeeIO,
                alt: 'Main Page',
            },
        ],
        language: 'MYSQL / JS',
        link: 'https://github.com/josephpicardat/EmployeeIO',
        linkType: 'Repository',
    },
    {
        id: 7,
        title: 'NoteTakerIO',
        subtitle: 'A Digital Notekeeper',
        description:
            '"Introducing NoteTakerIO, your go-to digital notekeeper for capturing, organizing, and accessing your thoughts effortlessly. With NoteTakerIO, you can seamlessly jot down new notes, update existing ones, and even remove notes you no longer need. Keep your ideas at your fingertips and revisit past notes with ease.',
        image: NoteTakerIO,
        imageArray: [
            {
                path: clean_note,
                alt: 'Clean Note',
            },
            {
                path: hello_note,
                alt: 'Hello Note',
            },
            {
                path: new_note,
                alt: 'New Note',
            },
        ],
        language: 'Express / JS',
        link: 'https://github.com/josephpicardat/NoteTakerIO',
        linkType: 'Repository',
    },
    {
        id: 8,
        title: 'SocialNetworkIO',
        subtitle: 'Your Backend Social Media Hub',
        description:
            'Welcome to SocialNetworkIO, your centralized backend solution for powering social media interactions. Built with NoSQL and Insomnia, SocialNetworkIO serves as the backbone for hosting your social media platform, handling user management, post creation, and comment interactions effortlessly.',
        image: SocialNetworkIO,
        imageArray: [
            {
                path: All_thoughts,
                alt: 'All thoughts',
            },
            {
                path: all_users,
                alt: 'All users',
            },
            {
                path: create_new_thought,
                alt: 'Create new thought',
            },
        ],
        language: 'NoSQL / JS',
        link: 'https://github.com/josephpicardat/SocialNetworkIO',
        linkType: 'Repository',
    },
    {
        id: 9,
        title: 'README Generator',
        subtitle: 'Your Dynamic Documentation Tool',
        description: `Introducing ReadME Generator, your ultimate solution for generating dynamic and comprehensive README documentation with ease. Whether you are working on an open-source project or collaborating with a team. ReadME Generator simplifies the process of creating, updating, and maintaining README files, ensuring clarity and accessibility for your project's users and contributors.`,
        image: README_Generator,
        imageArray: [
            {
                path: README_Generator,
                alt: 'ReadME Generator',
            },
        ],
        language: 'Inquirer / JS',
        link: 'https://github.com/josephpicardat/README-Generator',
        linkType: 'Repository',
    },
];

export default cardData;
