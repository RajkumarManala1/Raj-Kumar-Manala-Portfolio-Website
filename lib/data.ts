import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Engineer",
    location: "Mindtree, Mumbai, India",
    description:
      "At Mindtree, I specialized in designing and implementing end-to-end data engineering and analytics solutions, including ETL workflows with SSIS and Python, statistical analysis with SQL and Excel, and interactive data visualizations using Power BI and Databricks. Leveraging cloud platforms like Microsoft Azure and Big Data technologies, I built scalable pipelines, optimized real-time data processing with Databricks Streaming, and developed data marts with fact and dimension tables. My role involved collaborating with stakeholders to define requirements, ensuring data quality through rigorous cleansing and transformation, and delivering actionable insights that empowered strategic business decisions.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Senior Data Engineer",
    location: "LTIMindtree LTD., Hyderabad, India",
    description:
      "At LTIMindtree, I excelled in creating advanced data solutions, developing Power BI dashboards and reports by blending data from multiple sources to deliver critical business insights. I implemented scalable data warehousing solutions with Azure Synapse Analytics and optimized ELT pipelines using Azure Data Factory. Leveraging Power BI and Azure Databricks, I performed complex data modeling and transformations, ensuring high-quality, actionable intelligence. My expertise included developing and optimizing SQL scripts, creating advanced visualizations with DAX, and designing pipelines to move historical and incremental data from Oracle on-premises systems to Azure Data Lake Storage. Collaborating with cross-functional teams, I developed robust data models, ETL processes, and analytics workflows, while also supporting and training end users to maximize the impact of business intelligence tools.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "CougarNet IT helpdesk support",
    location: "Concordia University Chicago, River Forest, IL",
    description:
      "At CougarNet Help Desk, I provided essential IT support to students, faculty, and staff at Concordia University Chicago, ensuring smooth academic and administrative operations. I delivered expert assistance for hardware and software issues, supported Administrative Information Systems (AIS) and Ellucian Banner for accessing course schedules, accounts, and financial aid, and assisted with Blackboard Learn for course content and assignments. My responsibilities included setting up and maintaining audiovisual resources for classes and events, as well as providing guidance for Concordia Connect, the university's online portal. Through proactive troubleshooting and support, I contributed to a reliable and efficient IT environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Technical Support Specialist",
    location: "Concordia University Chicago, River Forest, IL",
    description:
      "As a Technical Support Specialist and key member of the Fishbowl team at Concordia University Chicago, I ensured efficient deployment and maintenance of computing resources to uphold the university's technological standards. My responsibilities included imaging Dell desktops and laptops with BIOS configurations, setting up iMacs to align with organizational policies, and deploying Windows 11 on lab computers from the server. I led system upgrades by replacing outdated Dell and iMac systems with new models, configuring Windows 11 for Dell desktops, and updating iMacs to macOS Sonoma 14.0. Additionally, I provided technical support and troubleshooting, ensured compliance with security protocols, and collaborated with teams to implement IT solutions, fostering a secure and efficient learning environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "DITA",
    description:
      "Data is ingested from an on-premises, transformed using data engineering tools, and analyzed through visualization tools.",
    tags: ["MS SQL Server", "Azure Data Lake", "Data Factory", "Databricks", "Synapse Analytics", "Power BI"],
    imageUrl: corpcommentImg,
    githubLink: "https://github.com/RajkumarManala1/Azure-Data-Engineering-Project",
  },
  {
    title: "Product Sales Analytics",
    description:
      "An interactive Power BI report leveraging the AdventureWorks database for sales performance through data visualization.",
    tags: ["Power Query", "Power BI", "M language", "DAX"],
    imageUrl: rmtdevImg,
    githubLink: "https://github.com/RajkumarManala1/Sales-Data-Analytics-Using-Power-BI-",
  },
  {
    title: "Supply Chain Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Databricks", "Pyspark", "SQL", "Delta Lake", "TIme Travel", "Multi Hop", "Unity Catalog"],
    imageUrl: wordanalyticsImg,
    githubLink: "https://github.com/RajkumarManala1/Databricks-Supply-Chain-Sales-Data-Analytics",
  },
] as const;

export const skillsData = [
  "Azure",
  "AWS",
  "Databricks",
  "MS SQL Server",
  "Power BI",
  "Tableau",
  "MS Excel",
  "VScode",
  "Anaconda",
  "Hadoop",
  "Kafka",
  "Spark",
  "Air Flow",
  "Rest API",
  "SQL",
  "NoSQL",
  "Python",
  "R",
  "PostgreSQL",
  "Oracle",
  "Agile Methodologies",
  "CI/CD",
  "ETL",
  "Data Modelling",
  "Data Cleansing",
  "Data Transforming",
  "Data Visualization",
  "Git",
  "Github",
] as const;

export const certificationsData = [
  {
    title: "Microsoft Power BI Data Analyst Associate",
    issuer: "Microsoft PL300",
    date: "November 2024",
    imageUrl: "/powerbi-badge1.png",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ManalaRajKumar-2942/F0AB2D5AA1AB551E?sharingId=478DB6AAB98D7D18", // Add certification link
  },
  {
    title: "Microsoft Azure Data Engineer Associate",
    issuer: "Microsoft DP300",
    date: "October 2024",
    imageUrl: "/data-engineer-associate-badge.png",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ManalaRajKumar-2942/BB0A3786D56351D9?sharingId=478DB6AAB98D7D18", // Add certification link
  },
  {
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft AI900",
    date: "June 2024",
    imageUrl: "/azure-ai-fundamentals.png",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ManalaRajKumar-2942/B1F182EC2DBA5E77?sharingId=478DB6AAB98D7D18", // Add certification link
  },
  {
    title: "Microsoft Azure Data Fundamentals",
    issuer: "Microsoft DP900",
    date: "June 2024",
    imageUrl: "/azure-data-fundamentals.png",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ManalaRajKumar-2942/6C61A98729595F8D?sharingId=478DB6AAB98D7D18", // Add certification link
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft AZ900",
    date: "January 2024",
    imageUrl: "/azure-fundamentals.png",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ManalaRajKumar-2942/2368C3C2A762375C?sharingId=478DB6AAB98D7D18", // Add certification link
  },
  {
    title: "Databricks Generative AI",
    issuer: "Databricks",
    date: "November 2024",
    imageUrl: "/databricks-genAI-fundamentals.png",
    link: "https://credentials.databricks.com/7a489dd9-e22f-4f63-aa1b-ba286fa10456#gs.hulspo#acc.CBMabSQp", // Add certification link
  },
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks",
    date: "October 2024",
    imageUrl: "/databricks-fundamentals.png",
    link: "https://credentials.databricks.com/07a88f03-c655-4bde-bede-859087a3fa55#acc.bwuseCnP", // Add certification link
  },
] as const;

export const educationData = [
  {
    title: "Swami Vivekananda Institute of Technology",
    location: "Hyderabad, India",
    description:
      "Bachelor of Technology in Electronics and Communication Engineering. I immediately found a job as a Data Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Concordia University Chicago",
    location: "River Forest, IL",
    description:
      "Currently pursuing my Master of Science in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
] as const;