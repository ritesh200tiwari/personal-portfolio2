import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";


import { SiLeetcode } from "react-icons/si";

// ... Keep necessary imports (remove unused icons)

export const resumeLink = "https://drive.google.com/file/d/1387VnIw_1zOTm0AgfYmHTsUSy-4gACW0/view?usp=sharing";

export const callToAction = "https://www.linkedin.com/in/ritesh-tiwari-";

export const navLinks = [
  {
    id: "skills",
    title: "Technical Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contactMe",
    title: "Contact",
  },
];

export const educationList = [
  {
    id: "education-1",
    title: "Madhav Institute of Technology and Science, Gwalior",
    degree: "Bachelor of Technology in Information Technology",
    duration: "July 2018 - July 2022",
    content1: "CGPA: 8.0",
  },
];

export const certifications = [
  "SnowPro Core - Snowflake",
  "SnowPro Advanced: Data Scientist - Snowflake",
  "AWS Certified Cloud Practitioner - AWS",
  "Informatica Intelligent Cloud Services - Informatica",
  "Tableau Desktop Specialist - Tableau",
  "Blockchain and its Applications - NPTEL",
  "Data Science for Engineers - NPTEL"
];

export const skills = [
  {
    title: "Cloud & Data Platforms",
    items: ["AWS", "Azure", "Snowflake", "Databricks", "Apache Spark"]
  },
  {
    title: "ETL/ELT Tools",
    items: ["PySpark", "Snowpark", "DBT", "AWS Glue", "Azure Data Factory"]
  },
  {
    title: "Programming",
    items: ["Python", "SQL", "Unix Scripting", "C++"]
  },
  {
    title: "Data Pipelines",
    items: ["Snowpipe", "Kafka", "Airflow", "Delta Lake", "AWS DMS"]
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "Docker", "Kubernetes", "CI/CD", "Informatica"]
  },
  {
    title: "BI & Visualization",
    items: ["Tableau", "Power BI", "Apache Hive", "Teradata"]
  }
];

export const experiences = [
  {
    organisation: "LTIMindtree",
    positions: [
      {
        title: "Data Engineer",
        duration: "August 2022 - Present",
        content: [
          "Developed scalable ETL/ELT pipelines in Snowflake using Snowpark and Snowpipe",
          "Architected real-time data solutions using Apache Spark, Kafka & AWS Glue (30% latency reduction)",
          "Optimized Snowflake environments through query tuning and cost control measures",
          "Implemented CI/CD pipelines for Informatica code migration (40% deployment time reduction)",
          "Built Databricks workflows for data lake ingestion and transformation"
        ],
      },
      {
        title: "Data Engineer - Informatica Developer",
        duration: "June 2022 - August 2022",
        content: [
          "Designed AWS data pipelines using Glue, EMR and Lambda",
          "Optimized Snowflake query performance using materialized views and clustering",
          "Developed custom integrations with RESTful APIs"
        ],
      },
    ],
  }
];

export const projects = [
  {
    id: "project-1",
    title: "Stock Market Price Prediction",
    content: [
      "Developed predictive model outperforming baseline models using LSTM networks",
      "Technologies: Python, TensorFlow, pandas, Time Series Analysis"
    ],
  },
  {
    id: "project-2",
    title: "ETL Pipeline Optimizer",
    content: [
      "Automated optimization of Databricks workflows reducing processing time by 25%",
      "Implemented using Python, PySpark, and Delta Lake architecture"
    ],
  },
  {
    id: "project-3",
    title: "Data Quality Automation Framework",
    content: [
      "Created automated data validation system for Snowflake pipelines",
      "Features: Anomaly detection, schema validation, data drift monitoring"
    ],
  }
];

export const socialMedia = [
  {
    id: "linkedin",
    icon: AiFillLinkedin,
    link: "https://linkedin.com/in/ritesh-tiwari-"
  },
  {
    id: "leetcode",
    icon: SiLeetcode,
    link: "https://leetcode.com/ritesh200/"
  },
  {
    id: "hackerrank",
    icon: SiLeetcode, // Replace with HackerRank icon if available
    link: "https://www.hackerrank.com/profile/ritesh200tiwari"
  },
  {
    id: "email",
    icon: AiFillMail,
    link: "mailto:ritesh200tiwari@gmail.com"
  }
];

export const aboutMe = {
  name: "Ritesh Tiwari",
  tagLine: "Data Engineer @LTIMindtree | AWS/Snowflake Certified | Databricks Specialist",
  intro: "Data Engineer with 3+ years experience in building scalable data solutions using Snowflake, Databricks and AWS cloud services."
};

// Remove unused sections:
export const achievements = [];
export const extraCurricular = [];
export const blogPosts = [];
export const stats = [];
export const itemsToFetch = 20; // Default value (not used in your case)
export const includedRepos = []; // Empty array since you removed open source section
