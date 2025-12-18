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
    I am a <span className="font-medium">Cloud & Data Engineer</span>, skilled at
    transforming raw data into actionable insights. With a solid foundation in
    Computer Science and <span className="font-medium">over 6+ years of experience </span> 
    in <span className="font-medium">Cloud and Data Engineering</span> at 
    <span className="font-medium"> LTI Mindtree as a vendor with Microsoft</span>, 
    I am deeply passionate about leveraging cloud technologies to optimize and 
    streamline data workflows.
  </p>
  <p className="mb-3">
    As I graduated on <span className="font-medium">December 2025</span> from 
    the prestigious <span className="font-medium">Concordia University Chicago</span>, 
    I am excited to transition into the next phase of my career in the 
    ever-evolving field of Cloud Data Engineering. My diverse experience has equipped 
    me with the skills to tackle complex challenges, drive impactful solutions, and stay 
    ahead in the dynamic tech landscape.
  </p>
  <p className="mb-3">
    Additionally, I am open to <span className="font-medium">relocation</span> and eager 
    to join an innovative team where I can learn, grow, and contribute meaningfully. 
    If you're searching for a motivated and dedicated Cloud/Data Engineer ready to make 
    a substantial impact, let’s connect!
  </p>
  <p>
    Outside of work, I enjoy <span className="font-medium">playing soccer, gym</span>, 
    <span className="font-medium">watching movies</span>, and spending time with my friends. 
  </p>
</motion.section>

  );
}
