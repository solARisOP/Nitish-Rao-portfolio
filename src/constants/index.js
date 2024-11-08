import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import { 
    SiLeetcode,
    SiGeeksforgeeks,
    SiCodingninjas
 } from "react-icons/si";

export const HERO_CONTENT = `Hello! I am a dedicated and aspiring software developer eager to make my mark in the tech industry. With a strong foundation in fullstack development, proficiency in node and python, I'm ready to contribute to impactful projects. Software developement and problem solving are the things that keep me excited and the eagerness to learn more of it and improve more so I can build better products and solve bigger and solve more complex problems.`;

export const EXPERIENCES = [
    {
        year: "2024 Feb - 2024 Sept",
        role: "Full Stack Developer trainee",
        company: "Cuvette",
        description: `developed web applications using JavaScript, React.js, Express.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.`,
        technologies: ["Javascript", "React.js", "Node.js", "Express.js", "mongoDB"],
    }
];

export const CODING = [
    {
        name : 'Leetcode',
        description : 'Solved 400+ problems on DSA',
        link : "https://leetcode.com/u/solARis_OP/",
        logo : SiLeetcode,
        color : 'text-yellow-500'
    },
    {
        name : 'Geeksforgeeks',
        description : 'Solved 200+ problems on DSA',
        link : "https://www.geeksforgeeks.org/user/nitishraosnr2001/",
        logo : SiGeeksforgeeks,
        color : 'text-green-500'
    },
    {
        name : 'Coding ninjas',
        description : 'Solved 100+ problems on DSA',
        link : "https://www.naukri.com/code360/profile/solARis",
        logo : SiCodingninjas,
        color : 'text-orange-500'
    }
]

export const EDUCATION = [
    {
        year: "2019 - 2023",
        degree: "Bachelor of technology",
        field: "Computer Science Engineering",
        institute: 'Siliguri Institute of technology (SIT), siliguri',
        score: "8.65 CGPA"
    },
    {
        year: "2016 - 2018",
        degree: "Higher secondary",
        field: "Science",
        institute: 'Sri Chaitanya, vijayawada',
        score: "89.9%"
    },
]

