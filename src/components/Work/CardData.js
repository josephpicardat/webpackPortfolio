const cardData = [
    {
        id: 1,
        title: 'Peace of Mind',
        subtitle: 'Mental Health Social Media App',
        description:
            'Peace of Mind is a website that will allow anyone with a need to connect to others regarding mental health and support. We provide a safe space for everyone to discuss their feelings without fear of retaliation.',
        image: () => import('../../assets/PeaceofMindV2/peaceOfMindv2.png'),
        imageArray: [
            {
                path: () =>
                    import('../../assets/PeaceofMindV2/full_landing.png'),
                alt: 'Landing Page',
            },
            {
                path: () =>
                    import('../../assets/PeaceofMindV2/full_signup.png'),
                alt: 'SignUp Page',
            },
            {
                path: () =>
                    import('../../assets/PeaceofMindV2/full_dashboard.png'),
                alt: 'Dashboard Page',
            },
            {
                path: () =>
                    import('../../assets/PeaceofMindV2/full_community.png'),
                alt: 'Community Page',
            },
            {
                path: () =>
                    import('../../assets/PeaceofMindV2/full_single_post.png'),
                alt: 'Single Post',
            },
            {
                path: () =>
                    import('../../assets/PeaceofMindV2/full_post_comments.png'),
                alt: 'Post with comments',
            },
            {
                path: () =>
                    import('../../assets/PeaceofMindV2/x43_post_comment.png'),
                alt: 'Post Comment Page',
            },
            {
                path: () => import('../../assets/PeaceofMindV2/x43_about.png'),
                alt: 'About Page',
            },
        ],
        language: 'React JS / GraphQL',
        link: 'https://github.com/josephpicardat/Peace-Of-Mind_V2',
        linkType: 'Repository',
    },
    {
        id: 2,
        title: 'RecipeIO',
        subtitle: 'Recipe Search Engine',
        description:
            'Recipe IO is a application that uses mysql2 to store users recipes and recipe books.',
        image: () => import('../../assets/recipeIO.png'),
        imageArray: [
            {
                path: () => import('../../assets/RecipeIO/MainMenu.png'),
                alt: 'Login Page',
            },
            {
                path: () => import('../../assets/RecipeIO/Recipe.png'),
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
        image: () => import('../../assets/gifter.png'),
        imageArray: [
            {
                path: () => import('../../assets/Gifter/preview.png'),
                alt: 'Example Reminder',
            },
            {
                path: () => import('../../assets/Gifter/gifter.png'),
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
        image: () => import('../../assets/flexboxIO.png'),
        imageArray: [
            {
                path: () => import('../../assets/FlexboxIO/align_content.png'),
                alt: 'Align Content Page',
            },
            {
                path: () => import('../../assets/FlexboxIO/align_items.png'),
                alt: 'Align Items Page',
            },
            {
                path: () => import('../../assets/FlexboxIO/align_self.png'),
                alt: 'Align Self Page',
            },
            {
                path: () => import('../../assets/FlexboxIO/flex_shrink.png'),
                alt: 'Flex Shrink Page',
            },
            {
                path: () =>
                    import('../../assets/FlexboxIO/justify_content.png'),
                alt: 'Justify Content Post',
            },
            {
                path: () => import('../../assets/FlexboxIO/navbar.png'),
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
        image: () => import('../../assets/TarotDeck.png'),
        imageArray: [
            {
                path: () => import('../../assets/TarotDeck/dashboard.png'),
                alt: 'Dashboard',
            },
            {
                path: () => import('../../assets/TarotDeck/newReading.png'),
                alt: 'New Tarot Reading',
            },
            {
                path: () => import('../../assets/TarotDeck/reading.png'),
                alt: 'Previous Readings',
            },
            {
                path: () => import('../../assets/TarotDeck/settings.png'),
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
        image: () => import('../../assets/EmployeeIO.png'),
        imageArray: [
            {
                path: () => import('../../assets/EmployeeIO.png'),
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
        image: () => import('../../assets/NoteTakerIO.png'),
        imageArray: [
            {
                path: () => import('../../assets/NoteTakerIO/clean_note.png'),
                alt: 'Clean Note',
            },
            {
                path: () => import('../../assets/NoteTakerIO/hello_note.png'),
                alt: 'Hello Note',
            },
            {
                path: () => import('../../assets/NoteTakerIO/new_note.png'),
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
        image: () => import('../../assets/SocialNetworkIO.png'),
        imageArray: [
            {
                path: () =>
                    import('../../assets/SocialNetworkIO/All_thoughts.png'),
                alt: 'All thoughts',
            },
            {
                path: () =>
                    import('../../assets/SocialNetworkIO/all_users.png'),
                alt: 'All users',
            },
            {
                path: () =>
                    import(
                        '../../assets/SocialNetworkIO/create_new_thought.png'
                    ),
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
        image: () => import('../../assets/Readme_Generator.png'),
        imageArray: [
            {
                path: () => import('../../assets/Readme_Generator.png'),
                alt: 'ReadME Generator',
            },
        ],
        language: 'Inquirer / JS',
        link: 'https://github.com/josephpicardat/README-Generator',
        linkType: 'Repository',
    },
];

export default cardData;
