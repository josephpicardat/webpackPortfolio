import Gifter from '../../assets/gifter.png';
import NoteTakerIO from '../../assets/NoteTakerIO.png';
import SocialNetworkIO from '../../assets/SocialNetworkIO.png';

// PeaceofMind imports
import peace_of_mind_main from '../../assets/PeaceofMindV2/peace_of_mind_main.png';
import full_about from '../../assets/PeaceofMindV2/full_about.png';
import full_community from '../../assets/PeaceofMindV2/full_community.png';
import full_dashboard from '../../assets/PeaceofMindV2/full_dashboard.png';
import full_landing from '../../assets/PeaceofMindV2/full_landing.png';
import full_post_comments from '../../assets/PeaceofMindV2/full_post_comments.png';
import full_signup from '../../assets/PeaceofMindV2/full_signup.png';
import full_single_post from '../../assets/PeaceofMindV2/full_single_post.png';
import peace_of_mind_video from '../../assets/PeaceofMindV2/peace_of_mind.mp4';

// EmployeeIO
import EmployeeIO from '../../assets/EmployeeIO.png';
import EmployeeIO_main from '../../assets/EmployeeIO/EmployeeIO_main.png';
import EmployeeIO_mp4 from '../../assets/EmployeeIO/employeeIO.mp4';

// RecipeIO imports
import MainMenu from '../../assets/RecipeIO/MainMenu.png';
import Recipe from '../../assets/RecipeIO/Recipe.png';
import recipeIO from '../../assets/RecipeIO/recipeIO.mp4';
import recipeIO_main from '../../assets/RecipeIO/recipeIO_main.png';

// ArcadeGames imports
import arcade_main from '../../assets/ArcadeGames/arcade_main.png';
import arcade from '../../assets/ArcadeGames/arcade.mp4';
import arcade_pong from '../../assets/ArcadeGames/arcade_pong.png';
import arcade_snake_title from '../../assets/ArcadeGames/arcade_snake_title.png';
import arcade_snake from '../../assets/ArcadeGames/arcade_snake.png';
import arcade_flappybird_title from '../../assets/ArcadeGames/arcade_flappybird_title.png';
import arcade_flappybird from '../../assets/ArcadeGames/arcade_flappybird.png';
import arcade_minesweeper_easy from '../../assets/ArcadeGames/arcade_minesweeper_easy.png';
import arcade_minesweeper_hard from '../../assets/ArcadeGames/arcade_minesweeper_hard.png';

// FlexboxIO imports
import align_content from '../../assets/FlexboxIO/align_content.png';
import align_items from '../../assets/FlexboxIO/align_items.png';
import align_self from '../../assets/FlexboxIO/align_self.png';
import flex_shrink from '../../assets/FlexboxIO/flex_shrink.png';
import justify_content from '../../assets/FlexboxIO/justify_content.png';
import navbar from '../../assets/FlexboxIO/navbar.png';
import FlexBoxIO from '../../assets/FlexboxIO/FlexBoxIO.mp4';
import FlexBoxIO_main from '../../assets/FlexBoxIO/FlexBoxIO_main.png';

// TarotDeck
import dashboard from '../../assets/TarotDeck/dashboard.png';
import newReading from '../../assets/TarotDeck/newReading.png';
import reading from '../../assets/TarotDeck/reading.png';
import settings from '../../assets/TarotDeck/settings.png';
import tarot_deck_video from '../../assets/TarotDeck/tarot_deck.mp4';
import tarot_deck_main from '../../assets/TarotDeck/tarot_deck_main.png';

//NoteTakerIO
import clean_note from '../../assets/NoteTakerIO/clean_note.png';
import hello_note from '../../assets/NoteTakerIO/hello_note.png';
import new_note from '../../assets/NoteTakerIO/new_note.png';
import notetakerIO from '../../assets/NoteTakerIO/notetakerIO.mp4';

// SocialNetworkIO
import All_thoughts from '../../assets/SocialNetworkIO/All_thoughts.png';
import all_users from '../../assets/SocialNetworkIO/all_users.png';
import create_new_thought from '../../assets/SocialNetworkIO/create_new_thought.png';
import socialNetworkIO_main from '../../assets/SocialNetworkIO/socialNetworkIO_main.png';
import socialNetworkIO_mp4 from '../../assets/SocialNetworkIO/socialNetworkIO.mp4';

