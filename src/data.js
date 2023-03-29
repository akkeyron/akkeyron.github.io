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
    stacks: ["React", "Node", "Express"]
  },
  {
    id: 2,
    title: "React Hooks",
    image: IMG,
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    github: "https://github.com/akkeyron",
    demo: "https://github.com/akkeyron",
    stacks: ["React", "Node", "Express"]
  },
  {
    id: 3,
    title: "Machine Learning",
    image: IMG,
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    github: "https://github.com/akkeyron",
    demo: "https://github.com/akkeyron",
    stacks: ["React", "Node", "Express"]
  }
];

const skills = [
  {
    title: "React Reserve",
    list: ["React", "Node", "Express"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-1.gif",
  },
  {
    title: "React Reserve",
    list: ["React", "Node", "Express"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-1.gif",
  },
  {
    title: "React Reserve",
    list: ["React", "Node", "Express"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-1.gif",
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