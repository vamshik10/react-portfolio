const logotext = "VAMSHIK";
const face = require('./assets/images/portfolioimg.jpeg')
const a1 = require('./assets/images/asset1.jpg')
const a2 = require('./assets/images/asset2.jpg')
const a3 = require('./assets/images/asset3.png')



const meta = {
    title: "Vamshik Raju",
    description: "I’m Vamshik R data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Vamshik Raju",
    animated: {
        first: "I love coding.",
        second: "I design cool websites.",
        third: "I develop applications.",
    },
    description: "Adept in design and integration, complemented by an innate talent for intuitive problem-solving. Proficient in Java, Data Structures, and Algorithms, I am driven by an insatiable passion for exploring cutting-edge technologies and transforming novel ideas into reality.",
    your_img_url: face,
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "I am a dedicated student with a fervent eagerness for learning and exploration. Designing cool websites is what drives me, and I find inspiration in outdoor sports, biking, and traveling. My passion for creativity and adventure defines who I am. ",
};
const worktimeline = [
];

const skills = [{
        name: "HTML, CSS",
        value: 90,
    },
    {
        name: "JavaScript",
        value: 85,
    },
    {
        name: "Python",
        value: 70,
    },
    {
        name: "Angular",
        value: 60,
    },
    {
        name: "C/C++",
        value: 85,
    },
];

const services = [{
        title: "Phonebook System",
        description: "A C++ pplications that is efficient and faster in searching the contact information.\nSkills developed: DSA, C++, Problem Solving.",
    },
    {
        title: "Data Mining & Classification",
        description: "A Jupyter application that uses dtat minig methods to classify counterfeit banknotes.\nSkills developed: Python, Data Science, Jupyter.",
    },
    {
        title: "E-Commerce Web Application",
        description: "An web application that allows user to place, update, view and delete orders providing a user friendly interface and smooth trasaction.\nSkills developed: HTML, CSS, JS, MongoDB, ExpressJS, React, NOdeJS.",
    },
];

const dataportfolio = [{
        img: a1,
        description: "Full Stack Development Intern\n01/2023-02/2023",
        link: "https://www.varconstech.com/",
    },
    {
        img: a2,
        description: "Graphic Designer\n09/2021-11/2021",
        link: "https://humansforhumanity.online/",
    },
    {
        img: a3,
        description: "Web Designer Intern\n2020-2021",
        link: "#",
    }
];

const contactConfig = {
    YOUR_EMAIL: "vamshik.raju93@gmail.com",
    YOUR_FONE: "6366303563",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/vamshik10",
    facebook: "https://facebook.com/vamshikraju",
    linkedin: "https://linkedin.com/in/vamshik-raju-880748203/",
    twitter: "https://twitter.com/vamshikraju",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};