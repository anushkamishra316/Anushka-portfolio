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
    "Full Stack Developer",
    
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
 
{/* <div className="flex justify-center mt-8">
  <Button asChild className="rounded-full bg-indigo-600 text-white px-6 py-3 hover:bg-indigo-700">
    <a href="/Anushka_CV.pdf" download>
      Download CV
    </a>
  </Button>
</div> */}

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
      // github: "https://github.com/anushkamishra316",
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
      // github: "https://github.com/anushkamishra316",
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
    src="/Anushka Photo.jpg"
    alt="Anushka Mishra"
    width={250}  // Increased from 170
    height={250} // Increased from 170
    className="rounded-full mx-auto border-4 border-indigo-500 shadow-xl object-cover"
  />

  <h1 className="text-4xl md:text-5xl font-extrabold mt-6">
    Anushka Mishra
  </h1>

  <p className="mt-3 text-lg text-indigo-400 h-7">
    {text}|
  </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <Button asChild className="rounded-full bg-white text-black hover:bg-gray-200">

            <a href="https://github.com/anushkamishra316" target="_blank">

              <Github className="w-4 h-4 mr-2" /> GitHub

            </a>

          </Button>

<Button asChild variant="outline" className="rounded-full bg-white text-black hover:bg-gray-200">

            <a

              href="https://www.linkedin.com/in/anushka-mishra-b07b01288"

              target="_blank"

            >
<Linkedin className="w-4 h-4 mr-2" /> LinkedIn

            </a>
 </Button>



          <Button asChild variant="outline" className="rounded-full bg-white text-black hover:bg-gray-200">

            <a href="mailto:anushkam1915@gmail.com">

              <FileText className="w-4 h-4 mr-2" /> Contact

            </a>

          </Button>

        </div>

      </motion.section>


      {/* Career Objective */}
{/* About Me Section */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-8 text-left border-b-2 border-white/10 pb-2 w-fit">
          About Me
        </h2>

        <div className="text-gray-400 leading-relaxed text-left space-y-6 text-lg">
          <p>
            Hi, I'm <span className="text-white font-bold">Anushka Mishra</span>, 
            a software developer with a deep love for <span className="text-white font-bold">Full Stack Development</span>, 
            <span className="text-white font-bold">Responsive Design</span>, and solving real-world problems through code.
          </p>

          <p>
            My journey into technology is driven by a passion for building applications that are not 
            only functional but also user-centric. I've worked on <span className="text-white font-bold">multiple full-stack projects  </span> 
            using modern frameworks like React.js and Node.js to create seamless digital experiences.
            One of my proudest achievements is developing <span className="text-white font-bold">Share & Care</span>, 
            a food donation platform that connects donors with recipients to reduce waste and help the community.
          </p>

          <p>
            These days, I'm focused on building <span className="text-white font-bold">smart, scalable software solutions</span> that 
            make a real impact—whether it's a web app, a database system, or something completely innovative.
          </p>
        </div>
      </section>


      {/* Technical Skills */}
   
<section className="max-w-4xl mx-auto py-10 px-6">
  <h2 className="text-3xl font-bold mb-8 text-left">Technical Skills</h2>

  <div className="space-y-6">
    {/* Languages & Frontend Row */}
    <div className="flex flex-wrap items-center gap-3">
      <span className="px-5 py-2 bg-gray-200 text-black font-medium rounded-full text-sm">
        Frontend
      </span>
      {["HTML", "CSS", "JavaScript", "React.js"].map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ scale: 1.05 }}
          className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium shadow-md"
        >
          {skill}
        </motion.span>
      ))}
    </div>

    {/* Backend & Database Row */}
    <div className="flex flex-wrap items-center gap-3">
      <span className="px-5 py-2 bg-gray-200 text-black font-medium rounded-full text-sm">
        Backend
      </span>
      {["Node.js", "Express.js", "SQL", "MySQL", "Firebase"].map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ scale: 1.05 }}
          className="px-5 py-2 bg-purple-600 text-white rounded-full text-sm font-medium shadow-md"
        >
          {skill}
        </motion.span>
      ))}
    </div>

    {/* Fundamentals & Tools Row */}
    <div className="flex flex-wrap items-center gap-3">
      <span className="px-5 py-2 bg-gray-200 text-black font-medium rounded-full text-sm">
        Core & Tools
      </span>
      {["C++", "DSA", "OOP", "GitHub", "VS Code"].map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ scale: 1.05 }}
          className="px-5 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium shadow-md"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
