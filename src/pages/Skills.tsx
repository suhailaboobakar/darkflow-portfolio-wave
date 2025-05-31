
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SkillBar = ({ skill, percentage, delay }: { skill: string; percentage: number; delay: number }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-white">{skill}</span>
        <span className="text-cyan-400 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${animatedPercentage}%` }}
          transition={{ duration: 1.5, delay: delay / 1000, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ 
  title, 
  skills, 
  delay 
}: { 
  title: string; 
  skills: Array<{ name: string; level: number }>; 
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
    >
      <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
        {title}
      </h3>
      {skills.map((skill, index) => (
        <SkillBar
          key={skill.name}
          skill={skill.name}
          percentage={skill.level}
          delay={delay * 1000 + index * 200}
        />
      ))}
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    // { name: "Three.js", level: 85 },
    // { name: "Framer Motion", level: 88 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "Express.js", level: 78 },
  ];

  const toolsSkills = [
    { name: "Git/GitHub", level: 95 },
    { name: "Lovable", level: 82 },
    { name: "Vercel", level: 80 },
    { name: "Render", level: 88 },
    { name: "VS Code", level: 98 },
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
              Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend"
            skills={frontendSkills}
            delay={0.2}
          />
          <SkillCategory
            title="Backend"
            skills={backendSkills}
            delay={0.4}
          />
          <SkillCategory
            title="Tools & Others"
            skills={toolsSkills}
            delay={0.6}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-300 mb-8">
            Always learning and exploring new technologies to stay at the forefront of development.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 backdrop-blur-sm"
          >
            <span className="text-cyan-400 font-semibold">💡 Currently Learning: </span>
            <span className="text-white">AI/ML, WebAssembly</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
