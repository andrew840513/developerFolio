﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Andrew Chen",
  title: "Hi I'm Andrew",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1rZd-SBd03zkfAvC3Pj-AhDS16uoegpyH/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/andrew840513",
  linkedin: "https://www.linkedin.com/in/che-an-andrew-chen/",
  gmail: "andrew84051395@gmail.com"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "centos",
      fontAwesomeClassname: "fab fa-centos"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "50%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Boltz Technology",
      companylogo: require("./assets/images/boltz.png"),
      date: "10/2019 - 02/2020",
      desc: "Power-bank sharing",
      descBullets: [
        "Worked on front end WeChat mini program, iOS and Android flutter project.",
        "WeChat mini program: convert old code to highly reusable code and switch from ES5 to ES6.",
        "Build iOS and Android app using Flutter."
      ],
      productName: "Boltz App",
      productLink: "https://apps.apple.com/us/app/boltz/id1494273736"
    },
  ],
  volunteer: [
    {
      role: "Assistant Backend Developer",
      company: "Pick a Dish",
      companylogo: require("./assets/images/pick_a_dish.png"),
      date: "02/2019 - 04/2019",
      desc: "A personalized food concierge",
      descBullets: [
        "Backend search function, integrate with food delivery services.",
        "Crawler script to claw through different restaurant menu."
      ]
    },
    {
      role: "IT Specialist",
      company: "Heaven Bridge Church",
      companylogo: require("./assets/images/heavenbridge.png"),
      date: "04/2014 - Present,",
      descBullets: [
        "projection slide",
        "computer troubleshooting",
        "weekly publication church bulletin."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  title: 'Open Source Project',
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "andrew840513", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "Some companies that I helped to create their tech",
  projects: [
    {
      title: "Price Compare Crawler",
      image: require("./assets/images/projectSteal.png"),
      link: "http://mren.website/"
    },
    {
      title: "Boltz App(iOS)",
      image: require("./assets/images/boltzApp.png"),
      link: "https://apps.apple.com/us/app/boltz/id1494273736"
    },
    {
      title: "Boltz App(Android)",
      image: require("./assets/images/boltzApp.png"),
      link: "https://play.google.com/store/apps/details?id=com.boltzcharge.boltz_app&hl=en_US"
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learned.",

  blogs: [

  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all!",
  email_address: "andrew84051395@gmail.com"
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, blogSection, contactInfo};
