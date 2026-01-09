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
        I am a <span className="font-medium">Cloud AI & Data Engineer</span> with{" "}
        <span className="font-medium">6+ years of experience</span>. My goal is simple: 
        I build secure cloud systems that turn raw data into intelligent action within the{" "}
        <span className="font-medium">Microsoft Azure Ecosystem</span>.
      </p>

      <p className="mb-3">
        My technical foundation is rooted in <span className="font-medium">Data Engineering</span>. 
        I believe that AI is only as good as the data feeding it. That’s why I specialize 
        in using tools like <span className="font-medium">Azure Data Factory</span>,{" "}
        <span className="font-medium">Databricks</span>, and{" "}
        <span className="font-medium">SQL</span> to build clean, high-performance pipelines 
        that enterprises can actually trust.
      </p>

      <p className="mb-3">
        I build upon this stability with advanced <span className="font-medium">AI Engineering</span>. 
        Moving beyond simple prototypes, I architect{" "}
        <span className="font-medium">Production-Grade GenAI</span> solutions. Using{" "}
        <span className="font-medium">Azure AI Foundry</span> and{" "}
        <span className="font-medium">RAG (Retrieval-Augmented Generation)</span>, I create 
        custom "Copilots" and intelligent search systems that understand your internal business data, 
        driving real operational efficiency.
      </p>

      <p className="mb-3">
        Having recently graduated with my <span className="font-medium">Master's in Computer Science (Dec 2025)</span>{" "}
        from <span className="font-medium">Concordia University Chicago</span>, I am open to{" "}
        <span className="font-medium">relocation</span> and eager to bring this blend of 
        data stability and AI innovation to a new team. Let's connect!
      </p>

      <p>
        Outside of work, I enjoy <span className="font-medium">playing soccer, the gym</span>,{" "}
        <span className="font-medium">watching movies</span>, and spending time with my friends.
      </p>
    </motion.section>
  );
}