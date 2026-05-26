"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
<Image
  src="/rajspic-new1.png"
  alt="Raj portrait"
  width="280"
  height="280"
  quality="95"
  priority={true}
  className="h-100 w-80 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
/>

          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-5xl origin-[70%_70%]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 20, -10, 20, -5, 10, 0],
            }}
            transition={{
              opacity: { duration: 0.3, delay: 0.1 },
              scale: { type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 },
              rotate: {
                duration: 1.2,
                delay: 0.8,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              },
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

  <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I am Raj Kumar.</span> I am a{" "}
        <span className="font-bold">Cloud AI & Data Engineer</span> with{" "}
        <span className="font-bold">7+ years</span> of experience. I architect{" "}
        <span className="font-bold">secure cloud foundations</span> and build{" "}
        <span className="font-bold">intelligent data solutions</span>, bridging
        the gap between <span className="italic">Robust Data Engineering & Generative AI</span>.
      </motion.h1>
      
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group relative px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in Touch{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>

        <a
          className="group px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 cursor-pointer
            bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-900 shadow-sm hover:shadow-md
            dark:bg-transparent dark:text-white dark:border-white/30 dark:hover:border-white dark:hover:bg-white/10"
          href="/Rajkumar_Manala_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-0.5 transition-transform duration-300" />
        </a>

        <a
          className="px-6 py-3 flex items-center gap-0 text-lg rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 cursor-pointer font-bold
            bg-white text-[#0A66C2] border-2 border-gray-300 hover:border-[#0A66C2] shadow-sm hover:shadow-lg hover:shadow-[#0A66C2]/20
            dark:bg-transparent dark:border-white/30 dark:hover:border-[#0A66C2]"
          href="https://www.linkedin.com/in/raj-kumar-manala-ab1b78134"
          target="_blank"
        >
          Linked
          <span className="bg-[#0A66C2] text-white px-1 py-0.5 rounded text-[0.85em] ml-[1px]">in</span>
        </a>

        <a
          className="px-6 py-3 flex items-center gap-2 text-lg rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 cursor-pointer font-semibold
            bg-gray-900 text-white shadow-md hover:shadow-lg hover:bg-black
            dark:bg-white dark:text-gray-900 dark:hover:bg-white/90"
          href="https://github.com/RajkumarManala1"
          target="_blank"
        >
          <FaGithubSquare className="text-xl" />
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
