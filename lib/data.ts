import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import disputeaiImg from "@/public/disputeai.png";
import creditfraudImg from "@/public/creditfraud.png";
import earthquakeImg from "@/public/earthquake.png";
import snowflakeaiImg from "@/public/snowflakeai.png";
import awsvpcImg from "@/public/awsvpc.png";
import bicyclesalesImg from "@/public/bicyclesales.png";

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
    companyName: "Hexaware Technologies",
    title: "Data and AI",
    location: "Chicago, IL, USA",
    description: [
      "Architected scalable data pipelines in Snowflake to ingest, transform, and govern financial and insurance datasets across Bronze/Silver/Gold layers using Medallion architecture, enabling unified analytics for underwriting, claims processing, and policy management.",
      "Built AI-powered data cloud solutions using Snowflake Cortex AI, leveraging LLM functions (Cortex Complete, Summarize, Sentiment) and ML models to automate claims classification, detect fraud patterns, and summarize policy documents for insurance operations.",
      "Designed and deployed interactive Sigma Computing dashboards connected to Snowflake's live data cloud, delivering real-time insights on premium revenue, loss ratios, claims processing SLAs, and portfolio risk metrics to business stakeholders.",
      "Engineered Snowpark-based data transformations in Python and SQL to process high-volume transactional data from insurance and financial systems, implementing incremental loading strategies and data quality validations for regulatory compliance reporting.",
      "Developed Snowflake Cortex Search and RAG-based solutions to enable natural language querying over internal policy documents and compliance guidelines, reducing manual research effort by ~50% for underwriting and risk assessment teams.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2026 - Present",
  },
  {
    companyName: "Concordia University Chicago",
    title: "Graduate Data Research Assistant",
    location: "Chicago, IL, USA",
    description: [
      "Architected a production-grade Service Desk Copilot using Azure AI Foundry and RAG (Retrieval-Augmented Generation), reducing ticket volume by delivering citation-backed answers from internal runbooks.",
      "Engineered automated document processing workflows using Azure AI and JSON parsers to extract key data fields from unstructured finance documents for downstream reporting.",
      "Developed comprehensive Power BI dashboards to visualize operational KPIs, utilizing DAX and Power Query to identify trends in system usage and support efficiency.",
      "Secured cloud infrastructure by implementing Role-Based Access Control (RBAC) and policy governance within Microsoft Entra ID for faculty and staff systems.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Dec 2025",
  },
  {
    companyName: "Concordia University Chicago",
    title: "Graduate Student Assistant",
    location: "Chicago, IL, USA",
    description: [
      "Optimized university IT workflows by analyzing system log data using SQL and Power BI, identifying bottlenecks in the ticketing lifecycle.",
      "Managed Azure Active Directory (Entra ID) user identities and access policies, ensuring 99.9% uptime for student and faculty portal access.",
      "Collaborated with cross-functional teams to migrate on-premise data to cloud storage, validating data integrity through SQL scripting and automated quality checks.",
      "Created automated reporting scripts using PowerShell and Python to track license usage and cloud resource consumption, reducing operational waste.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Jul 2024",
  },
  {
    companyName: "LTIMindtree LTD. (Microsoft Vendor)",
    title: "Senior Data Engineer",
    location: "Hyderabad, India",
    description: [
      "Architected metadata-driven ingestion frameworks using Azure Data Factory, orchestrating data movement across ADLS Gen2, Synapse Analytics, and Snowflake for insurance and Xbox sales domains.",
      "Designed dimensional data models (star/snowflake schemas) with SCD Type 1/2 in Azure Synapse and Snowflake, enabling tracking of claims efficiency, sales velocity, and regional revenue.",
      "Developed event-driven processing solutions using Azure Event Hubs and Stream Analytics, reducing reporting latency from hours to under 15 minutes for time-sensitive business decisions.",
      "Implemented comprehensive data quality frameworks including source-to-target validation, schema conformance checks, and duplicate detection, reducing data-related production incidents by ~40%.",
      "Managed platform security using Azure Key Vault, implemented row-level security in Synapse Analytics, and configured RBAC across ADLS Gen2 to comply with enterprise governance standards.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Aug 2023",
  },
  {
    companyName: "Mindtree (Microsoft Vendor)",
    title: "Data Engineer",
    location: "Mumbai, India",
    description: [
      "Engineered 30+ scalable ETL/ELT pipelines using Azure Data Factory, processing ~5+ TB of transactional data daily with a 99.5% pipeline success rate across insurance and Xbox sales domains.",
      "Built PySpark and Spark SQL transformations on Azure HDInsight and Synapse Spark pools, improving data processing throughput by ~35% through partition pruning, broadcast joins, and caching.",
      "Built enterprise-grade data ingestion from SQL Server, MySQL, APIs, JSON, and Kafka into Bronze/Silver/Gold zones within ADLS Gen2 following medallion architecture with Delta Lake.",
      "Created business-facing datasets and reporting feeds consumed by Power BI and Tableau dashboards, collaborating with analysts to translate business requirements into technical designs.",
      "Managed CI/CD deployment practices using Azure DevOps and Jenkins across dev, QA, staging, and production environments with ARM template parameterization and release gate approvals.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "April 2020 - Sep 2022",
  },
  {
    companyName: "Bosch",
    title: "Data Engineer Intern",
    location: "Bangalore, India",
    description: [
      "Engineered end-to-end IoT telemetry ingestion pipelines using Kafka producers/consumers in Python and Scala on AWS, enabling real-time streaming of high-frequency industrial sensor data.",
      "Developed Spark Streaming applications on AWS EMR to process raw telemetry events, persisting to HBase for operational lookups and S3 data lake zones for batch analytics.",
      "Implemented AWS Kinesis with Lambda functions for real-time anomaly detection, triggering SNS alerts when sensor thresholds were breached — reducing incident response time to near real-time.",
      "Built PySpark batch jobs on EMR to process terabytes of historical IoT sensor datasets, performing time-series aggregations to support predictive maintenance analytics.",
      "Designed dimensional data models in AWS Redshift for machine performance metrics, enabling stakeholders to track equipment efficiency and downtime patterns through BI dashboards.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2018 - March 2020",
  },
] as const;

export const projectsData = [
  {
    title: "DisputeAI",
    description:
      "An intelligent financial dispute resolution system using Agentic AI and RAG on Azure to automate case analysis and generate citation-backed recommendations.",
    tags: ["Azure AI Foundry", "Azure OpenAI", "RAG", "Azure AI Search", "LangChain", "Agentic AI", "Python"],
    imageUrl: disputeaiImg,
    githubLink: "https://github.com/RajkumarManala1/DisputeAI-Financial-Dispute-Resolution-with-RAG-and-Agentic-AI-on-Azure",
  },
  {
    title: "Snowflake AI Sales Insights",
    description:
      "An AI-powered sales analytics platform using Snowflake Cortex Analyst with a natural-language Streamlit chat interface for querying live sales data.",
    tags: ["Snowflake", "Cortex Analyst", "Streamlit", "Snowpark", "Python", "SQL", "Data Science"],
    imageUrl: snowflakeaiImg,
    githubLink: "https://github.com/RajkumarManala1/snowflake-ai-sales-data-insights",
  },
  {
    title: "Credit Fraud Detection",
    description:
      "A production-grade credit card fraud detection ML pipeline with PySpark feature engineering, model training, and a Power BI monitoring dashboard.",
    tags: ["Azure Databricks", "PySpark", "Scikit-learn", "XGBoost", "Azure ML", "MLflow", "Power BI"],
    imageUrl: creditfraudImg,
    githubLink: "https://github.com/RajkumarManala1/Credit-Fraud-Detection",
  },
  {
    title: "Bicycle Sales Analytics",
    description:
      "An end-to-end data pipeline with Snowflake data warehousing and Sigma Computing dashboards, following Medallion architecture for bicycle sales and accessories data.",
    tags: ["Snowflake", "SQL Server", "Docker", "Sigma Computing", "Star Schema", "Medallion Architecture"],
    imageUrl: bicyclesalesImg,
    githubLink: "https://github.com/RajkumarManala1/Bicycle-Sales-Analytics",
  },
  {
    title: "Earthquake Analysis",
    description:
      "A data engineering platform analyzing global earthquake data using Microsoft Fabric Lakehouse and Azure Databricks with interactive Power BI dashboards.",
    tags: ["Microsoft Fabric", "Azure Databricks", "Delta Lake", "PySpark", "Python", "Pandas", "Power BI"],
    imageUrl: earthquakeImg,
    githubLink: "https://github.com/RajkumarManala1/Earthquake-Analysis-Project",
  },
  {
    title: "AWS VPC & EC2 Infrastructure",
    description:
      "A hands-on AWS networking project demonstrating custom VPC setup with public/private subnets, NAT Gateway, Bastion Host, and secure EC2 access patterns.",
    tags: ["AWS VPC", "EC2", "NAT Gateway", "Bastion Host", "Security Groups", "Route Tables"],
    imageUrl: awsvpcImg,
    githubLink: "https://github.com/RajkumarManala1/aws-vpc-ec2-nat-demo",
  },
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
      "An end-to-end analytics pipeline on Azure Databricks processing supply chain and sales data using Medallion architecture with Delta Lake.",
    tags: ["Databricks", "PySpark", "SQL", "Delta Lake", "Time Travel", "Multi Hop", "Unity Catalog"],
    imageUrl: wordanalyticsImg,
    githubLink: "https://github.com/RajkumarManala1/Databricks-Supply-Chain-Sales-Data-Analytics",
  },
] as const;

export const skillsData = [
  // Cloud Platforms
  "Azure",
  "AWS",
  "Microsoft Fabric",
  "Snowflake",
  "Databricks",
  // Data Engineering
  "Azure Data Factory",
  "Azure Synapse Analytics",
  "Delta Lake",
  "Medallion Architecture",
  "ETL",
  "Data Warehousing",
  "Data Modelling",
  // Big Data & Processing
  "Spark",
  "PySpark",
  "Spark SQL",
  "Kafka",
  "Hadoop",
  "Hive",
  // AI & ML
  "Azure OpenAI / GenAI",
  "Azure AI Search",
  "MLflow",
  // Programming
  "Python",
  "SQL",
  "T-SQL",
  "Scala",
  // Databases
  "MS SQL Server",
  "PostgreSQL",
  // Reporting & Analytics
  "Power BI",
  "Tableau",
  "Data Visualization",
  // DevOps & Tools
  "Docker",
  "Kubernetes",
  "Terraform",
  "Azure DevOps",
  "GitHub Actions",
  "Jenkins",
  "CI/CD",
  "Git",
  "Github",
  // Methodologies
  "Agile Methodologies",
  "JIRA",
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
    title: "SnowPro Core Certification",
    issuer: "Snowflake",
    date: "June 2026",
    imageUrl: "/Snow%20Pro%20Core%20Certification.png",
    link: "https://achieve.snowflake.com/18d782d8-6d63-4216-aafb-84a2507c6e1f#acc.v2I83jLx",
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
    link: "https://www.credly.com/badges/00abe4f6-3f88-4dd1-9fe9-965a526b8e03/public_url",
  },
  {
    title: "Databricks AI Agent Fundamentals",
    issuer: "Databricks",
    date: "May 2026",
    imageUrl: "/databricks-ai-agent-fundamentals.png",
    link: "https://credentials.databricks.com/9d792f5c-06dd-433b-83a6-69ed10d48914#acc.WwM7nmRk",
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