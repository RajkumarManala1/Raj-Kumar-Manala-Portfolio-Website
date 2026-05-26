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
        <span className="font-medium">Cloud, AI & Data Engineer</span> with{" "}
        <span className="font-medium">7+ years of experience</span> building
        secure, scalable data platforms within the{" "}
        <span className="font-medium">Microsoft Azure ecosystem</span> and{" "}
        <span className="font-medium">AWS</span>. I specialize in turning raw, complex data
        into trusted, analytics-ready assets that enterprises can act on with
        confidence.
      </p>

      <p className="mb-3">
        My core strength is{" "}
        <span className="font-medium">end-to-end data engineering</span>. I
        design and orchestrate pipelines using{" "}
        <span className="font-medium">Azure Data Factory</span>,{" "}
        <span className="font-medium">Databricks</span>,{" "}
        <span className="font-medium">Synapse</span>, and{" "}
        <span className="font-medium">Microsoft Fabric</span>, applying{" "}
        <span className="font-medium">Medallion Architecture</span> and{" "}
        <span className="font-medium">Delta Lake</span> to build lakehouses that are
        clean, performant, and governed. My daily toolkit includes{" "}
        <span className="font-medium">PySpark</span>,{" "}
        <span className="font-medium">Spark SQL</span>,{" "}
        <span className="font-medium">Python</span>, and{" "}
        <span className="font-medium">SQL</span> — paired with{" "}
        <span className="font-medium">Snowflake</span> for multi-cloud flexibility and{" "}
        <span className="font-medium">Terraform</span> for infrastructure-as-code
        deployments. I've built systems that handle real-time streaming with{" "}
        <span className="font-medium">Kafka</span> and deliver business insights through{" "}
        <span className="font-medium">Power BI</span>.
      </p>

      <p className="mb-3">
        What sets me apart is that I don't stop at pipelines. I extend data
        platforms into intelligent systems using{" "}
        <span className="font-medium">Azure AI Foundry</span> and{" "}
        <span className="font-medium">RAG-based architectures</span>, building
        production-grade GenAI solutions that sit on top of the reliable data
        foundations I've already engineered.
      </p>

      <p className="mb-3">
        Having recently graduated with my{" "}
        <span className="font-medium">
          Master's in Computer Science (Dec 2025)
        </span>{" "}
        from{" "}
        <span className="font-medium">Concordia University Chicago</span>, I'm
        open to relocation and ready to bring this full-stack data engineering
        perspective to a team solving hard problems at scale.
      </p>

      <p>
        Outside of work, I'm a morning guy — I enjoy{" "}
        <span className="font-medium">playing soccer</span>,{" "}
        <span className="font-medium">the gym</span>,{" "}
        <span className="font-medium">watching movies</span>, and spending time
        with my friends. I also{" "}
        <span className="font-medium">love making coffee and lattes</span>.
      </p>
    </motion.section>
  );
}
