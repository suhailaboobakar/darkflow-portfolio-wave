
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="min-h-screen pt-32 pb-20 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
            and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </motion.div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/30 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Hi, I'm John Doe
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a full-stack developer with over 5 years of experience creating
              digital solutions that combine functionality with stunning visual design.
              My passion lies in transforming complex problems into simple, elegant
              solutions.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community through blogs and tutorials.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">5+</h3>
                <p className="text-gray-300">Years Experience</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-2">50+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold text-pink-400 mb-2">15+</h3>
                <p className="text-gray-300">Technologies</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-2">100%</h3>
                <p className="text-gray-300">Client Satisfaction</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
