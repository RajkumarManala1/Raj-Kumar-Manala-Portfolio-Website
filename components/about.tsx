"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

/* ── Inline SVG icons (sized to match text) ── */
const icons: Record<string, React.ReactNode> = {
  azure: (
    <svg viewBox="0 0 96 96" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <path d="M33.338 6.544h26.038l-27.03 80.455a4.46 4.46 0 0 1-4.24 3.045H4.482a4.46 4.46 0 0 1-4.218-5.89L28.1 9.59a4.46 4.46 0 0 1 4.24-3.045z" fill="#0078D4"/>
      <path d="M71.175 60.261H34.043a2.03 2.03 0 0 0-1.39 3.512l26.95 25.174a4.474 4.474 0 0 0 3.053 1.197h24.378L71.175 60.26z" fill="#0078D4" opacity=".7"/>
      <path d="M33.338 6.544a4.42 4.42 0 0 0-4.225 3.12L.378 84.109a4.46 4.46 0 0 0 4.104 5.935h24.49a4.69 4.69 0 0 0 3.792-3.2l5.078-14.94 17.756 16.596a4.54 4.54 0 0 0 2.907 1.144h24.476l-10.918-29.383-36.94.002 22.48-53.72H33.338z" fill="#0078D4"/>
      <path d="M66.595 9.364a4.46 4.46 0 0 0-4.24-2.82H33.787a4.46 4.46 0 0 1 4.24 2.82l27.837 74.564a4.46 4.46 0 0 1-4.24 6.096h28.568a4.46 4.46 0 0 0 4.24-6.096L66.595 9.364z" fill="#0078D4" opacity=".5"/>
    </svg>
  ),
  databricks: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <path fill="#FF3621" d="M24 2L4 13.5v21L24 46l20-11.5v-21L24 2zm0 4.5l14.5 8.4L24 23.3 9.5 14.9 24 6.5zM7 16.7l15 8.6v17.2L7 33.9V16.7zm17 25.8V25.3l15-8.6v17.2L24 42.5z"/>
    </svg>
  ),
  fabric: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <rect x="4" y="4" width="18" height="18" rx="2" fill="#117865"/>
      <rect x="26" y="4" width="18" height="18" rx="2" fill="#117865" opacity=".7"/>
      <rect x="4" y="26" width="18" height="18" rx="2" fill="#117865" opacity=".7"/>
      <rect x="26" y="26" width="18" height="18" rx="2" fill="#117865" opacity=".4"/>
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <g fill="#29B5E8">
        <rect x="22" y="4" width="4" height="40" rx="2"/>
        <rect x="22" y="4" width="4" height="40" rx="2" transform="rotate(60 24 24)"/>
        <rect x="22" y="4" width="4" height="40" rx="2" transform="rotate(120 24 24)"/>
        <circle cx="24" cy="6" r="3"/><circle cx="24" cy="42" r="3"/>
        <circle cx="39.6" cy="15" r="3"/><circle cx="8.4" cy="33" r="3"/>
        <circle cx="39.6" cy="33" r="3"/><circle cx="8.4" cy="15" r="3"/>
      </g>
    </svg>
  ),
  pyspark: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z" fill="#E25A1C" opacity=".15"/>
      <path d="M30 12c-1.5 0-6 2-6 8s6 8 6 8" stroke="#E25A1C" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M18 36c1.5 0 6-2 6-8s-6-8-6-8" stroke="#3776AB" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="31" cy="13" r="2.5" fill="#E25A1C"/>
      <circle cx="17" cy="35" r="2.5" fill="#3776AB"/>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <path d="M24 4c-5.5 0-5.2 2.4-5.2 2.4v4.9H24v1.5H11.8S6 12.3 6 24s5.1 11.2 5.1 11.2h3V30s-.2-5.1 5-5.1h8.7s4.8.1 4.8-4.7V10.7S34.2 4 24 4zm-4.8 3.9c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6.7-1.6 1.6-1.6z" fill="#3776AB"/>
      <path d="M24 44c5.5 0 5.2-2.4 5.2-2.4v-4.9H24v-1.5h12.2S42 35.7 42 24s-5.1-11.2-5.1-11.2h-3V18s.2 5.1-5 5.1h-8.7s-4.8-.1-4.8 4.7v9.5S13.8 44 24 44zm4.8-3.9c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6z" fill="#FFD43B"/>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <ellipse cx="24" cy="12" rx="16" ry="6" fill="#CC2927" opacity=".3"/>
      <ellipse cx="24" cy="12" rx="16" ry="6" fill="none" stroke="#CC2927" strokeWidth="2.5"/>
      <path d="M8 12v24c0 3.3 7.2 6 16 6s16-2.7 16-6V12" fill="none" stroke="#CC2927" strokeWidth="2.5"/>
      <path d="M40 24c0 3.3-7.2 6-16 6S8 27.3 8 24" fill="none" stroke="#CC2927" strokeWidth="2.5"/>
    </svg>
  ),
  powerbi: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <rect x="26" y="8" width="8" height="32" rx="2" fill="#F2C811"/>
      <rect x="16" y="16" width="8" height="24" rx="2" fill="#F2C811" opacity=".7"/>
      <rect x="6" y="24" width="8" height="16" rx="2" fill="#F2C811" opacity=".4"/>
      <rect x="36" y="14" width="8" height="26" rx="2" fill="#F2C811" opacity=".85"/>
    </svg>
  ),
  terraform: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <path d="M17.5 4v14l12.2 7V11L17.5 4z" fill="#7B42BC"/>
      <path d="M31.7 11v14l12.2-7V4L31.7 11z" fill="#7B42BC" opacity=".6"/>
      <path d="M3 7.5v14l12.2 7v-14L3 7.5z" fill="#7B42BC" opacity=".4"/>
      <path d="M17.5 27.5v14l12.2 7v-14l-12.2-7z" fill="#7B42BC"/>
    </svg>
  ),
  kafka: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <circle cx="24" cy="24" r="4" fill="#231F20"/>
      <circle cx="24" cy="12" r="3" fill="#231F20" opacity=".7"/>
      <circle cx="34" cy="18" r="3" fill="#231F20" opacity=".7"/>
      <circle cx="34" cy="30" r="3" fill="#231F20" opacity=".7"/>
      <circle cx="24" cy="36" r="3" fill="#231F20" opacity=".7"/>
      <circle cx="14" cy="30" r="3" fill="#231F20" opacity=".7"/>
      <circle cx="14" cy="18" r="3" fill="#231F20" opacity=".7"/>
      <line x1="24" y1="20" x2="24" y2="15" stroke="#231F20" strokeWidth="1.5"/>
      <line x1="27.5" y1="21.5" x2="31.5" y2="19.5" stroke="#231F20" strokeWidth="1.5"/>
      <line x1="27.5" y1="26.5" x2="31.5" y2="28.5" stroke="#231F20" strokeWidth="1.5"/>
      <line x1="24" y1="28" x2="24" y2="33" stroke="#231F20" strokeWidth="1.5"/>
      <line x1="20.5" y1="26.5" x2="16.5" y2="28.5" stroke="#231F20" strokeWidth="1.5"/>
      <line x1="20.5" y1="21.5" x2="16.5" y2="19.5" stroke="#231F20" strokeWidth="1.5"/>
    </svg>
  ),
  deltalake: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <path d="M24 4L6 38h36L24 4z" fill="#00ADD4" opacity=".2" stroke="#00ADD4" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 14L14 32h20L24 14z" fill="#00ADD4" opacity=".5"/>
      <path d="M24 22l-6 10h12l-6-10z" fill="#00ADD4"/>
    </svg>
  ),
  medallion: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <circle cx="24" cy="24" r="18" fill="none" stroke="#D4A017" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="12" fill="none" stroke="#D4A017" strokeWidth="2" opacity=".6"/>
      <circle cx="24" cy="24" r="6" fill="#D4A017" opacity=".4"/>
    </svg>
  ),
  synapse: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <circle cx="24" cy="10" r="5" fill="#0078D4"/>
      <circle cx="12" cy="34" r="5" fill="#0078D4" opacity=".7"/>
      <circle cx="36" cy="34" r="5" fill="#0078D4" opacity=".7"/>
      <line x1="24" y1="15" x2="14" y2="30" stroke="#0078D4" strokeWidth="2"/>
      <line x1="24" y1="15" x2="34" y2="30" stroke="#0078D4" strokeWidth="2"/>
      <line x1="17" y1="34" x2="31" y2="34" stroke="#0078D4" strokeWidth="2"/>
    </svg>
  ),
  sparksql: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <path d="M24 4l-6 14h12L24 4z" fill="#E25A1C"/>
      <ellipse cx="24" cy="30" rx="14" ry="5" fill="#CC2927" opacity=".3"/>
      <ellipse cx="24" cy="30" rx="14" ry="5" fill="none" stroke="#CC2927" strokeWidth="2"/>
      <path d="M10 30v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" fill="none" stroke="#CC2927" strokeWidth="2"/>
    </svg>
  ),
  aifoundry: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <circle cx="24" cy="24" r="18" fill="#0078D4" opacity=".12"/>
      <path d="M16 32l8-22 8 22" fill="none" stroke="#0078D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="18.5" y1="26" x2="29.5" y2="26" stroke="#0078D4" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="10" r="2" fill="#0078D4"/>
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 48 48" className="inline-block w-[1em] h-[1em] mr-[0.15em] align-[-0.1em]">
      <path d="M14 28c0 0-1.5 2 4 4s14 1 18-2" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M38 28l2 1.5-3 1" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 20l4 12 4-9 4 9 4-12" stroke="#252F3E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

