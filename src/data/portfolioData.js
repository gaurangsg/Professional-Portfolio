// ============================================================
// portfolioData.js — Centralized configuration for Gaurang Sangle's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================
import BittyBites from "../assets/about/BittyBites.png";
import SKillConnect from "../assets/about/SkillConnect.png";
import SmartTrack from "../assets/about/SmartTrack.png";
import Resume from "../assets/about/GAURANG SANGLE.pdf";

export const personalInfo = {
  name: "GAURANG SANGLE",
  firstName: "GAURANG SANGLE",
  brandName: "SG GAURANG",
  title: "Full Stack & Java Developer",
  location: "Navapur , India",
  phone: "+91 9096001994",
  emails: {
    primary: "gaurangsangle2325@gmail.com",
    secondary: "gaurangsangle2223@gmail.com",
  },
  summary:
    "Software engineer and B.Tech Computer Science graduate with solid skills in Java, Spring Boot, React, and Python. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: Resume,
};

export const socialLinks = {
  github: "https://github.com/gaurangsg",
  linkedin: "https://linkedin.com/in/gaurangsangle/",
  instagram: "https://instagram.com/gaurxxn.code",
  whatsapp: "https://wa.me/9096001994?text=Hi%20Gaurang,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect",
};

export const heroContent = {
  greeting: "Hi, I'm GAURANG SANGLE",
  titleHighlight: "Full Stack & Java Developer",
  subtitle:
    "I build fast, scalable applications using Java, Spring Boot, MERN Stack, and Python.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "https://wa.me/9096001994?text=Hello%20Gaurang,%20Your%20portfolio%20and%20work%20stood%20out%20to%20us.%20We'd%20like%20to%20discuss%20a%20potential%20collaboration%20and%20explore%20how%20your%20skills%20could%20contribute%20to%20our%20team.%20Please%20let%20us%20know%20a%20convenient%20time%20to%20connect.",
  },
  ctaResume: { text: "Download Resume", href: Resume },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">GAURANG SANGLE</span>, a software engineer based in Navapur, India, dedicated to crafting clean, functional, and highly scalable full-stack applications.My expertise spans the MERN stack (MongoDB, Express.js, React, and Node.js), Java FSD, Python & AI/ML, SQL, and Object-Oriented Programming (OOP), enabling me to develop scalable applications and solve complex real-world problems efficiently. I have hands-on experience building responsive, user-centric web applications using modern technologies while focusing on clean architecture, performance, scalability, and security. `,
  techStack: ["Java", "Spring Boot", "MERN Stack" , "Python" , "AI/ML"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "Python", level: 75 },
        { name: "Perl", level: 95 },
        { name: "Dart", level: 78 },
        { name: "Assembly", level: 80 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "Java FSD", level: 95 },
        { name: "Next.js Full Stack", level: 90 },
        { name: "Python FSD", level: 92 },
        { name: "XAMPP Stack", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 },
        {name: "Hibernate", level: 85 },
        { name: "Microservices", level: 82 },
        { name: "WebSockets", level: 78 },
        { name: "Maven", level: 90 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Firebase Firestore", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "MariaDB", level: 85 },
        { name: "Cassandra", level: 80 },
        { name: "DynamoDB", level: 85 },
        { name: "Database Design", level: 90 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "n8n", level: 82 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Antigravity", level: 80 },
        { name: "Jira", level: 85 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "CS and DSA ",
      skills: [
        { name: "System Design", level: 80 },
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Operating Systems", level: 83 },
        { name: "Computer Networks", level: 82 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "PROJECTS & SERVICES",
  heading: "Where INNOVATION Meets ENGINEERING EXCELLENCE",
  description: "Explore a collection of full-stack applications, backend solutions, and intelligent software built to address real-world challenges through modern technologies, scalable architectures, and clean development practices.",
  categories: [
    {
      title: "Chandrayaan 3 Website",
      description: "Developed an informative and visually engaging tribute website dedicated to ISRO's Chandrayaan-3 mission, highlighting its journey, scientific objectives, and achievements.",
      stats: "PROJECT SOLD",
      icon: "🚀"
    },
    {

      title : "SHREYA : AI WOMEN'S SAFETY SYSTEM",
      description: "An AI-powered women’s safety platform featuring emergency SOS alerts, real-time live location sharing, trusted guardian notifications, nearby emergency contacts assistance for enhanced women security.",
       stats: "IN PROGRESS",
      icon : "🙅‍♀️"
    },
    {
      title: "ShopSphere : E commerce Webapp",
      description: "A full-stack e-commerce platform offering secure authentication, product browsing, online payments, order tracking, wishlist management, and a comprehensive admin dashboard.",
     stats: "PROJECT SOLD", 
      icon: "🛍️"
    },
    {
      title: "VenueVistas",
      description: "A venue booking platform for discovering, comparing, and reserving banquet halls, wedding venues, conference spaces, and party locations through a seamless booking experience.",
      stats: "Personal Projects",
      icon: "💸"
    },
     {
      title: "StaySync — Smart Room Rental Platform",
      description: "A smart rental booking platform for discovering, comparing, and reserving verified apartments, PGs, and hostels with maps, real-time availability, and secure communication.",
      stats: "PROJECT SOLD",
      icon: "🏢"
    },
    {
  title: "NIRBHAYA AI : AI LEGAL ASSISTANT",
  description: "A smart legal assistance platform providing accessible legal information, document interpretation, citizen rights guidance, and AI-powered support for those seeking affordable justice.",
  stats: "PROJECT SOLD",
  stats: "AI PROJECT",
  icon: "⚖️"
}
  ]
};

// Brand New Leadership Data
export const leadershipList = [
   {
  title: "CODASTRA Coding Club",
  description: "Co-founded RCPIT's first coding club, leading workshops, hackathons, and technical events that empowered 500+ students while mentoring developers and fostering collaboration across multiple colleges.",
  role: "Coordinator of Events",
  badge: "Co-FOUNDER"
  },
  {
    title: "IEEE GOOGLER (Social Media Team)",
    description: "Managed and coordinated digital content, driving audience engagement and designing interactive visual campaigns for RCPIT's tech events.",
    role: "Social Media Coordinator",
    badge: "TEAM LEAD"
  },
  {
    title: "5-Day MOE IDE Bootcamp, Roorkee",
    description: "Completed an intensive Innovation, Design, and Entrepreneurship Bootcamp at IIT Roorkee under the Ministry of Education, developing a multidisciplinary approach to innovation, product design, and transformative problem-solving.",
    role: "Bootcamp Graduate",
    badge: "Innovation"
  },
  {
    title: "Event Coordinator & Anchoring – SPANDAN 2K24",
    description: "Spearheaded event coordination and captivated large audiences as the lead stage anchor, combining confident public speaking with meticulous execution to deliver a seamless summit experience.",
    role: "Stage Anchor & Coordinator",
    badge: "ANCHOR"
  }
];

// Brand New Internships Data
export const internshipsList = [
   {
    organization: "Symbiosys Technologies",
    role: "Full Stack Development Intern",
    duration: "Jan 2025 - March 2025",
    skills: ["Full Stack Development", "Java", "API Integration", "Responsive Design"],
    tech: ["React.js", "Java", "JavaScript", "Hibernate", "MongoDB", "Tailwind CSS"]
  },
  {
    organization: "Netlink",
    role: "Data Analytics & BI Tools Intern",
    duration: "June 2025 - August 2025",
    skills: ["Data Analytics", "Business Intelligence", "Dashboard Design", "Data Modeling"],
    tech: ["Lumenore", "MySQL", "Excel", "BI Tools"]
  },
  {
    organization: "CollegeTips.in",
    role: "Web Development Intern",
    duration: "1 Month",
    skills: ["Frontend Development", "Responsive Layouts", "API Testing", "Web Performance"],
    tech: ["MERN", "NEXT.js", "JavaScript", "Tailwind CSS"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "BittyBites",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Bitty-Bites : Food Ordering Webapp",
     image: BittyBites,
    description:
      "Bitty Bites — A full-stack food ordering and restaurant management web application designed for the local Bitty Bites restaurant. It enables customers to explore the menu, place online orders, and enjoy a seamless ordering experience, while providing the restaurant with an efficient platform to manage products, orders, and customer interactions. Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with responsive UI, secure authentication, and a user-friendly ordering workflow.",
    techTags: [
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/gaurangsg/Bitty-Bites/",
      demo: "https://bittybites.vercel.app/",
    },
    isFlagship: true,
  },
  {
    id: "Skill Connect",
    number: "02",
    badge: null,
    title: "Skill Connect : The Skilled Marketplace",
    image: SKillConnect,
    description:
      " SkillConnect — A full-stack service marketplace web application that connects users with skilled professionals such as electricians, plumbers, carpenters, painters, and other local service providers. It enables users to quickly discover trusted workers, explore their profiles, and request services through an intuitive and responsive platform, while allowing professionals to showcase their skills and manage their service listings. Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with secure authentication, role-based access control, responsive design, and efficient search and booking workflows.",

    techTags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    links: {
      github: "https://github.com/gaurangsg/SkillConnect",
      frontendDemo: "https://skill-connect-one.vercel.app/",

    
     // backendApi: "https://karigar-zny2.onrender.com",
      
    },
    isFlagship: false,
  },
  {
    id: "MGNREGA ATTENDANCE TRACKING TOOL",
    number: "03",
    badge: "🚀 Flagship Project",
    title: "MGNREGA ATTENDANCE TRACKING TOOL",
    image: SmartTrack,
    description:
      "An AI-powered face recognition attendance system designed to streamline and automate the process of tracking attendance. The system integrates with a Django backend, uses OpenCV for real-time face detection, and provides a user-friendly dashboard for monitoring and reporting attendance data.",
    techTags: ["React", "Node.js", "JavaScript", "MongoDB","AI/ML", "REST API" , "Google Firebase", "PostMan API"],
    links: {
      github: "https://github.com/gaurangsg/SMART-TRACK-A-Group-Photo-Based-Attendance-Tracking-Tool", // Update when available
    },
    isFlagship: true,
  },
];

export const certificates = {
  featured: [
    {
      name : "Bussiness Intelligence using PowerBI",
      issuer : "Skill Nation",
      icon :"↗️",

    },
    {
      name : "Transform Techniques for Enginners",
      issuer : "NPTEL",
      icon : "⚙️",

    },
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Java & Advanced Java",
      issuer: "NPTEL",
      icon: "☕",
    },
    {
      name: "Python and Data Visualization",
      issuer: "FreeCodeCamp",
      icon: "⚙️",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte",
      icon: "💼",
    },
    {
      name: "Fundamentals of BI & Analytics",
      issuer: "Lumenore",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/drive/folders/1Ocn7UdLzXOUo_X36Zs7m0_14eu0DWksB?usp=drive_link",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "R.C. Patel Institute of Technology , Shirpur",
  graduation: "2025",
  twelfth: "HSC  – 89%",
  tenth: " SSC – 90%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Java · Spring Boot · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE · INTERN |Symbiosys",
  copyright: `© ${new Date().getFullYear()} SG GAURANG | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};