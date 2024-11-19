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
      "I worked as a data engineer for 2 years, I upskilled and promoted as a Senior Data Engineer",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Senior Data Engineer",
    location: "Mindtree LTD., Hyderabad, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "CougarNet IT helpdesk support",
    location: "Concordia University Chicago, River Forest, IL",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Technical support speciliest",
    location: "Concordia University Chicago, River Forest, IL",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
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
    issuer: "Microsoft PL300-",
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