export const PROJECTS = [
    {
        title: "Cinevista",
        image: project1,
        subtitle: "Video Streaming Website",
        description:
        `Developing a streaming platform somewhat like youtube, with video viewing and uplading features.
        Authentication is done through email otp or google auth.
        Inegrated features like channel, subscribers and playlist.
        Authenticated users can upload videos which will be done through s3 presigned urls.
        Uploaded videos will then be polled via a poller in aws and if a video is uploaded in s3 than the poller, spins a docker container which than downloads the video and then preprocess it through ffmpeg library and segments it and than reuploads all the versions like 240p and 1080p etc to another s3 bucket.
        The index.m3u8 file link is saved in the db, through which the video can be stramed via videojs in html
        Users can like and comment on videos
        All the fetching of data is done through express RESTfull Api`,
        technologies: ["Javascript", "React.js", "Node.js", "Express.js", "Google Authentication", "Tailwind", "Docker", "FFmpeg", "AWS s3", "MongoDB", "Mongoose"],
        code : "https://github.com/solARisOP/video-stream",
    },
    {
        title: "We-log",
        image: project2,
        subtitle: "Fully Functional Blogging Platform",
        description:
            `Developed a website in which users can post and view blogs with like and commenting features.
            Authentication in done through email otp verification. 
            Integrated progile feature, where authticated users can create there own profile with profile picture and information.
            Users can follow other fellow users on this platform.
            Images uploaded by user are saved in s3 bucket.
            Leveraged TinyMCE editor for writing and editing blogs. Users can fully customise there blogs by integrating images, code blocks and etc.`,
        technologies: ["Python", "Django", "Javascript", "Html", "Bootstrap Css", "Email Authentication", "PostgreSQL", "Django ORM", "AWS s3"],
        code : "https://github.com/solARisOP/we-log",
        deploy : "https://we-log.vercel.app"
    },
    {
        title: "Shlok",
        image: project3,
        subtitle: "Deep learning medical chatbot",
        description:
            `Appointment Management: Users can book, update, and delete appointments seamlessly.
            Feedback System: Gather feedback from users about their past hospital visits.
            Symptom-Based Doctor Recommendations: Shlok recommends specific doctors based on user-entered symptoms using the Gemini API, LLM, and LangChain.
            BERT Model for Intent Recognition: Integrate a fine-tuned BERT model using TensorFlow and Keras for recognizing user intents.`,
        technologies: ["Python", "Django", "BERT", "Deep Learning", "Tensorflow", "Keras", "Langchain", "Javascript", "Html", "Css", "Mysql", "Django ORM"],
        code : "https://github.com/solARisOP/shlok",
        deploy : "https://shlok-chikitsa.vercel.app"
    },
    {
        title: "Pro Manage",
        image: project4,
        subtitle: "Task Management come todo App",
        description:
            `Authenticated users can create, update, view, delete and share tasks.
            Anonymous users can view shared tasks.
            Each task contain some todos which can be marked and unmarked.
            Users can assign tasks to other fellow users and and unassign them.
            Assigned users have full access over the task and can delete and update task.
            Users can directly assign all there tasks to a single user by entering their email`,
        technologies: ["Javascript", "React.js", "Node.js", "Express.js", "mongoDB"],
        code : "https://github.com/solARisOP/Pro-Manage-client",
        deploy : "https://pro-manage-client-aitu.onrender.com/"
    },
    {
        title: "Stories",
        image: project5,
        subtitle: "Story (image/video) posting website",
        description:
            `Authenticated users can create, update, view and share stories.
            Anonymous users can view shared stories.
            Users can like and bookmark stories.
            Users can upload image/videos for stories, videos cannot be longer than 15 secs.
            Stories can be filtered based on there categories`,
        technologies: ["Javascript", "React.js", "Node.js", "Express.js", "mongoDB"],
        code : "https://github.com/solARisOP/stories",
        deploy : "https://stories-91jl.onrender.com"
    },
    {
        title: "Quizzie",
        image: project6,
        subtitle: "fully functional Quiz platform",
        description:
            `Authenticated users can create, update, view and share quizes.
            Anonymous users can take quizes and the data will be shared to the backend of there quiz activity even if they abort the quiz before hand.
            Authenticated users can view stats of there created quizes like how many people have take there quizes and right and wrong answers.
            There are basically two types of quizes mcq and poll type quizes.`,
        technologies: ["Javascript", "React.js", "Node.js", "Express.js", "mongoDB"],
        code : "https://github.com/solARisOP/Quizee-Server",
        deploy : "https://quizzie-client-s556.onrender.com/"
    },
    {
        title: "Image Classification",
        image: project7,
        subtitle: "indian cricketer image recognition project",
        description:
            `Created in jupyter notebook via neural networks and machine learning.
            Used publically avaliable images for dataset
            Classification is done for 12 outcomes(only tweleve players)
            Used Tensorflow and keras api for data cleaning and neural network processing`,
        technologies: ["Python", "Image classification", "Machine learning", "Tensorflow", "Numpy", "Pandas", "Neural Networks"],
        code : "https://github.com/solARisOP/Machine-Learning/tree/master/proj_final/image%20classification"
    },
    {
        title: "Real Estate price predictor",
        image: project8,
        subtitle: "Bengaluru Real Estate Price prediction",
        description:
            `Used a publically avaliable bengaluru real estate dataset
            Model score is 85% which predicts price of a home if we enter its featires like number of room, paking and size and etc. features
            Cleaned the data and used numpy and pandas for restructuring it`,
        technologies: ["Python", "Machine learning", "Linear Regression", "Numpy", "Pandas"],
        code : "https://github.com/solARisOP/Machine-Learning/tree/master/proj_final/real%20estate%20price%20prediction"
    },
    {
        title: "Movie Library",
        image: project9,
        subtitle: "movie/shows details fetching and library collection platform",
        description:
            `Used OMD API for fetching data a content whose title is provided by user.
            Authenticated users can create libraries where they can keep collection of there movies
            Used Ejs for server side rendering and node as a runtime`,
        technologies: ["Javascript", "HTML", "CSS", "Ejs", "Express.js", "Node.js", "MongoDb"],
        code : "https://github.com/solARisOP/Movie",
        deploy : "https://fasal-movie-library-ic4c.onrender.com/"
    },
    {
        title: "Notes App",
        image: project10,
        subtitle: "Todo notes app",
        description:
            `A simple notes app where users can create sections and each sections have notes.
            Notes are saved in users browser's local storage`,
        technologies: ["Javascript", "React.js", "Local Storage", "Tailwind"],
        code : "https://github.com/solARisOP/Notes-App",
        deploy : "https://notes-app-six-beryl.vercel.app/"
    },
];

export const CONTACT = {
    address: "Titagarh, kolkata, 700119 ",
    phoneNo: "+91 9330541212",
    email: "nitishraosnr2001@gmail.com",
};
