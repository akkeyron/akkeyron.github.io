import IMG from './assets/logo512.png'

const links = [
  {
    name: "Home",
    path: '/'
  },
  {
    name: "Game",
    path: '/game'
  }
]

const works = [
  {
    name: "Intel",
    description: "I worked as Validation Engineer. My focus was on validating functionality of USB Type-C in FPGA environment. \
     I sharpen my confidence in debugging skills, familiarity on linux environment"
  },
  {
    name: "Tata Consultancy Services (TCS)",
    description: "I worked with one of the client in TCS. My work is related to full stack development where I was responsible. \
     I gained so much knowledge on web development, AWS services and software lifecycles. I'm familiar with agile methodology frameworks \
     and Azure DevOps"
  },
  {
    name: "Self projects",
    description: "I did a few self projects on the side to improve my proficiency on other languages that I interested. \
     I created chatting bots for Discord and Telegram, creating a simple web game in this website."
  }
];

const projects = [
  {
      id: 1,
      title: "Discord Bot and NoSQL",
      image: IMG,
      overview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      github: "https://github.com/akkeyron",
      demo: "https://github.com/akkeyron",
      stacks: ["NodeJS", "MongoDB", "Docker"],
  },
  {
      id: 2,
      title: "Telegram bot",
      image: IMG,
      overview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      github: "https://github.com/akkeyron",
      demo: "https://github.com/akkeyron",
      stacks: ["Python", "AWS Lambda", "Docker"],
  },
  {
      id: 3,
      title: "Web clicker game",
      image: IMG,
      overview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      github: "https://github.com/akkeyron",
      demo: "https://github.com/akkeyron",
      stacks: ["Typescript", "Serverless", "Lambda"],
  },
];

const skills = [
  {
    title: "React Reserve",
    subtitle: "MERN Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-1.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-2.gif",
    link: "https://reedbarger.com",
  },
  {
    title: "DevChat",
    subtitle: "React and Firebase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-3.gif",
    link: "https://jsbootcamp.com",
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-4.gif",
    link: "https://pythonbootcamp.com",
  },
];

const testimonials = [
  {
    name: "React Reserve",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: IMG,
  },
  {
    name: "React Tracks",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: IMG,
  },
  {
    name: "DevChat",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: IMG,
  },
  {
    name: "Epic Todo App",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: IMG,
  },
];

export { links, projects, skills, testimonials, works }