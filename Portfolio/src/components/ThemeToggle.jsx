
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedVideo]);

  return (
    <div className={`p-6 ${selectedVideo ? "blur-sm" : ""}`}>
      {/* Full-Screen Video Modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-lg flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <video controls autoPlay className="w-full rounded-lg">
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}

      {/* Section Rendering */}
      {Object.entries(projectsData).map(([category, projects]) => (
        <section key={category} className="mt-10">
          <h2 className="text-2xl text-white font-bold mb-4 capitalize">
            {category.replace(/([A-Z])/g, " $1")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onVideoClick={() => setSelectedVideo(project.video)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;

// ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, video, description, github, onVideoClick }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
      <video
        controls
        className="w-full rounded-lg cursor-pointer"
        onClick={onVideoClick}
      >
        <source src={video} type="video/mp4" />
      </video>
      <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        View Code →
      </a>
    </div>
  );
};

export default ProjectCard;

// Sample projectsData.js
export const projectsData = {
  htmlCssProjects: [
    {
      id: 1,
      title: "Portfolio Website",
      video: "/videos/portfolio.mp4",
      description: "A modern portfolio website using HTML & CSS.",
      github: "https://github.com/yourgithub/portfolio",
    },
  ],
  htmlCssJsProjects: [
    {
      id: 2,
      title: "Weather App",
      video: "/videos/weather.mp4",
      description: "A weather app with real-time API integration.",
      github: "https://github.com/yourgithub/weather-app",
    },
  ],
  reactProjects: [
    {
      id: 3,
      title: "AI Blog Website",
      video: "/videos/ai-blog.mp4",
      description: "An AI-powered blog site built with React.",
      github: "https://github.com/yourgithub/ai-blog",
    },
  ],
};
