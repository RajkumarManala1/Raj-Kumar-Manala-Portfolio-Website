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
    companyName: "Concordia University Chicago",
    title: "Technical Support Specialist",
    location: "Chicago, IL",
    description: [
      "Led the imaging, configuration, and deployment of Dell desktops, laptops, and iMacs, ensuring compliance with organizational policies and optimal performance.",
    "Spearheaded system upgrades by replacing outdated hardware, optimizing device configurations, and implementing security protocols to safeguard sensitive data.",
    "Streamlined IT operations through data-driven troubleshooting and analysis, enhancing system performance and reliability.",
    "Collaborated on cross-functional projects to implement innovative technology solutions, improving resource efficiency and user experience."
  ],
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Present",
  },
  {
    companyName: "Concordia University Chicago",
    title: "CougarNet IT Helpdesk Specialist",
    location: "Chicago, IL",
    description: [
      "Provided comprehensive IT support to students, faculty, and staff, troubleshooting hardware/software issues and supporting systems like AIS, Ellucian Banner, and Blackboard Learn.",
    "Managed setup and maintenance of audiovisual equipment for classes and events while guiding users on Concordia Connect, the university's online portal.",
    "Resolved technical issues proactively to ensure a reliable IT environment and improve the user experience for the university community.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - July 2024",
  },
  {
    companyName: "LTIMindtree LTD.",
    title: "Data Engineer",
    location: "Hyderabad, India",
    description: [
      "Developed 150+ automated ETL pipelines using PySpark in Azure Databricks and Azure Data Factory, improving efficiency by 70% and cutting costs by 20%.",
      "Automated deployments with Azure Resource Manager and Terraform, reducing deployment time by 90%, and optimized cloud infrastructure within scope and budget.",
      "Built scalable data models with SCD Type 1 & 2 and Azure Cosmos DB, improving query response times by 80% and storage efficiency by 20%.",
      "Supported 100+ developers and 700+ end-users by resolving ETL failures and anomalies, ensuring seamless data workflows and system reliability.",
      "Enhanced system security and disaster recovery protocols, conducting assessments to ensure data integrity and availability.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Aug 2023",
  },
  {
    companyName: "Mindtree",
    title: "Data Engineer Intern",
    location: "Mumbai, India",
    description: [
      "Designed and implemented end-to-end data engineering pipelines, including ETL workflows with SSIS and Python, while ensuring data quality through cleansing and transformation.",
      "Built scalable data pipelines and data marts on Microsoft Azure and Big Data platforms, optimizing real-time processing with Databricks Streaming.",
      "Developed actionable insights and dynamic data visualizations using SQL, Power BI, and Databricks, enabling data-driven strategic decisions.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "April 2020 - Sep 2022",
  }
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
  {
    title: "Azure Databricks Platform Architect",
    issuer: "Databricks",
    date: "January 2025",
    imageUrl: "/azure-databricks-platform-architect.png",
    link: "https://credentials.databricks.com/20a7ce3d-9854-4771-a339-54ca97d321c0#acc.4vyJhk65", // Add certification link
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "April 2025",
    imageUrl: "/aws-certified-cloud-practitioner.png",
    link: "https://www.credly.com/badges/00abe4f6-3f88-4dd1-9fe9-965a526b8e03/public_url", // Add certification link
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