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
    title: "Cloud AI & Data Engineer",
    location: "Chicago, IL, USA",
    description: [
      "Architected a production-grade Service Desk Copilot using Azure AI Foundry and RAG (Retrieval-Augmented Generation), reducing ticket volume by delivering citation-backed answers from internal runbooks.",
      "Engineered automated document processing workflows using Azure AI and JSON parsers to extract key data fields from unstructured finance documents for downstream reporting.",
      "Developed comprehensive Power BI dashboards to visualize operational KPIs, utilizing DAX and Power Query to identify trends in system usage and support efficiency.",
      "Secured cloud infrastructure by implementing Role-Based Access Control (RBAC) and policy governance within Microsoft Entra ID for faculty and staff systems."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Dec 2025",
  },
  {
    companyName: "Concordia University Chicago",
    title: "Data Operations & Cloud Analyst", 
    location: "Chicago, IL, USA",
    description: [
      "Optimized university IT workflows by analyzing system log data using SQL and Power BI, identifying bottlenecks in the ticketing lifecycle.",
      "Managed Azure Active Directory (Entra ID) user identities and access policies, ensuring 99.9% uptime for student and faculty portal access.",
      "Collaborated with cross-functional teams to migrate on-premise data to cloud storage, validating data integrity through SQL scripting and automated quality checks.",
      "Created automated reporting scripts using PowerShell and Python to track license usage and cloud resource consumption, reducing operational waste."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - July 2024",
  },
{
    companyName: "LTIMindtree LTD. (Microsoft Vendor)",
    title: "Senior Data & Cloud Engineer",
    location: "Hyderabad, India",
    description: [
      "Architected a scalable 'Medallion' Data Lakehouse using Azure Databricks (PySpark) and Delta Lake, serving as the trusted data foundation for downstream AI/ML models and Analytics.",
      "Implemented 'Infrastructure as Code' (IaC) using Terraform and Azure Resource Manager to automate cloud deployments, reducing environment provisioning time by 90%.",
      "Designed executive-level Power BI dashboards connected to Azure Cosmos DB and SQL, utilizing complex DAX measures to visualize real-time streaming data for leadership.",
      "Enforced Data Governance and Security protocols by implementing Row-Level Security (RLS) and automated data quality checks, ensuring compliance for enterprise-grade reporting."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Aug 2023",
  },
  {
    companyName: "Mindtree (Microsoft Vendor)",
    title: "Data Engineer",
    location: "Mumbai, India",
    description: [
      "Engineered robust ETL pipelines using Azure Data Factory (ADF) and SSIS to migrate on-premise legacy data to the cloud, ensuring zero data loss during transformation.",
      "Performed advanced data profiling and cleansing using SQL and Python, resolving data quality issues to support accurate Business Intelligence reporting.",
      "Developed interactive data visualizations in Power BI, translating complex raw datasets into clear, actionable insights for non-technical stakeholders.",
      "Optimized SQL queries and stored procedures for performance, reducing report load times by 40% and enabling faster decision-making."
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
    title: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    date: "July 2025",
    imageUrl: "/aws-certified-developer-associate.png",
    link: "https://www.credly.com/badges/de411370-ba28-41e3-a3e0-8a7556e37c27/linked_in_profile",
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
      "Graduated with Master's Degree, Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - Dec 2025",
  },
] as const;