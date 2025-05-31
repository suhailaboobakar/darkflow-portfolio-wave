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
              Hi, I'm Suhail
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I’m a Computer Science engineering graduate with a strong
              passion for building modern, scalable web applications. I
              specialize in Full Stack Web Development and am continuously
              sharpening my skills in technologies like React, Node.js, Express,
              and PostgreSQL. Over time, I’ve built multiple projects that solve
              real-world problems and showcase my ability to craft interactive,
              responsive, and high-performance web experiences.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              What sets me apart is my hunger to learn and my commitment to
              writing clean, maintainable code. I thrive in collaborative
              environments, but I’m just as comfortable taking initiative and
              working independently. Whether you're a recruiter looking for a
              dedicated developer or a client in need of a solid web solution,
              I’d love to bring value to your team or project. Let’s build
              something amazing together!
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">1+</h3>
                <p className="text-gray-300">Years Experience</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-2">
                  5+
                </h3>
                <p className="text-gray-300">Projects Completed</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold text-pink-400 mb-2">
                  15+
                </h3>
                <p className="text-gray-300">Technologies</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  100%
                </h3>
                <p className="text-gray-300">Commitment</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
