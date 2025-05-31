
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Download } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  const handleResumeDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add this file to the public folder
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="relative">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </motion.span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Resume Download Button */}
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Download size={16} />
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
              className="w-6 h-6 flex flex-col justify-center space-y-1"
            >
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Resume Download Button */}
            <motion.button
              onClick={() => {
                handleResumeDownload();
                setIsMobileMenuOpen(false);
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 w-full text-left px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg"
            >
              <Download size={16} />
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
