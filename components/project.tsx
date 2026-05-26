"use client";

import { useRef, useState, useCallback } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // 3D tilt state
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [gloss, setGloss] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      const glossX = (x / rect.width) * 100;
      const glossY = (y / rect.height) * 100;

      setTilt({ rotateX, rotateY });
      setGloss({ x: glossX, y: glossY });
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setGloss({ x: 50, y: 50 });
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        perspective: "1000px",
      }}
      className="group"
    >
      <section
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: isHovered
            ? "transform 0.1s ease-out, box-shadow 0.3s ease"
            : "transform 0.5s ease-out, box-shadow 0.5s ease",
          boxShadow: isHovered
            ? "0 20px 40px rgba(0, 0, 0, 0.15), 0 0 30px rgba(99, 102, 241, 0.08)"
            : "0 4px 12px rgba(0, 0, 0, 0.05)",
          transformStyle: "preserve-3d",
        }}
        className="bg-gray-100 border border-black/5 rounded-xl overflow-hidden sm:pr-8 relative sm:min-h-[20rem] h-full transition-colors sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/[0.15]"
      >
        {/* Gloss / shine overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${gloss.x}% ${gloss.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />

        {/* Subtle top border glow on hover */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] z-30 rounded-t-xl transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background:
              "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.5), transparent)",
          }}
        />

        <div className="relative z-20 pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[52%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-[0.85rem]">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:bg-white/[0.12] dark:text-white/80 border border-transparent dark:border-white/[0.08] transition-colors duration-200 hover:dark:bg-white/[0.2]"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full w-fit
                bg-gray-900 text-white hover:bg-gray-800
                dark:bg-white dark:text-gray-900 dark:hover:bg-white/90
                shadow-md hover:shadow-lg hover:shadow-gray-900/20 dark:hover:shadow-white/20
                transition-all duration-300 hover:gap-3 hover:scale-105 active:scale-100"
            >
              <FaGithub className="text-lg" />
              View on GitHub
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
            </a>
          )}
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[31rem] rounded-t-lg shadow-2xl
            transition-all duration-500 ease-out
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
