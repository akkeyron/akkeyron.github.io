import PROJECT1 from './assets/project1.png'
import PROJECT2 from './assets/project2.png'
import PROJECT3 from './assets/project3.png'

const works = [
  {
    name: "Intel",
    description: "I worked as Validation Engineer. My focus was on validating functionality of USB Type-C in FPGA environment. I sharpen my confidence in debugging skills, familiarity on linux environment"
  },
  {
    name: "Tata Consultancy Services (TCS)",
    description: "I worked with one of the client in TCS. My work is related to full stack development where I was responsible. I gained so much knowledge on web development, AWS services and software lifecycles. I'm familiar with agile methodology frameworks and Azure DevOps"
  },
  {
    name: "Self projects",
    description: "I did a few self projects on the side to improve my proficiency on other languages that I interested. I created chatting bots for Discord and Telegram, creating a simple web game in this website."
  }
];

const projects = [
  {
    id: 1,
    title: "Wedding Card Online",
    image: PROJECT1,
    overview:
      "Created an online wedding invitation card using React and AWS Lambda backend. It has RSVP submission and sending wish functionality. The data stored in dynamoDB",
    github: "https://github.com/akkeyron/wedding-card-template/tree/master",
    demo: "https://akkeyron.github.io/wedding-card-template/",
    stacks: ["React", "AWS Lambda", "DynamoDB"]
  },
  {
    id: 2,
    title: "Cat Clicker Game",
    image: PROJECT2,
    overview:
      "Created a cat clicker game using React and AWS Lambda backend. It has a cat image appears randomly to click to increase score. The data stored in dynamoDB for leaderboard",
    github: "https://github.com/akkeyron/cat-clicker",
    demo: "https://akkeyron.github.io/cat-clicker/",
    stacks: ["React", "AWS Lambda", "DynamoDB"]
  },
  {
    id: 3,
    title: "To do list Telegram Bot",
    image: PROJECT3,
    overview:
      "Developed a telegram bot that can be used to manage to do list. It has CRUD functionality and also supports multiple users and groups. The application runs in docker container on AWS EC2.",
    github: "https://github.com/akkeyron/telegram-bot-todolist/tree/mongodb",
    demo: "https://t.me/akkeyron_bot",
    stacks: ["AWS EC2", "Docker", "MongoDB"]
  }
];

const skills = [
  {
    title: "Web Development",
    list: ["React", "Python Flask", "CSS", "NodeJS", "TypeScript"],
    description:
      "Experienced in full stack development in current work. Developed features aligned with specific business requirements, ensuring the application meets the unique needs of the client.",
    image: "./project-1.gif",
  },
  {
    title: "Cloud Services",
    list: ["S3 Web Hosting", "AWS Lambda", "Servesless framework", "DynamoDB"],
    description:
      "Harnessing the power of serverless computing, and leveraging event driven application. Experienced in building efficient, secure, and scalable serverless applications.",
    image: "./project-1.gif",
  },
  {
    title: "Others",
    list: ["Azure DevOps Pipeline", "Agile Methodology", "Git"],
    description:
      "Experienced in agile work practice. Utilizing Github and Azure DevOps to configure efficient CI/CD pipelines that facilitate seamless integration and continuous delivery of software and applications.",
    image: "./project-1.gif",
  },
];


export { projects, skills, works }