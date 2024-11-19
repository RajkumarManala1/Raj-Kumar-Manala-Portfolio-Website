"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Certifications() {
  const { ref } = useSectionInView("Certifications", 0.5);

  return (
    <section ref={ref} id="certifications" className="scroll-mt-28 mb-28">
      <SectionHeading>My Certifications</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-600"
          >
            <div className="flex items-center gap-4">
              {/* Badge Image */}
              {cert.imageUrl && (
                <Image
                  src={cert.imageUrl}
                  alt={`${cert.title} badge`}
                  width={100} // Adjusted size
                  height={100} // Adjusted size
                  className="rounded-full"
                />
              )}
              <div>
                <div className="text-xl font-medium">{cert.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer} - {cert.date}
                </div>
              </div>
            </div>
            {/* Certification Link */}
            {cert.link && (
              <div className="flex justify-center mt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white hover:bg-gray-800 py-2 px-6 rounded-full text-sm text-center transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  View Certification
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
