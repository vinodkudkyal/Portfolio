import { GitHub, Linkedin, Mail ,Instagram, Phone } from 'react-feather';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Code, 
  Briefcase,
  Award,
  Layout
} from 'lucide-react';
import ContactForm from "./components/Contact";
// import certificate1 from './components/files/certificate1.pdf';  
// import certificate2 from './components/files/certificate2.pdf';  
// import certificate3 from './components/files/certificate3.pdf';  
// import certificate4 from './components/files/certificate4.pdf';  
// import certificate5 from './components/files/certificate5.pdf';  
// import certificate6 from './components/files/certificate6.pdf';  
// import resume from './components/files/resume.pdf';  
import profile from "./src/components/files/profile.png"; 
// import SWC from "./components/files/CWS.png"; 
// import SG from "./components/files/SG.png"; 
// import SLD from "./components/files/SLD.png"; 
// import VSM from "./components/files/VMS.png"; 


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };


  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  // const slideIn = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0 },
  // };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-center h-16">
      <div className="flex space-x-2 md:space-x-4 items-center">
        {[ 
          { id: 'home', icon: <Home size={18} />, label: 'Home' },
          { id: 'about', icon: <User size={18} />, label: 'About' },
          { id: 'skills', icon: <Code size={18} />, label: 'Skills' },
          { id: 'projects', icon: <Briefcase size={18} />, label: 'Projects' },
          // { id: 'tech-stack', icon: <Layout size={18} />, label: 'Stack' },
          { id: 'certifications', icon: <Award size={18} />, label: 'Certificats' },
          { id: 'contact', icon: <Mail size={18} />, label: 'Contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
              activeSection === item.id
                ? 'text-white bg-blue-600 shadow-lg ring-2 ring-blue-600'
                : 'text-gray-600'
            }`}
          >
            {item.icon}
            <span className="ml-1 hidden md:inline">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
</nav>


      {/* Main Content */}
      <div className="pt-16">
       {/* Header Section - Enhanced with geometric patterns and animations */}
       <motion.section
  id="home"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  variants={fadeIn}
  className="min-h-screen relative overflow-hidden"
>
  {/* Decorative background elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative max-w-6xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen lg:flex-row lg:items-center lg:justify-between">
    {/* ile Picture Section */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mb-8 lg:mb-0 lg:w-1/3"
    >
      <motion.div
        // Bounce animation when not hovered, stays in the same place
        animate={{
          y: [0, 10, 0],  // Small bounce effect, limited to 10px
        }}
        transition={{
          duration: 2, // Slow bounce duration
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-80 h-80 rounded-full overflow-hidden ring-4 ring-white shadow-2xl"
      >
        <motion.img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </motion.div>
      <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
        <Code size={24} />
      </div>
    </motion.div>


    {/* Text and Buttons Section */}
    <div className="text-center lg:text-left lg:w-2/3">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-6xl font-bold mb-4 text-gray-800"
      >
        Vinod Kudkyal
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl text-gray-600 mb-8"
      >
        Java Developer & AI & ML Enthusiast
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex justify-center lg:justify-start space-x-4"
      >
        {/* View Projects Button with Smooth Scroll */}
        <button
          onClick={() => {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
        >
          View Projects
        </button>
        {/* Contact Me Button with Smooth Scroll */}
        <button
          onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
        >
          Contact Me
        </button>
      </motion.div>
    </div>
  </div>
</motion.section>


        {/* About Section - Left-aligned with modern design */}
        <motion.section
  id="about"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  variants={slideIn}
  className="min-h-screen flex items-center bg-white"
>
  <div className="max-w-6xl mx-auto px-4 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* About Me Text */}
      <div className="order-2 md:order-1">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">About Me</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
        I am a dedicated and passionate Machine Learning enthusiast, constantly enhancing my 
        skills in data modeling and intelligent systems. With a solid foundation in Java programming,
         I enjoy developing efficient and impactful solutions by combining my expertise in Java with machine learning techniques. 
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
        I thrive on tackling complex real-world challenges through innovative approaches and continuous learning.
         My deep interest in Java and ML drives me to explore new technologies and build intelligent systems that make a difference.
        </p>
        
        {/* Stats Section */}
        <div className="flex space-x-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">10+</div>
            <div className="text-sm text-gray-500">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {["Graphic Design", "Cricket", "Photography", "Coding"].map((interest) => (
              <span 
                key={interest}
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="order-1 md:order-2">
        <img
          src={profile}
          alt="About"
          className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
</motion.section>



        {/* Skills Section - Right-aligned with modern cards */}
        <motion.section
  id="skills"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  variants={slideInRight}
  className="min-h-screen flex items-center bg-gray-50"
>
  <div className="max-w-6xl mx-auto px-4 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'C', level: 75 },
          { name: 'C++', level: 77 },
          { name: 'Java', level: 90 },
          { name: 'Python', level: 80 },
          { name: 'MySQL', level: 68 },
          { name: 'Oracle', level: 70 },
          { name: 'Visual Studio', level: 75 },
          { name: 'Eclipse', level: 70 },
          { name: 'Android Studio', level: 85 },
        ].map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-blue-600 h-2.5 rounded-full"
              ></motion.div>
            </div>
            <span className="text-sm text-gray-500">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Technical Skills</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
        I have a strong foundation in programming languages like C, C++, Java, and Python, 
        along with experience in database management using MySQL and Oracle. 
        I am proficient in working with development environments such as Visual Studio, Eclipse,
         and Android Studio, enabling me to build efficient and scalable applications.
          With a problem-solving mindset and hands-on experience in software development, 
          I continuously enhance my technical skills to stay updated with emerging technologies.
        </p>

        {/* Download Resume Button */}
        <a
          href="./components/files/resume.pdf"  // Ensure this path is correct
          download="Vinod_Kudkyal_Resume"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  </div>
</motion.section>




        {/* Projects Section - Full-width modern cards */}
        <motion.section
  id="projects"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  variants={fadeIn}
  className="min-h-screen flex items-center bg-white"
>
  <div className="max-w-6xl mx-auto px-4 py-20">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Vaccine Management System */}
      <motion.div
        key="Vaccine-Management-System"
        whileHover={{ y: -10 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="relative">
          <img
            src="./components/files/VMS.png"
            alt="Vaccine Management"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">Vaccine-Management-System</h3>
            <p className="text-sm opacity-80">Java • MySQL • Eclipse</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">
            A comprehensive system for managing vaccines, including secure user management, inventory tracking, and a user-friendly desktop interface.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/vinodkudkyal/Vaccine-Management-System"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View Project <Code className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Calculator With Steganography */}
      <motion.div
        key="Calculator-With-Steganography"
        whileHover={{ y: -10 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="relative">
          <img
            src="./components/files/CWS.png"
            alt="Calculator with Steganography"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">Calculator With Steganography</h3>
            <p className="text-sm opacity-80">Java • Android Studio</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">
            A calculator app with integrated text steganography to embed hidden messages within arithmetic calculations.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/vinodkudkyal/Easy-Calculater"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View Project <Code className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* StudyGears */}
      <motion.div
        key="StudyGears"
        whileHover={{ y: -10 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="relative">
          <img
            src="./components/filesSG.png"
            alt="StudyGears"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">StudyGears</h3>
            <p className="text-sm opacity-80">React • MongoDB • JavaScript</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">
            An interactive learning platform with a games module, content tracking, and responsive design for a great user experience.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://studygears-foru.onrender.com/index.html"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View Project <Code className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Sign Language Detection */}
      <motion.div
        key="Sign-Language-Detection"
        whileHover={{ y: -10 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="relative">
          <img
            src="./components/files/SLD.png"
            alt="Sign Language Detection"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">Sign Language Detection</h3>
            <p className="text-sm opacity-80">YOLOv8 • OpenCV • Python</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">
            A real-time sign language recognition system that converts gestures into spoken words using YOLOv8 and OpenCV.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/vinodkudkyal/Sign-Language-Detection"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View Project <Code className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</motion.section>

        
        <motion.section
  id="certifications"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  variants={fadeIn}
  className="min-h-screen flex items-center bg-white"
>
  <div className="max-w-6xl mx-auto px-4 py-20">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
          issuedBy: "Udemy",
          description: "A comprehensive course covering machine learning algorithms and their implementation using Python, R, and ChatGPT.",
          link:"./components/files/certificate1.pdf" // Update this with the actual path to the PDF
        },
        {
          title: "Python (Basic)",
          issuedBy: "HackerRank",
          description: "Certification for basic Python programming skills, validating foundational knowledge in Python.",
          link:"./components/files/certificate2.pdf" // Update this with the actual path to the PDF
        },
        {
          title: "Introduction to Machine Learning",
          issuedBy: "NPTEL",
          description: "A course introducing the core concepts of machine learning and its real-world applications.",
          link: "./components/files/certificate3.pdf"  // Update this with the actual path to the PDF
        },
        {
          title: "Java Course - Mastering the Fundamentals",
          issuedBy: "Scaler",
          description: "Mastered the fundamentals of Java programming with hands-on experience in object-oriented concepts.",
          link: "./components/files/certificate4.pdf" // Update this with the actual path to the PDF
        },
        {
          title: "Internet of Things Foundation Certification",
          issuedBy: "Infosys Springboard",
          description: "An introductory certification to the fundamentals of IoT and its applications.",
          link: "./components/files/certificate5.pdf" // Update this with the actual path to the PDF
        },
        {
          title: "Internet of Things 101",
          issuedBy: "Infosys Springboard",
          description: "A basic level certification for understanding IoT technology and its practical implementations.",
          link: "./components/files{certificate6.pdf"  // Update this with the actual path to the PDF
        }
      ].map((cert, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800">{cert.title}</h3>
          <p className="text-sm text-gray-500">Issued by: {cert.issuedBy}</p>
          <p className="text-gray-600 mb-4">{cert.description}</p>
          <a
            href={cert.link}
            target="_blank"  // This will open the PDF in a new tab
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View Certification
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

<motion.section
  id="contact"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  variants={slideIn}
  className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-blue-100 to-white py-20 px-4 sm:px-8"
>
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-800">
      Contact Me
    </h2>

    {/* Contact Form */}
    <div className="flex justify-center mb-12">
      <ContactForm />
    </div>

    {/* Additional Contact Info */}
    <div className="text-center text-gray-600">
      <p className="text-lg mb-4">Or reach out to me directly:</p>
      <div className="flex flex-wrap justify-center space-x-6 text-xl">
        <a
          href="mailto:vinodkudkyal2005@gmail.com"
          className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
        >
          <Mail className="w-6 h-6" />
          <span className="ml-2">Email</span>
        </a>
        <a
          href="https://github.com/vinodkudkyal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
        >
          <GitHub className="w-6 h-6" />
          <span className="ml-2">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/vinod-kudkyal-98936023a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
        >
          <Linkedin className="w-6 h-6" />
          <span className="ml-2">LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/vinodkudkyal2005"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
        >
          <Instagram className="w-6 h-6" />
          <span className="ml-2">Instagram</span>
        </a>
        <a
          href="tel:+917666074208"
          className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
        >
          <Phone className="w-6 h-6" />
          <span className="ml-2">Phone</span>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Vinod Kudkyal. All rights reserved.</p>
      </div>
    </div>
  </div>
</motion.section>


        
      </div>
    </div>
  );
};

export default Portfolio;
