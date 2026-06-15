import { Project, SkillCategory, Education, Internship, Certificate, Achievement } from "./types";

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Sirisha Pyla",
    title: "AI & ML Enthusiast | Software Developer",
    tagline: "Building Intelligent Solutions Through Code and Innovation",
    avatarUrl: "https://files.catbox.moe/b667q3.png", // We can use direct letters initials with dynamic gradient backdrops
    about: "Hi, I'm Sirisha Pyla, a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning at Vignan's Institute of Engineering for Women.\n\nI enjoy developing innovative software solutions using Java, Python, SQL, and modern web technologies. Through internships, certifications, and real-world projects, I have built a strong foundation in software development, machine learning, APIs, and problem-solving.\n\nMy goal is to become a highly skilled Full Stack Developer and Software Engineer capable of creating impactful applications that solve real-world challenges.",
    stats: [
      { label: "Degree", value: "B.Tech AI & ML", icon: "GraduationCap" },
      { label: "Graduation", value: "2027", icon: "Calendar" },
      { label: "Location", value: "Andhra Pradesh, India", icon: "MapPin" },
      { label: "Fast Learner", value: "Adaptable & Passionate", icon: "Zap" },
      { label: "Problem Solving", value: "DSA Enthusiast", icon: "Flame" },
      { label: "Team Player", value: "Collaborative Maker", icon: "Users" }
    ],
    contact: {
      email: "sirishapyla5@gmail.com",
      phone: "+91 9949913089",
      linkedin: "https://www.linkedin.com/in/sirisha-pyla-5a50b2349",
      github: "https://github.com/sirishapyla-46",
      resumeUrl: "https://files.catbox.moe/5mymhs.pdf" // Direct resume download Link
    }
  },
  
  skills: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", percentage: 88, iconName: "Coffee" },
        { name: "Python", percentage: 92, iconName: "Terminal" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", percentage: 90, iconName: "Html5" },
        { name: "CSS3", percentage: 88, iconName: "Css3" },
        { name: "JavaScript", percentage: 85, iconName: "Code" }
      ]
    },
    {
      title: "Database & Backend",
      skills: [
        { name: "SQL", percentage: 84, iconName: "Database" }
      ]
    },
    {
      title: "APIs & Integration",
      skills: [
        { name: "REST API", percentage: 86, iconName: "Route" },
        { name: "Binance API", percentage: 80, iconName: "Coins" }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "OOP (Object Oriented Programming)", percentage: 88, iconName: "Layers" },
        { name: "Data Structures", percentage: 82, iconName: "GitCommit" },
        { name: "DBMS", percentage: 85, iconName: "Table" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", percentage: 88, iconName: "Github" },
        { name: "VS Code", percentage: 92, iconName: "Laptop" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Teamwork", percentage: 95, iconName: "Users" },
        { name: "Communication", percentage: 90, iconName: "MessageSquare" },
        { name: "Problem Solving", percentage: 92, iconName: "Lightbulb" },
        { name: "Leadership", percentage: 85, iconName: "Crown" },
        { name: "Fast Learning", percentage: 95, iconName: "TrendingUp" }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      institution: "Vignan's Institute of Engineering for Women (Autonomous)",
      degree: "Bachelor of Technology",
      major: "Artificial Intelligence & Machine Learning",
      period: "2023 - Present",
      score: "CGPA: 8.04",
      location: "Visakhapatnam, Andhra Pradesh"
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate Education",
      period: "2021 - 2023",
      score: "Percentage: 93%",
      location: "Andhra Pradesh, India"
    },
    {
      institution: "Mohan Secondary School",
      degree: "SSC (10th)",
      period: "2020 - 2021",
      score: "Percentage: 100%",
      location: "Andhra Pradesh, India"
    }
  ] as Education[],

  internship: {
    title: "Foundations of AI & ML Virtual Internship",
    provider: "SmartInternz (In collaboration with industry partners)",
    period: "May 2025 – July 2025",
    responsibilities: [
      "Learned supervised and unsupervised machine learning models and techniques",
      "Conducted detailed data cleaning, preprocessing, and exploratory data analysis",
      "Built and deployed predictive models using Python, NumPy, and Pandas",
      "Evaluated model performance using various visual techniques and metrics",
      "Attended practical AI workshops on neural networks and model fine-tuning",
      "Worked in collaborative squads solve real-world dataset problems"
    ]
  } as Internship,

  projects: [
    {
      id: "giftcraft-ai",
      name: "GiftCraft AI",
      description: "An AI-powered gift recommendation platform that helps users discover personalized gift ideas based on interests, occasions, age groups, and recipient preferences.",
      features: [
        "Smart AI-based gift recommendations utilizing deep preference metrics",
        "Personalized gift suggestions categorized by age, occasion, and relationship",
        "Interactive modern interface with intuitive question steps for accurate tuning",
        "Ultra-fast processing and responsive design with glowing feedback cards"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "AI Integration", "Tailwind CSS"],
      category: "AI Application",
      github: "https://github.com/sirishapyla-46",
      accentColor: "#00F0FF" // Cyber Cyan
    },
    {
      id: "sentiment-analysis-pro",
      name: "Sentiment Analysis Pro",
      description: "A sentiment analysis application that analyzes text and identifies emotions and sentiments such as Positive, Negative, or Neutral using Natural Language Processing (NLP).",
      features: [
        "Interactive real-time analysis dashboard displaying polarity graphs",
        "Deduction of positive, negative, and neutral metrics dynamically",
        "Uses Advanced Natural Language Processing (NLP) models",
        "Visual data analytics to track historic trends of text input"
      ],
      techStack: ["Python", "Machine Learning", "NLP", "Pandas", "Matplotlib"],
      category: "Artificial Intelligence",
      github: "https://github.com/sirishapyla-46",
      accentColor: "#BD00FF" // Cyber Purple
    },
    {
      id: "binance-trading-bot",
      name: "Binance Trading Bot",
      description: "A Python-based automated cryptocurrency trading bot using the Binance API for executing secure real-time trading operations efficiently.",
      features: [
        "Seamless execution of Market Orders, Limit Orders, and Stop Market Orders",
        "Highly secure cryptographically hashed API Authentication and guardrails",
        "Extensive error handling, API retry capabilities, and rate-limit managers",
        "Detailed real-time local trading logs highlighting trade telemetry and profit curves"
      ],
      techStack: ["Python", "Binance API", "REST API", "Cryptography", "JSON Database"],
      category: "FinTech Application",
      github: "https://github.com/sirishapyla-46",
      accentColor: "#F3BA2F" // crypto yellow
    },
    {
      id: "image-to-pdf",
      name: "Image to PDF Converter",
      description: "A highly optimized Python desktop utility that converts multiple formats of image files into a single, cohesive PDF document efficiently.",
      features: [
        "Intuitive multiple image selection and file sorting capabilities",
        "Adjustable margin sizing, photo alignment, and high-fidelity PDF rendering",
        "Extremely fast image compression using the robust Pillow library",
        "Clean user workflow designed specifically for administrative simplicity"
      ],
      techStack: ["Python", "Pillow Library", "Tkinter", "OS Integration"],
      category: "Utility Application",
      github: "https://github.com/sirishapyla-46",
      accentColor: "#10B981" // emerald green
    },
    {
      id: "lumiere-candles",
      name: "Lumière Candles",
      description: "A modern, premium e-commerce web platform for handcrafted candles providing users with a luxurious and visually stunning shopping experience.",
      features: [
        "Visually striking, elegant grid-based product showcase with depth shadows",
        "Optimized client-side shopping checkout workflow, wishlists, and carts",
        "Ultra responsive web layout configured carefully for gorgeous mobile shopping",
        "Dynamic filter systems by scent, luxury levels, and duration specifications"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox Grid"],
      category: "E-Commerce Website",
      github: "https://github.com/sirishapyla-46",
      accentColor: "#EC4899" // Pink luxury
    },
    {
      id: "she-can-foundation",
      name: "She Can Foundation",
      description: "A social impact platform designed to promote women's empowerment initiatives, highlight community leaders, and organize direct community engagement.",
      features: [
        "Informative education dashboard emphasizing digital edge education programs",
        "Community awareness portal with fully interactive event notice-boards",
        "Beautiful storytelling cards showing success testimonials in responsive grids",
        "Modern minimalist user interface pairing elegant typography with wide spacing"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Aesthetic Typography", "Animation Effects"],
      category: "Social Impact Platform",
      github: "https://github.com/sirishapyla-46",
      accentColor: "#F59E0B" // warm bronze/gold
    },
    {
      id: "cropcare",
      name: "CropCare – A Smarter Plantation",
      description: "A smart agricultural plant care application that assists users in maintaining healthy plants by recommending precise soil, water, and fertilizer parameters.",
      features: [
        "Detailed diagnostics advising on water frequencies, nitrogen/potash ratios",
        "Agricultural disease lookup indexing cure regimens, seasonal risk indices",
        "Highly user-friendly questionnaire for matching geographical locations & plants",
        "Structured plant-care calendars with customized local reminder schedules"
      ],
      techStack: ["Python", "Database Concepts", "App Development", "Agricultural Models"],
      category: "AgriTech Solution",
      github: "https://github.com/sirishapyla-46",
      accentColor: "#3B82F6" // Smart Blue
    },
    {
      id: "care-capsule",
      name: "Care Capsule",
      description: "A comprehensive digital healthcare application that keeps users on track with their medication schedules through smart adaptive notification systems.",
      features: [
        "Medication schedules configuration with recurrent customized intervals",
        "Audible or dynamic screen alert notifications when dosage is overdue",
        "Secured health logging history monitoring compliance percentages over time",
        "Sleek visual controls tailored for accessibility, especially for elder users"
      ],
      techStack: ["Python", "Notification Systems", "Backend Services", "Threading Scheduler"],
      category: "Healthcare Application",
      github: "https://github.com/sirishapyla-46",
      accentColor: "#EF4444" // Health Red
    }
  ] as Project[],

  certifications: [
    { title: "GUVI – Fundamentals of AI", issuer: "GUVI Geek Network (IIT Madras Incubated)" },
    { title: "Infosys Springboard – Full Stack Development", issuer: "Infosys Springboard Program" },
    { title: "Oracle – Java Skill Badge", issuer: "Oracle Academy" },
    { title: "Future Skills Prime – Digital Edge 101", issuer: "NASSCOM & MeitY Initiative" },
    { title: "Deloitte – Cyber Job Simulation", issuer: "Deloitte / Forage" },
    { title: "Deloitte – Data Analytics Job Simulation", issuer: "Deloitte / Forage" },
    { title: "HP LIFE – Data Science and Analytics", issuer: "HP LIFE Education platform" },
    { title: "Be10x – AI Tools Workshop", issuer: "Be10x Tech Certification" },
    { title: "Google Developer Group on Campus – GenAI", issuer: "GDG Vignan's Institute" },
    { title: "Novi Tech R&D – Full Stack Development", issuer: "Novi Tech R&D Labs" },
    { title: "UFFF – WIX Learning", issuer: "UFFF Community Network" }
  ] as Certificate[],

  achievements: [
    {
      title: "AI & ML Specialization Student",
      description: "Dedicated academic background with core mastery in machine learning mathematical foundations and neural web topologies."
    },
    {
      title: "Multiple Industry Certifications",
      description: "Validated skill sets from world-renowned organizations such as Oracle, Deloitte, Infosys, and Google Developer Groups."
    },
    {
      title: "Hands-on Internship Experience",
      description: "Practical engineering groundwork in data processing, statistical regression, classification algorithms, and pythonic modeling."
    },
    {
      title: "Active Full Stack Learner",
      description: "Passionate bridge builder connecting backend python processes, databases, and modern interactive frontend web architectures."
    },
    {
      title: "Robust Project Portfolio",
      description: "Built & tested 8 diverse software environments spanning FinTech bots, AgriTech, NLP tools, and social platforms."
    }
  ] as Achievement[]
};
