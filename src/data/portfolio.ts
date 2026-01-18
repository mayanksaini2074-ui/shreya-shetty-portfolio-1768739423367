import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Shreya Shetty",
    "title": "MCA Student Specializing in Cyber Security",
    "email": "shreyashetty2482@gmail.com",
    "phone": "6363476466",
    "linkedin": "https://www.linkedin.com/in/shreya-shetty-34b107260",
    "github": "",
    "location": "Sagara, Shivamogga, Karnataka",
    "summary": "Experienced MCA student specializing in Cyber Security with a strong foundation in web development and data analytics. Proven track record of contributing to UI/UX and web development projects through internships and continually working on improving project management skills. Committed to effective planning and team collaboration."
  },
  "experience": [
    {
      "title": "UI/UX & Web Development Intern",
      "company": "Udupi Web Solutions (UWS)",
      "dates": "Oct 2025 – Dec 2025",
      "description": "Completed a professional internship focused on UI/UX design and web development.",
      "highlights": [
        "Designed and improved user interface layouts for web-based applications.",
        "Assisted in web development tasks following company standards.",
        "Demonstrated strong dedication, professionalism, and timely task execution.",
        "Gained hands-on experience working in a real-world development environment."
      ]
    }
  ],
  "education": [
    {
      "degree": "Master Of Computer Applications",
      "institution": "Kuvempu University, College of LBS and SBS",
      "years": "2022 - ongoing",
      "gpa": "7.76"
    },
    {
      "degree": "Bachelor of Computer Applications",
      "institution": "State Board, Govt. PU College",
      "years": "2019 - 2021",
      "gpa": "8.57"
    },
    {
      "degree": "Class XII (Computer Science)",
      "institution": "Mangalore Institution Of Technology & Engineering",
      "years": "2018-2019",
      "gpa": ""
    },
    {
      "degree": "Class X (ICSE)",
      "institution": "St. Joseph's Convent School",
      "years": "2019",
      "gpa": "65%"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "50-30-20 Rule Budgeting App",
      "description": "Built an app with real-time tracking, visualization, and income/expense categorization using scripting languages and Google Firebase.",
      "technologies": [
        "Google Firebase"
      ],
      "link": "https://savvy-7e19a.web.app",
      "github": ""
    },
    {
      "name": "Secure Vault – Password Manager",
      "description": "Developed a password manager with encryption, authentication, and responsive design using modern web technologies and deployed on Vercel.",
      "technologies": [
        "Vercel"
      ],
      "link": "https://miniproject-gamma-seven.vercel.app/",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "animated-border",
  "about": "split",
  "experience": "accordion",
  "projects": "featured",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "modern",
  "colorPalette": "slate"
};