/* ── Tiny helper: icon + bold label ── */
const Tech = ({ k, children }: { k: string; children: React.ReactNode }) => (
  <span className="font-medium whitespace-nowrap">
    {icons[k]}{children}
  </span>
);

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
        <Tech k="azure">Microsoft Azure ecosystem</Tech> and{" "}
        <Tech k="aws">AWS</Tech>. I specialize in turning raw, complex data
        into trusted, analytics-ready assets that enterprises can act on with
        confidence.
      </p>

      <p className="mb-3">
        My core strength is{" "}
        <span className="font-medium">end-to-end data engineering</span>. I
        design and orchestrate pipelines using{" "}
        <Tech k="azure">Azure Data Factory</Tech>,{" "}
        <Tech k="databricks">Databricks</Tech>,{" "}
        <Tech k="synapse">Synapse</Tech>, and{" "}
        <Tech k="fabric">Microsoft Fabric</Tech>, applying{" "}
        <Tech k="medallion">Medallion Architecture</Tech> and{" "}
        <Tech k="deltalake">Delta Lake</Tech> to build lakehouses that are
        clean, performant, and governed. My daily toolkit includes{" "}
        <Tech k="pyspark">PySpark</Tech>,{" "}
        <Tech k="sparksql">Spark SQL</Tech>,{" "}
        <Tech k="python">Python</Tech>, and{" "}
        <Tech k="sql">SQL</Tech> — paired with{" "}
        <Tech k="snowflake">Snowflake</Tech> for multi-cloud flexibility and{" "}
        <Tech k="terraform">Terraform</Tech> for infrastructure-as-code
        deployments. I've built systems that handle real-time streaming with{" "}
        <Tech k="kafka">Kafka</Tech> and deliver business insights through{" "}
        <Tech k="powerbi">Power BI</Tech>.
      </p>

      <p className="mb-3">
        What sets me apart is that I don't stop at pipelines. I extend data
        platforms into intelligent systems using{" "}
        <Tech k="aifoundry">Azure AI Foundry</Tech> and{" "}
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