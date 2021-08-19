import { faBitcoin, faGithub, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'


let resumeData = {
  "name": "Nick Theodoulou",
  "linkedinId":"Your LinkedIn Id",
  "skypeid": "Your skypeid",
  "roleDescription": `I'm a Full Stack Developer in the Utilities Industry. My expertise involves crafting websites, telling stories with data and combining the two to create unique web apps.`,
  "socialLinks":[
    {"name":"linkedin",
      "url":"https://www.linkedin.com/in/nickolastheodoulou/",
      "className":faLinkedin
    },
    {"name":"github",
      "url":"https://github.com/nickolastheodoulou",
      "className":faGithub
    },
    {"name":"medium",
      "url":"https://medium.com/@nickolastheodoulou",
      "className":faMedium
    },
    {"name":"instagram",
      "url":"https://www.instagram.com/nick_the_o/",
      "className": faInstagram
    },
    {"name":"bitcoin",
    "url":"https://coinrequest.io/request/6nuwTyHRmOkK73M/",
    "className":faBitcoin
    },
    // {"name":"envelope",
    //   "url":"mailto:nickolastheodoulou@hotmail.com?subject=Question For Nick Theodoulou",
    //   "className": faEnvelope
    // }
  ],

  "aboutme":{"paragraph1": "I'm a Full Stack Developer. My background is in Theoretical Physics having completed my First Class masters in July 2018. I currently work full-time in the UK Water industry as a Full Stack Developer developing our proprietary billing software. For my role, I work across the full stack, from working on the front end build using React to improve the UX and UI to using PostgreSQL to add new data analysis tools in the backend. This provides our clients advanced data analysis tools to drive deep into the data and meaningful business solutions that would otherwise not be possible using traditional tools Such as Microsoft Excel. ",
    "paragraph2": "I’m constantly learning new tools and technologies, currently focusing on UX, UI and using AWS for back end web development. I’m a skilled in many areas of programming and design, having recently developed an interest in Crypto currencies, blockchain technologies and the programming language Solidity.\n",
    "paragraph3": "When I’m not developing, I spend my time reading, weightlifting and traveling. I enjoy visiting different parts of the world and experiencing the wide range of cultures the world has to offer."
  },
  "address":"London",
  "email":"<a href=\"mailto:someone@yoursite.com\">Email Us</a>",
  "education":[
    {
      "UniversityName":"Royal Holloway, University of London",
      "specialization":"MSci in Theoretical Physics ",
      "MonthOfPassing":"Sep. 2014 - ",
      "YearOfPassing":"Jun. 2018",
      "Achievements":"Awarded a First Class"
    }
  ],
  "work":[
    {
      "CompanyName":"Valytica",
      "specialization":"Full Stack Developer",
      "MonthOfLeaving":"Sep 2020 - ",
      "YearOfLeaving":"PRESENT",
      "Achievements1": "Designing, engineering and developing core products used by Valytica’s existing clients across the full stack using ReactJS,node,Postgres and GrapQL. Integration tests are written using Jest ensuring the new tools are reliable.",
      "Achievements2": "One example is a tool that allows us to send custom business insights, graphs and custom alerts via our application to provide key insights to various stakeholders.",
      "Achievements3": "Significant enhancements across the fullstack to one of our existing DataQuality tools turning it into a full product. It allows users to compare data sets (imported via sftp in our product) using custom SQL scripts ensuring data is accurate and updated. I focused on significant enhancements to the front‐end improving the UI and UX."
    },
    {
      "CompanyName":"Inflecto Media",
      "specialization":"Senior Technical Operations Executive",
      "MonthOfLeaving":"Dec 2019 - ",
      "YearOfLeaving":"Sep 2020",
      "Achievements1": "Lead on fraud detection. Constantly researching, analysing and removing fraudulent advertising traffic sources using both third-party tools and custom-built Python Scripts. This has saved thousands of dollars in advertising costs.",
      "Achievements2": "Hiring, training and supervising a Data Analyst Intern currently on a 12-month placement who has excelled at the role. This has enabled me to manage and produce long-term projects.",
      "Achievements3": "Took the lead role on Designing, engineering and developing a full-stack business insights platform on AWS for Inflecto Media using services such as EC2, S3, Athena and QuickSight."
    },
    {
      "CompanyName":"Inflecto Media",
      "specialization":"Technical Operations Executive",
      "MonthOfLeaving":"Dec 2018 - ",
      "YearOfLeaving":"Dec 2019",
      "Achievements1": "Streamlined manual reporting across numerous department from Microsoft Excel to a Business Insight Dashboard on AWS. Currently saving countless hours processing data allowing team members to focus on long term business strategies.",
      "Achievements2": "Conducting numerous training sessions to the wider team on numerous technical topics such as advertising tracking, mobile advertising attribution and mobile advertising fraud. This has given me extensive experience in explaining technical ideas to non-technical audiences.",
      "Achievements3": "Creating, maintaining and nourishing relationships with industry thought leaders that have improved our product."
    }
  ],
  "skillsDescription":" ",
  "skills":[
    {
      "skillname":"JavaScript",
      "experience":"90%"
    },
    {
      "skillname":"React",
      "experience":"90%"
    },
    {
      "skillname":"HTML",
      "experience":"90%"
    },
    {
      "skillname":"Node.js",
      "experience":"80%"
    },
    {
      "skillname":"CSS",
      "experience":"70%"
    },
    {
      "skillname":"Python",
      "experience":"70%"
    },
    {
      "skillname":"SQL",
      "experience":"65%"
    },
    {
      "skillname":"Docker",
      "experience":"50%"
    },
    {
      "skillname":"AWS",
      "experience":"50%"
    }
  ],
  "testimonials":[
    {
      "description":"This is a sample testimonial",
      "name":"Some technical guy"
    },
    {
      "description":"This is a sample testimonial",
      "name":"Some technical guy"
    }
  ]
  }

  export default resumeData
