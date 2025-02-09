const header = {
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'BM.',
}
const contact = {
  // all the properties are optional - can be left empty or deleted
  email: 'mountadembadr@gmail.com',
}


const about = {
  name: 'Badr MOUNTADEM',
  role: 'Full-Stack Java/Angular Web Engineer',
  description:
    'Seeking a first professional opportunity. Recent graduate with a State Engineer Degree in Computer Science, MIAGE Option. Experienced in database administration, web development, and AI software engineering through multiple internships.',
  resume: 'https://example.com', // Replace with actual resume link
  social: {
    linkedin: 'https://linkedin.com/in/mountadem-badr-36683',
    github: 'https://github.com', // Replace with actual GitHub profile if available
  },
}

const projects = [
  {
    name: 'Web GIS Application',
    description:
      'Developed a Web GIS Application using Java JEE, Spring MVC, PostgreSQL, PostGIS, and LeafLet.',
    stack: ['Java JEE', 'Spring MVC', 'PostgreSQL', 'PostGIS', 'LeafLet'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Web Banking Application',
    description:
      'Created a Web Banking Application using Java JEE, Spring, Angular, NRGX, Kafka, and Keycloak.',
    stack: ['Java JEE', 'Spring', 'Angular', 'NRGX', 'Kafka', 'Keycloak'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Cinematic Production Management UI',
    description:
      'Developed a Web User Interface for Cinematic Production Management using Java JEE, Spring Security, Angular, and ThymLeaf.',
    stack: ['Java JEE', 'Spring Security', 'Angular', 'ThymLeaf'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'Java JEE',
  'Spring (MVC, Security, Boot)',
  'Angular',
  'JavaScript',
  'Dotnet',
  'Python',
  'Oracle DBA1',
  'PostgreSQL',
  'MySQL',
  'Kafka',
  'MS Project',
  'Gantt',
  'PERT',
  'Modeling',
]
 // Add this after the skills const
 const experience = [
   {
     company: 'CBI',
     role: 'AI Software Engineer, Frontend Developer, Jira Administrator',
     date: 'February 5, 2024 - August 25, 2024',
     description: 'Worked on chatbot design, OCR application development, project management application development, and Jira project management.',
   },
   {
     company: 'Synthèse Conseil',
     role: 'Dotnet Developer',
     date: 'February 1, 2023 - April 18, 2023',
     description: 'Implemented an auction management system, including project planning, functional and technical analysis, modeling, and design.',
   },
   {
     company: 'Teal Technology Services (IBM & OCP JV)',
     role: 'Database Administrator',
     date: 'March 27, 2022 - September 26, 2022',
     description: 'Worked on the migration of a PostgreSQL database to Oracle, including project planning, functional and technical analysis, and writing specifications.',
   },
 ]

 // Don't forget to add experience to the export statement at the bottom of the file
 export { header, about, projects, skills, contact, experience }