// SortingAlgorithm
import Bubble_Sort from '../../assets/SortingAlgorithm/Bubble_Sort.png';
import Insertion_Sort from '../../assets/SortingAlgorithm/Insertion_Sort.png';
import Small_Quick_Sort from '../../assets/SortingAlgorithm/Small_Quick_Sort.png';
import Wave from '../../assets/SortingAlgorithm/Wave.png';
import sorting_algorithm_visualizer from '../../assets/SortingAlgorithm/sorting_algorithm_visualizer.mp4';
import sorting_algorithm_visualizer_main from '../../assets/SortingAlgorithm/sorting_algorithm_visualizer_main.png';

const cardData = [
    {
        id: 1,
        title: 'TarotDeck',
        subtitle: 'Embrace Clarity: Tarot Card Readings Made Simple',
        description:
            'Embark on a journey of reflection and fun with the Tarot Deck app—a digital twist on the ancient practice of tarot readings. Our app offers users a unique opportunity to explore various tarot spreads, delve into the meanings of the cards, and gain personal insights, all with a touch of a button.',
        image: tarot_deck_main,
        role: 'Co-Founder',
        what: 'As a Software Engineer at ThirdStack Solution I worked on a tarot reading app. I lead backend development and integrate technologies such as React, Vue.js, and GraphQL. I have contributed to approximately one-third of the project while playing a key role in project management and overall direction.',
        completed: false,
        favorited: true,
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
        video: tarot_deck_video,
        language: 'GraphQL / AWS / JS / React',
        link: 'https://github.com/AndreaRene/tarot-application',
        linkType: 'Repository',
    },
    {
        id: 2,
        title: 'Arcade Games',
        subtitle: 'Classic and Modern Arcade Games',
        description:
            'This Phaser arcade game app combines classic games—Pong, Snake, Flappy Bird, and Minesweeper—into one platform. With smooth animations and responsive controls, it recreates the retro gaming experience while using modern web technologies for seamless play.',
        image: arcade_main,
        role: 'Founder & Developer',
        what: `I developed core gameplay mechanics, integrated Phaser\'s physics engine, and handled state management for each game. I worked on user input, designed responsive controls, and optimized game performance for smooth gameplay.`,
        completed: false,
        favorited: true,
        imageArray: [
            {
                path: arcade_pong,
                alt: 'Pong',
            },
            {
                path: arcade_snake_title,
                alt: 'Snake Title',
            },
            {
                path: arcade_snake,
                alt: 'Snake',
            },
            {
                path: arcade_flappybird_title,
                alt: 'Flappybird Title',
            },
            {
                path: arcade_flappybird,
                alt: 'Flappybird',
            },
            {
                path: arcade_minesweeper_easy,
                alt: 'Minesweeper Easy',
            },
            {
                path: arcade_minesweeper_hard,
                alt: 'Minesweeper Hard',
            },
        ],
        video: arcade,
        language: 'React / Vue / Phaser',
        link: 'https://github.com/josephpicardat/ArcadeGames',
        linkType: 'Repository',
    },
    {
        id: 3,
        title: 'Sorting Alogrithm Visualizer',
        subtitle: 'A simple sorting alogrithm visualizer',
        description:
            'A Sorting Algorithm Visualizer built with React, designed to visually demonstrate the process of various sorting algorithms, including Bubble Sort, Quick Sort, Merge Sort, Insertion Sort, and Heap Sort. Users can select an algorithm, shuffle the dataset, and watch as the bars representing data elements are sorted in real-time.',
        image: sorting_algorithm_visualizer_main,
        role: 'Founder & Developer',
        what: 'I built the Sorting Algorithm Visualizer in React, handling front-end design, algorithm integration, and visual feedback for algorithms like Bubble Sort and Quick Sort. I focused on creating smooth user interactions and optimizing performance for real-time sorting visualization.',
        completed: true,
        favorited: true,
        imageArray: [
            {
                path: Bubble_Sort,
                alt: 'Bubble Sort',
            },
            {
                path: Insertion_Sort,
                alt: 'Insertion Sort',
            },
            {
                path: Small_Quick_Sort,
                alt: 'Small Quick Sort',
            },
            {
                path: Wave,
                alt: 'Wave',
            },
        ],
        video: sorting_algorithm_visualizer,
        language: 'React / JS',
        link: 'https://josephpicardat.github.io/sorting_algorithm_visualizer/',
        linkType: 'Deployment',
    },
    {
        id: 4,
        title: 'Peace of Mind',
        subtitle: 'Mental Health Social Media App',
        description:
            'Peace of Mind is a website that will allow anyone with a need to connect to others regarding mental health and support. We provide a safe space for everyone to discuss their feelings without fear of retaliation.',
        image: peace_of_mind_main,
        role: 'Co-Founder',
        what: 'As a Co-Founder, I contributed primarily to the front-end development and some backend integration using GraphQL. This project, built with React, allowed me to design custom components and ensure seamless interaction between the front-end and back-end.',
        completed: true,
        favorited: true,
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
                path: full_about,
                alt: 'About Page',
            },
        ],
        video: peace_of_mind_video,
        language: 'React JS / GraphQL',
        link: 'https://peace-of-mind-app-v2.herokuapp.com/',
        linkType: 'Deployment',
    },
    {
        id: 5,
        title: 'FlexBoxIO',
        subtitle: 'A Flexbox Playground',
        description:
            'An react application that is designed to give the user an easy understanding of the properties of the flex container and flex items alike.',
        image: FlexBoxIO_main,
        role: 'Founder & Developer',
        what: 'I created "FlexBoxIO" using React, focusing on building an interactive environment for users to explore flexbox layouts. I developed real-time CSS adjustments for flex containers and items, simplifying the learning process with visual feedback and easy experimentation.',
        completed: true,
        favorited: false,
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
        video: FlexBoxIO,
        language: 'React JS',
        link: 'https://github.com/josephpicardat/FlexBoxIO',
        linkType: 'Repository',
    },

    {
        id: 6,
        title: 'RecipeIO',
        subtitle: 'Recipe Books',
        description:
            'Recipe IO is a application that uses mysql2 to store users recipes and recipe books.',
        image: recipeIO_main,
        role: 'Co-Founder',
        what: 'I handled backend development for RecipeIO, implementing MySQL2 to manage user recipes and recipe books. I focused on establishing efficient database structures and connections between tables, ensuring smooth data storage and retrieval for a seamless user experience.',
        completed: true,
        favorited: false,
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
        video: recipeIO,
        language: 'MYSQL / Handlebars / JS',
        link: 'https://github.com/josephpicardat/RecipeIO',
        linkType: 'Repository',
    },
    {
        id: 7,
        title: 'EmployeeIO',
        subtitle: 'Employee Management Terminal with MYSQL',
        description:
            'Your comprehensive solution for efficiently organizing and tracking employee data. Powered by MySQL, this intuitive terminal-based application offers seamless management of employee information, from departments and roles to individual employee details.',
        image: EmployeeIO_main,
        role: 'Founder & Developer',
        what: 'I developed EmployeeIO using Express, JavaScript, and MySQL to efficiently organize and track employee data. I focused on creating an intuitive terminal-based interface, handling database connections, and implementing CRUD operations for seamless employee management.',
        completed: true,
        favorited: false,
        imageArray: [
            {
                path: EmployeeIO,
                alt: 'Main Page',
            },
            {
                path: EmployeeIO_main,
                alt: 'Main Page',
            },
        ],
        video: EmployeeIO_mp4,
        language: 'MYSQL / JS',
        link: 'https://github.com/josephpicardat/EmployeeIO',
        linkType: 'Repository',
    },
    {
        id: 8,
        title: 'NoteTakerIO',
        subtitle: 'A Digital Notekeeper',
        description:
            '"Introducing NoteTakerIO, your go-to digital notekeeper for capturing, organizing, and accessing your thoughts effortlessly. With NoteTakerIO, you can seamlessly jot down new notes, update existing ones, and even remove notes you no longer need. Keep your ideas at your fingertips and revisit past notes with ease.',
        image: NoteTakerIO,
        role: 'Founder & Developer',
        what: 'I developed NoteTakerIO using Express and JavaScript to implement full CRUD functionality for managing notes. I focused on creating an intuitive user experience that allows users to add, update, and delete notes effortlessly, ensuring seamless note organization.',
        completed: true,
        favorited: false,
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
        video: notetakerIO,
        language: 'Express / JS',
        link: 'https://github.com/josephpicardat/NoteTakerIO',
        linkType: 'Repository',
    },
    {
        id: 9,
        title: 'SocialNetworkIO',
        subtitle: 'Your Backend Social Media Hub',
        description:
            'Welcome to SocialNetworkIO, your centralized backend solution for powering social media interactions. Built with NoSQL and Insomnia, SocialNetworkIO serves as the backbone for hosting your social media platform, handling user management, post creation, and comment interactions effortlessly.',
        image: socialNetworkIO_main,
        role: 'Founder & Developer',
        what: 'I built SocialNetworkIO using NoSQL and Insomnia to provide a robust backend for social media platforms. My focus was on implementing user management, post creation, and comment interactions, ensuring seamless integration for backend social media functionality.',
        completed: true,
        favorited: false,
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
        video: socialNetworkIO_mp4,
        language: 'NoSQL / JS',
        link: 'https://github.com/josephpicardat/SocialNetworkIO',
        linkType: 'Repository',
    },
];

export default cardData;
