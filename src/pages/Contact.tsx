
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = [
    { name: "GitHub", icon: "🔗", url: "https://github.com/suhailaboobakar", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/suhail-aboobakar-9a0162227/", color: "hover:text-blue-400" },
    // { name: "Twitter", icon: "🐦", url: "#", color: "hover:text-cyan-400" },
    { name: "Email", icon: "📧", url: "mailto:suhail17x@gmail.com", color: "hover:text-green-400" },
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
              Contact
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss how we can work together to bring
            your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                  />
                ) : isSubmitted ? (
                  "Message Sent! ✅"
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities, creative ideas, 
                or potential collaborations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-300">Trivandrum, Kerala</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <span className="text-gray-300">+91-8129016687</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">✉️</span>
                  <span className="text-gray-300">suhail17x@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 ${link.color}`}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-500/30"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                💡 Quick Response Time
              </h4>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. 
                For urgent matters, please call directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
