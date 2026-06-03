"use client";

import React, { useRef, useState, useCallback } from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function CertificationCard({
  title,
  issuer,
  date,
  imageUrl,
  link,
}: {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  link: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // 3D tilt state
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [gloss, setGloss] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
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
        scale: scaleProgress,
        opacity: opacityProgress,
        perspective: "1000px",
      }}
      className="group"
    >
      <div
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
        className="relative border border-gray-300 p-4 rounded-lg overflow-hidden transition-colors dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-white/[0.15]"
      >
        {/* Gloss / shine overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-lg transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${gloss.x}% ${gloss.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />

        {/* Subtle top border glow on hover */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] z-30 rounded-t-lg transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background:
              "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.5), transparent)",
          }}
        />

        <div className="relative z-20 flex items-center gap-4">
          {/* Badge Image */}
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`${title} badge`}
              width={100}
              height={100}
              className="rounded-full transition-all duration-500 ease-out
                group-hover:scale-[1.04]
                group-hover:-rotate-2
                group-hover:drop-shadow-lg"
            />
          )}
          <div>
            <div className="text-xl font-medium">{title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {issuer} - {date}
            </div>
          </div>
        </div>
        {/* Certification Link */}
        {link && (
          <div className="relative z-20 flex justify-center mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white hover:bg-gray-800 py-2 px-6 rounded-full text-sm text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-900/20 dark:hover:shadow-white/20"
            >
              View Certification
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const { ref } = useSectionInView("Certifications", 0.5);

  return (
    <section ref={ref} id="certifications" className="scroll-mt-28 mb-28">
      <SectionHeading>My Certifications</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            imageUrl={cert.imageUrl}
            link={cert.link}
          />
        ))}
      </div>
    </section>
  );
}
