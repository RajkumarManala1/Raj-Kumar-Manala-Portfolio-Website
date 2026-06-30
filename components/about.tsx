"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I am a{" "}
        <span className="font-medium">Cloud, Data & AI Engineer</span> with
        hands-on experience building scalable data platforms, analytics
        solutions, and AI-powered applications across{" "}
        <span className="font-medium">Azure</span>,{" "}
        <span className="font-medium">Microsoft Fabric</span>,{" "}
        <span className="font-medium">Snowflake</span>, and{" "}
        <span className="font-medium">AWS</span>. I enjoy turning raw,
        disconnected data into clean, trusted, and analytics-ready assets that
        help businesses make better decisions.
      </p>

      <p className="mb-3">
        My core strength is{" "}
        <span className="font-medium">end-to-end data engineering</span>. I have
        worked on data ingestion, transformation, lakehouse design, semantic
        modeling, and reporting using tools such as{" "}
        <span className="font-medium">Azure Data Factory</span>,{" "}
        <span className="font-medium">Azure Databricks</span>,{" "}
        <span className="font-medium">Microsoft Fabric</span>,{" "}
        <span className="font-medium">OneLake</span>,{" "}
        <span className="font-medium">Delta Lake</span>,{" "}
        <span className="font-medium">PySpark</span>,{" "}
        <span className="font-medium">Spark SQL</span>,{" "}
        <span className="font-medium">Python</span>, and{" "}
        <span className="font-medium">SQL</span>.
      </p>

      <p className="mb-3">
        I also work with modern cloud analytics and AI tools, including{" "}
        <span className="font-medium">Snowflake Cortex AI</span>,{" "}
        <span className="font-medium">Cortex Analyst</span>,{" "}
        <span className="font-medium">Streamlit</span>,{" "}
        <span className="font-medium">Sigma Computing</span>, and{" "}
        <span className="font-medium">Power BI</span>. I have built solutions
        that combine data pipelines, semantic models, dashboards, and natural
        language analytics to make enterprise data easier to explore and
        understand.
      </p>

      <p className="mb-3">
        What makes my profile strong is the combination of{" "}
        <span className="font-medium">data engineering</span>,{" "}
        <span className="font-medium">business intelligence</span>, and{" "}
        <span className="font-medium">AI-driven analytics</span>. I can work
        across the full flow — from source systems and cloud data platforms to
        reporting layers, dashboards, and AI-assisted user experiences.
      </p>

      <p className="mb-3">
        I recently completed my{" "}
        <span className="font-medium">Master&apos;s in Computer Science</span>{" "}
        from{" "}
        <span className="font-medium">Concordia University Chicago</span> and am
        currently working as a{" "}
        <span className="font-medium">Data & AI Intern at Hexaware</span>, where
        I am gaining hands-on experience with Snowflake, Cortex AI, Streamlit,
        and Sigma Computing.
      </p>

      <p>
        Outside of work, I enjoy{" "}
        <span className="font-medium">playing soccer</span>, going to the{" "}
        <span className="font-medium">gym</span>, watching movies, spending time
        with friends, and making{" "}
        <span className="font-medium">coffee and lattes</span>.
      </p>
    </motion.section>
  );
}