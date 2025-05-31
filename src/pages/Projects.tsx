
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ 
  project, 
  index 
}: { 
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
    github: string;
  };
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500"
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <div className="relative overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <span className="text-6xl">{project.image}</span>
        </div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 border border-gray-500 text-gray-300 text-center rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "🛒",
      link: "#",
      github: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses, file sharing, and group messaging capabilities.",
      tech: ["Next.js", "WebSocket", "OpenAI", "MongoDB"],
      image: "🤖",
      link: "#",
      github: "#"
    },
    {
      title: "3D Portfolio Website",
      description: "Interactive 3D portfolio website with Three.js animations, particle systems, and immersive user experience.",
      tech: ["React", "Three.js", "Framer Motion", "WebGL"],
      image: "🌐",
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates, team workspaces, and advanced analytics.",
      tech: ["Vue.js", "Firebase", "TypeScript", "Chart.js"],
      image: "📋",
      link: "#",
      github: "#"
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with portfolio management and market analysis tools.",
      tech: ["React", "D3.js", "WebSocket", "CoinGecko API"],
      image: "₿",
      link: "#",
      github: "#"
    },
    {
      title: "Social Media App",
      description: "Full-featured social media platform with posts, stories, real-time messaging, and content moderation.",
      tech: ["React Native", "GraphQL", "AWS", "Redis"],
      image: "📱",
      link: "#",
      github: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-32 pb-20 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and contributions to various projects
            across different domains and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">
            Want to see more projects or collaborate on something amazing?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