</section>

      {/* Education */}
      {/* Education */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-8 text-left border-b-2 border-white/10 pb-2 w-fit">
          Education
        </h2>
        
        {/* Removed 'relative pl-6 border-l-2 border-indigo-500/50' to delete the left line */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              Bansal Institute of Science & Technology, Bhopal
            </h3>
            <p className="text-indigo-400 font-medium">
              Bachelor of Technology in Information Technology
            </p>
          </div>
          
          <p className="text-gray-400 leading-relaxed">
            I am currently pursuing my degree with a focus on software engineering and 
            system design. My academic performance remains strong with a 
            <span className="text-white font-bold ml-1">CGPA of 8.06</span> 
          </p>
        </div>
      </section>

  {/* Internship */}
      {/* Internship */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-8 text-left border-b-2 border-white/10 pb-2 w-fit">
          Internship
        </h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                Microsoft Azure – Future Ready Talent (Virtual)
              </h3>
              <p className="text-indigo-400 font-medium">
                May 2024 – July 2024
              </p>
            </div>

            {/* GitHub Link for Internship */}
            <Button asChild variant="outline" className="rounded-full bg-white text-black hover:bg-gray-200 border-none px-4 h-9">
              <a href="https://github.com/anushkamishra316" target="_blank">
                <Github className="https://github.com/anushkamishra316/ECOGROW" /> View Project
              </a>
            </Button>
          </div>
          
          <div className="text-gray-400 leading-relaxed space-y-4 pt-2">
            <p>
              During this virtual internship, I focused on <span className="text-white font-bold">Web Development</span> where I 
              developed and deployed a responsive web application using <span className="text-white font-bold">HTML, CSS, and JavaScript</span>.
            </p>
            
            <p>
              I gained hands-on experience with <span className="text-white font-bold">Azure tools</span> for hosting, 
              deployment, and cloud-based integration, ensuring the application was scalable and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-10 text-left border-b-2 border-white/10 pb-2 w-fit">
          Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="space-y-4">
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>
              
              {/* Tech Stack Pills - Minimalist Style */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description with Bold Highlights */}
              <p className="text-gray-400 leading-relaxed text-lg text-left">
                {idx === 0 ? (
                  <>
                    Built a <span className="text-white font-bold">full-stack platform</span> connecting food donors with recipients for real-time donation requests. 
                    Integrated <span className="text-white font-bold">Firebase authentication</span> and developed donor registration, 
                    request tracking, and search functionality to reduce community food waste.
                  </>
                ) : (
                  <>
                    Developed a <span className="text-white font-bold">digital tourism platform</span> showcasing India’s cultural heritage 
                    with interactive visuals. Created under the <span className="text-white font-bold">Smart India Hackathon</span> to 
                    promote digital tourism through structured, state-wise details and clean UI.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
     {/* Certificates & Achievements */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-8 text-left border-b-2 border-white/10 pb-2 w-fit">
          Certificates & Achievements
        </h2>
        
        <div className="text-gray-400 leading-relaxed text-left space-y-6 text-lg">
          <p className="flex items-start gap-3">
            <span className="text-white mt-1">▹</span>
            <span>
              Certified in <span className="text-white font-bold">Database Management Systems (DBMS)</span> – NPTEL, IIT Kharagpur
            </span>
          </p>

          <p className="flex items-start gap-3">
            <span className="text-white mt-1">▹</span>
            <span>
              Certified in <span className="text-white font-bold">JavaScript</span> – Cisco Networking Academy
            </span>
          </p>

          <p className="flex items-start gap-3">
            <span className="text-white mt-1">▹</span>
            <span>
              <span className="text-white font-bold">Smart India Hackathon Nominee</span> – 2023 & 2024
            </span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-white border-t border-gray-800/50 mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-lg">
          <p className="flex items-center gap-2">
            <span className="text-white">📞</span> 
            <span className="font-semibold text-white">
              +91 91610 45470
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-white">📧</span>
            <span className="font-semibold text-white">
              anushkam1915@gmail.com
            </span>
          </p>
        </div>
        <p className="mt-6 text-sm opacity-50 text-gray-400">
          © {new Date().getFullYear()} Anushka Mishra
        </p>
      </footer>

     
    </div>
  );
}