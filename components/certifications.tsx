"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data"; // Import certifications data from your data file
import { useSectionInView } from "@/lib/hooks"; // If you're using this hook to track scroll position

export default function Certifications() {
  const { ref } = useSectionInView("Certifications", 0.5); // Tracking section visibility on scroll

  return (
    <section ref={ref} id="certifications" className="scroll-mt-28 mb-28">
      <SectionHeading>My Certifications</SectionHeading>
      <div>
        {certificationsData.map((cert, index) => (
          <div key={index} className="mb-6">
            <div className="text-2xl font-medium">{cert.title}</div>
            <div className="text-sm text-gray-600">{cert.issuer} - {cert.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
