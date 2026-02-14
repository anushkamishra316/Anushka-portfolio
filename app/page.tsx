"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
 
  const roles = [
    "Information Technology Student",
    "Web Developer",
    "React Developer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  const skills = [
    "C++",
    "SQL",
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "MySQL",
    "Data Structures & Algorithms",
    "OOP",
    "DBMS",
    "GitHub",
    "VS Code",
  ];

  const projects = [
    {
      title: "Share & Care – Food Donation Website",
      description:
        "Built a full-stack platform connecting food donors with recipients for real-time donation requests. Integrated Firebase authentication and developed donor registration, request tracking, and search functionality.",
      tech: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Firebase",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/anushkamishra316",
    },
    {
      title: "Bharat Darshan – Tourism Website",
      description:
        "Developed a digital tourism platform showcasing India’s cultural heritage with interactive visuals and state-wise details. Created under Smart India Hackathon to promote digital tourism.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
      ],
      github: "https://github.com/anushkamishra316",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center py-24 px-6"
      >
        <Image
          src="/profile_photo.jpg.jpg"
          alt="Anushka Mishra"
          width={170}
          height={170}
          className="rounded-full mx-auto border-4 border-indigo-500 shadow-xl"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold mt-6">
          Anushka Mishra
        </h1>

        <p className="mt-3 text-lg text-indigo-400 h-7">
          {text}|
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button asChild className="rounded-full">
            <a href="https://github.com/anushkamishra316" target="_blank">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </Button>

          <Button asChild variant="outline" className="rounded-full">
            <a
              href="https://www.linkedin.com/in/anushka-mishra-b07b01288"
              target="_blank"
            >
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
          </Button>

          <Button asChild variant="outline" className="rounded-full">
            <a href="mailto:anushkam1915@gmail.com">
              <FileText className="w-4 h-4 mr-2" /> Contact
            </a>
          </Button>
        </div>
      </motion.section>

      {/* Career Objective */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Career Objective</h2>
        <p className="text-gray-300 leading-relaxed">
          As a dedicated Information Technology student, I am driven by a passion
          for innovation and committed to continuous learning. I thrive on
          exploring new challenges and contributing to impactful projects.
          With strong teamwork and communication skills, I aim to deliver
          efficient solutions while growing in the tech industry.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-gray-800/80 backdrop-blur rounded-xl py-4 text-center shadow-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <p className="text-gray-300">
          <strong>Bansal Institute of Science & Technology, Bhopal</strong>
          <br />
          Bachelor of Technology in Information Technology
          <br />
          CGPA: 8.06 (till 6th Semester)
        </p>
      </section>

      {/* Internship */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Internship</h2>
        <p className="text-gray-300">
          <strong>Microsoft Azure – Future Ready Talent (Virtual)</strong>
          <br />
          May 2024 – July 2024
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-400 space-y-2">
          <li>Completed virtual internship focused on web development.</li>
          <li>
            Developed and deployed a responsive web application using HTML, CSS,
            and JavaScript.
          </li>
          <li>
            Utilized Azure tools for hosting, deployment, and cloud-based integration.
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Certificates & Achievements</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Certified in Database Management Systems (DBMS) – NPTEL, IIT Kharagpur</li>
          <li>Certified in JavaScript – Cisco Networking Academy</li>
          <li>Smart India Hackathon Nominee – 2023 & 2024</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-gray-400">
        <p>📞 +91 91610 45470 | 📧 anushkam1915@gmail.com</p>
        <p className="mt-2">
          © {new Date().getFullYear()} Anushka Mishra
        </p>
      </footer>
    </div>
  );
}