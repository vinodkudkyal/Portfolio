// // import { GitHub, Linkedin, Mail ,Instagram, MessageCircle } from 'react-feather';
// import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Home,
//   User,
//   Code,
//   Briefcase,
//   Award,
//   Layout
// } from 'lucide-react';
// import ContactForm from "./components/Contact";
// import certificate1 from './components/files/certificate1.pdf';
// import certificate2 from './components/files/certificate2.pdf';
// import certificate3 from './components/files/certificate3.pdf';
// import certificate4 from './components/files/certificate4.pdf';
// import certificate5 from './components/files/certificate5.pdf';
// import certificate6 from './components/files/certificate6.pdf'; import resume from './components/files/resume.pdf';
// import profile from './components/files/profile.png';
// import CWS from "./components/files/CWS.png";
// import SG from "./components/files/SG.png";
// import SLD from "./components/files/SLD.png";
// import VMS from "./components/files/VMS.png";
// import RAR from "./components/files/RAR.png";


// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };


//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const slideIn = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 }
//   };
//   // const slideIn = {
//   //   hidden: { opacity: 0, y: 50 },
//   //   visible: { opacity: 1, y: 0 },
//   // };

//   const slideInRight = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0 }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-center h-16">
//             <div className="flex space-x-2 md:space-x-4 items-center">
//               {[
//                 { id: 'home', icon: <Home size={18} />, label: 'Home' },
//                 { id: 'about', icon: <User size={18} />, label: 'About' },
//                 { id: 'skills', icon: <Code size={18} />, label: 'Skills' },
//                 { id: 'projects', icon: <Briefcase size={18} />, label: 'Projects' },
//                 // { id: 'tech-stack', icon: <Layout size={18} />, label: 'Stack' },
//                 { id: 'certifications', icon: <Award size={18} />, label: 'Certificats' },
//                 { id: 'contact', icon: <FaEnvelope size={18} />, label: 'Contact' },
//               ].map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`flex items-center px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${activeSection === item.id
//                       ? 'text-white bg-blue-600 shadow-lg ring-2 ring-blue-600'
//                       : 'text-gray-600'
//                     }`}
//                 >
//                   {item.icon}
//                   <span className="ml-1 hidden md:inline">{item.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>


//       {/* Main Content */}
//       <div className="pt-16">
//         {/* Header Section - Enhanced with geometric patterns and animations */}
//         <motion.section
//           id="home"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           variants={fadeIn}
//           className="min-h-screen relative overflow-hidden"
//         >
//           {/* Decorative background elements */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//             <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//             <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//             <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//           </div>

//           <div className="relative max-w-6xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen lg:flex-row lg:items-center lg:justify-between">
//             {/* Profile Picture Section */}
//             <motion.div
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="relative mb-8 lg:mb-0 lg:w-1/3 lg:mr-8"
//             >{/* Added lg:mr-8 for spacing */}
//               {/* Gradient Glow Background */}
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
//                 className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-50"
//               ></motion.div>

//               {/* Profile Picture */}
//               <motion.div
//                 animate={{
//                   y: [0, 10, 0],  // Small bounce effect, limited to 10px
//                 }}
//                 transition={{
//                   duration: 2, // Slow bounce duration
//                   repeat: Infinity,
//                   repeatType: "loop",
//                 }}
//                 className="w-80 h-80 rounded-full overflow-hidden ring-4 ring-white shadow-2xl relative"
//               >
//                 <motion.img
//                   src={profile}
//                   alt="Profile"
//                   className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//                 />
//               </motion.div>
//               <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
//                 <Code size={24} />
//               </div>
//             </motion.div>

//             {/* Text and Buttons Section */}
//             <div className="text-center lg:text-left lg:w-2/3">
//               <motion.h1
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//                 className="text-6xl font-bold mb-4 text-gray-800"
//               >
//                 Vinod Kudkyal
//               </motion.h1>

//               <motion.p
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 className="text-xl text-gray-600 mb-8"
//               >
//                 Java Developer & AI & ML Enthusiast
//               </motion.p>

//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4, duration: 0.5 }}
//                 className="flex justify-center lg:justify-start space-x-4"
//               >
//                 {/* View Projects Button with Smooth Scroll */}
//                 <button
//                   onClick={() => {
//                     document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
//                   }}
//                   className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
//                 >
//                   View Projects
//                 </button>
//                 {/* Contact Me Button with Smooth Scroll */}
//                 <button
//                   onClick={() => {
//                     document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
//                   }}
//                   className="px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
//                 >
//                   Contact Me
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>

//         {/* About Section - Left-aligned with modern design */}
//         <motion.section
//           id="about"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           variants={slideIn}
//           className="min-h-screen flex items-center bg-white"
//         >
//           <div className="max-w-6xl mx-auto px-4 py-20">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//               {/* About Me Text */}
//               <div className="order-2 md:order-1">
//                 <h2 className="text-4xl font-bold mb-8 text-gray-800">About Me</h2>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   I am a dedicated and passionate Machine Learning enthusiast, constantly enhancing my
//                   skills in data modeling and intelligent systems. With a solid foundation in Java programming,
//                   I enjoy developing efficient and impactful solutions by combining my expertise in Java with machine learning techniques.
//                 </p>
//                 <p className="text-gray-600 leading-relaxed mb-8">
//                   I thrive on tackling complex real-world challenges through innovative approaches and continuous learning.
//                   My deep interest in Java and ML drives me to explore new technologies and build intelligent systems that make a difference.
//                 </p>

//                 {/* Stats Section */}
//                 <div className="flex space-x-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-blue-600">10+</div>
//                     <div className="text-sm text-gray-500">Courses</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-blue-600">4</div>
//                     <div className="text-sm text-gray-500">Projects</div>
//                   </div>
//                 </div>

//                 {/* Interests Section */}
//                 <div className="mt-10">
//                   <h3 className="text-2xl font-semibold mb-4 text-gray-800">Interests</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {["Graphic Design", "Cricket", "Photography", "Coding"].map((interest) => (
//                       <span
//                         key={interest}
//                         className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
//                       >
//                         {interest}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Profile Image */}
//               <div className="order-1 md:order-2">
//                 <img
//                   src={profile}
//                   alt="About"
//                   className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.section>



//         {/* Skills Section - Right-aligned with modern cards */}
//         <motion.section
//           id="skills"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           variants={slideInRight}
//           className="min-h-screen flex items-center bg-gray-50"
//         >
//           <div className="max-w-6xl mx-auto px-4 py-20">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[
//                   { name: 'C', level: 75 },
//                   { name: 'C++', level: 77 },
//                   { name: 'Java', level: 90 },
//                   { name: 'Python', level: 80 },
//                   { name: 'MySQL', level: 68 },
//                   { name: 'Oracle', level: 70 },
//                   { name: 'Visual Studio', level: 75 },
//                   { name: 'Eclipse', level: 70 },
//                   { name: 'Android Studio', level: 85 },
//                 ].map((skill) => (
//                   <motion.div
//                     key={skill.name}
//                     whileHover={{ y: -5 }}
//                     className="bg-white p-6 rounded-xl shadow-lg"
//                   >
//                     <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1, delay: 0.2 }}
//                         className="bg-blue-600 h-2.5 rounded-full"
//                       ></motion.div>
//                     </div>
//                     <span className="text-sm text-gray-500">{skill.level}%</span>
//                   </motion.div>
//                 ))}
//               </div>
//               <div>
//                 <h2 className="text-4xl font-bold mb-8 text-gray-800">Technical Skills</h2>
//                 <p className="text-gray-600 leading-relaxed mb-8">
//                   I have a strong foundation in programming languages like C, C++, Java, and Python,
//                   along with experience in database management using MySQL and Oracle.
//                   I am proficient in working with development environments such as Visual Studio, Eclipse,
//                   and Android Studio, enabling me to build efficient and scalable applications.
//                   With a problem-solving mindset and hands-on experience in software development,
//                   I continuously enhance my technical skills to stay updated with emerging technologies.
//                 </p>

//                 {/* Download Resume Button */}
//                 <a
//                   href={resume}  // Ensure this path is correct
//                   download="Vinod_Kudkyal_Resume"
//                   className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
//                 >
//                   Download Resume
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.section>




//         {/* Projects Section - Full-width modern cards */}
//         <motion.section
//           id="projects"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           variants={fadeIn}
//           className="min-h-screen flex items-center bg-white"
//         >
//           <div className="max-w-6xl mx-auto px-4 py-20">
//             <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Featured Projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//               {/* Vaccine Management System */}
//               <motion.div
//                 key="Vaccine-Management-System"
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-xl overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={VMS}
//                     alt="Vaccine Management"
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Vaccine-Management-System</h3>
//                     <p className="text-sm opacity-80">Java • MySQL • Eclipse</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-600 mb-4">
//                     A comprehensive system for managing vaccines, including secure user management, inventory tracking, and a user-friendly desktop interface.
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <a
//                       href="https://github.com/vinodkudkyal/Vaccine-Management-System"
//                       target="_blank"
//                       className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
//                     >
//                       View Project <Code className="ml-2 w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Calculator With Steganography */}
//               <motion.div
//                 key="Calculator-With-Steganography"
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-xl overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={CWS}
//                     alt="Calculator with Steganography"
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Calculator With Steganography</h3>
//                     <p className="text-sm opacity-80">Java • Android Studio</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-600 mb-4">
//                     A calculator app with integrated text steganography to embed hidden messages within arithmetic calculations.
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <a
//                       href="https://github.com/vinodkudkyal/Easy-Calculater"
//                       target="_blank"
//                       className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
//                     >
//                       View Project <Code className="ml-2 w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>


//               {/* Cafe Management */}
//               <motion.div
//                 key="Rock & Rolls (Cafe-Management-System)"
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-xl overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={RAR}
//                     alt="Cafe Management"
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Rock & Rolls (Cafe-Management-System)</h3>
//                     <p className="text-sm opacity-80">Eclipse • Java • MVC</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-600 mb-4">
//                     Cafe management system (Rock And Rolls) with live order tracking, food preparation progress updates, and automated billing.
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <a
//                       href="https://github.com/vinodkudkyal/Rock-And-Rolls.git"
//                       target="_blank"
//                       className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
//                     >
//                       View Project <Code className="ml-2 w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* StudyGears */}
//               <motion.div
//                 key="StudyGears"
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-xl overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={SG}
//                     alt="StudyGears"
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">StudyGears</h3>
//                     <p className="text-sm opacity-80">React • MongoDB • JavaScript</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-600 mb-4">
//                     An interactive learning platform with a games module, content tracking, and responsive design for a great user experience.
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <a
//                       href="https://studygears-foru.onrender.com/index.html"
//                       target="_blank"
//                       className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
//                     >
//                       View Project <Code className="ml-2 w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Sign Language Detection */}
//               <motion.div
//                 key="Sign-Language-Detection"
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-xl overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={SLD}
//                     alt="Sign Language Detection"
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Sign Language Detection</h3>
//                     <p className="text-sm opacity-80">YOLOv8 • OpenCV • Python</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-600 mb-4">
//                     A real-time sign language recognition system that converts gestures into spoken words using YOLOv8 and OpenCV.
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <a
//                       href="https://github.com/vinodkudkyal/Sign-Language-Detection"
//                       target="_blank"
//                       className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
//                     >
//                       View Project <Code className="ml-2 w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>

//             </div>
//           </div>
//         </motion.section>


//         <motion.section
//           id="certifications"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           variants={fadeIn}
//           className="min-h-screen flex items-center bg-white"
//         >
//           <div className="max-w-6xl mx-auto px-4 py-20">
//             <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Certifications</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
//                   issuedBy: "Udemy",
//                   description: "A comprehensive course covering machine learning algorithms and their implementation using Python, R, and ChatGPT.",
//                   link: certificate1 // Update this with the actual path to the PDF
//                 },
//                 {
//                   title: "Python (Basic)",
//                   issuedBy: "HackerRank",
//                   description: "Certification for basic Python programming skills, validating foundational knowledge in Python.",
//                   link: certificate2 // Update this with the actual path to the PDF
//                 },
//                 {
//                   title: "Introduction to Machine Learning",
//                   issuedBy: "NPTEL",
//                   description: "A course introducing the core concepts of machine learning and its real-world applications.",
//                   link: certificate3 // Update this with the actual path to the PDF
//                 },
//                 {
//                   title: "Java Course - Mastering the Fundamentals",
//                   issuedBy: "Scaler",
//                   description: "Mastered the fundamentals of Java programming with hands-on experience in object-oriented concepts.",
//                   link: certificate4 // Update this with the actual path to the PDF
//                 },
//                 {
//                   title: "Internet of Things Foundation Certification",
//                   issuedBy: "Infosys Springboard",
//                   description: "An introductory certification to the fundamentals of IoT and its applications.",
//                   link: certificate5 // Update this with the actual path to the PDF
//                 },
//                 {
//                   title: "Internet of Things 101",
//                   issuedBy: "Infosys Springboard",
//                   description: "A basic level certification for understanding IoT technology and its practical implementations.",
//                   link: certificate6  // Update this with the actual path to the PDF
//                 }
//               ].map((cert, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -5 }}
//                   className="bg-white p-6 rounded-xl shadow-lg"
//                 >
//                   <h3 className="text-xl font-semibold mb-3 text-gray-800">{cert.title}</h3>
//                   <p className="text-sm text-gray-500">Issued by: {cert.issuedBy}</p>
//                   <p className="text-gray-600 mb-4">{cert.description}</p>
//                   <a
//                     href={cert.link}
//                     target="_blank"  // This will open the PDF in a new tab
//                     className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
//                   >
//                     View Certification
//                   </a>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         <motion.section
//           id="contact"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           variants={slideIn}
//           className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-blue-100 to-white py-20 px-4 sm:px-8"
//         >
//           <div className="max-w-6xl mx-auto">
//             {/* Section Title */}
//             <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-800">
//               Contact Me
//             </h2>

//             {/* Contact Form */}
//             <div className="flex justify-center mb-12">
//               <ContactForm />
//             </div>

//             {/* Additional Contact Info */}
//             {/*     <div className="text-center text-gray-600">
//       <p className="text-lg mb-4">Or reach out to me directly:</p>
//       <div className="flex flex-wrap justify-center space-x-6 text-xl">
//         <a
//           href="mailto:vinodkudkyal2005@gmail.com"
//           className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//         >
//           <Mail className="w-6 h-6" />
//           <span className="ml-2">Email</span>
//         </a>
//         <a
//           href="https://github.com/vinodkudkyal"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//         >
//           <GitHub className="w-6 h-6" />
//           <span className="ml-2">GitHub</span>
//         </a>
//         <a
//           href="https://www.linkedin.com/in/vinod-kudkyal-98936023a"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//         >
//           <Linkedin className="w-6 h-6" />
//           <span className="ml-2">LinkedIn</span>
//         </a>
//         <a
//           href="https://www.instagram.com/vinodkudkyal2005"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//         >
//           <Instagram className="w-6 h-6" />
//           <span className="ml-2">Instagram</span>
//         </a>
//         <a
//           href="https://wa.me/7666074208"
//           className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//         >
//           <MessageCircle className="w-6 h-6" />
//           <span className="ml-2">Whatsapp</span>
//         </a>
//       </div> */}
//             <div className="text-center text-gray-600">
//               <p className="text-lg mb-4">Or reach out to me directly:</p>
//               <div className="flex flex-wrap justify-center space-x-6 text-xl">
//                 <a
//                   href="mailto:vinodkudkyal2005@gmail.com"
//                   className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//                 >
//                   <FaEnvelope className="w-6 h-6" />
//                   <span className="ml-2">Email</span>
//                 </a>
//                 <a
//                   href="https://github.com/vinodkudkyal"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//                 >
//                   <FaGithub className="w-6 h-6" />
//                   <span className="ml-2">GitHub</span>
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/vinod-kudkyal-98936023a"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//                 >
//                   <FaLinkedin className="w-6 h-6" />
//                   <span className="ml-2">LinkedIn</span>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/vinodkudkyal2005"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//                 >
//                   <FaInstagram className="w-6 h-6" />
//                   <span className="ml-2">Instagram</span>
//                 </a>
//                 <a
//                   href="https://x.com/KudkyalVinod"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//                 >
//                   <FaXTwitter className="w-6 h-6" />
//                   <span className="ml-2">X (Twitter)</span>
//                 </a>
//                 <a
//                   href="https://wa.me/7666074208"
//                   className="text-blue-600 hover:text-blue-700 flex items-center mb-4 sm:mb-0"
//                 >
//                   <FaWhatsapp className="w-6 h-6" />
//                   <span className="ml-2">WhatsApp</span>
//                 </a>
//               </div>

//               {/* Footer */}
//               <div className="mt-6 text-sm text-gray-400">
//                 <p>© {new Date().getFullYear()} Vinod Kudkyal. All rights reserved.</p>
//               </div>
//             </div>
//           </div>
//         </motion.section>



//       </div>
//     </div>
//   );
// };


// export default Portfolio;




// import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
// import { FaXTwitter, FaArrowRight } from 'react-icons/fa6';
// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import {
//   Home,
//   User,
//   Code,
//   Briefcase,
//   Award,
//   ChevronRight,
//   Sparkles,
//   Cpu,
//   Database,
//   Globe,
//   Smartphone,
//   Cloud
// } from 'lucide-react';
// import ContactForm from "./components/Contact";
// import certificate1 from './components/files/certificate1.pdf';
// import certificate2 from './components/files/certificate2.pdf';
// import certificate3 from './components/files/certificate3.pdf';
// import certificate4 from './components/files/certificate4.pdf';
// import certificate5 from './components/files/certificate5.pdf';
// import certificate6 from './components/files/certificate6.pdf';
// import resume from './components/files/resume.pdf';
// import profile from './components/files/profile3.png';
// import profile1 from './components/files/profile2.png';
// import CWS from "./components/files/CWS.png";
// import SG from "./components/files/SG.png";
// import SLD from "./components/files/SLD.png";
// import VMS from "./components/files/VMS.png";
// import RAR from "./components/files/RAR.png";

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.9]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6
//       }
//     }
//   };

//   const techIcons = [
//     { icon: <Cpu className="w-8 h-8" />, label: 'Backend', color: 'text-blue-400' },
//     { icon: <Database className="w-8 h-8" />, label: 'Database', color: 'text-cyan-400' },
//     { icon: <Globe className="w-8 h-8" />, label: 'Web', color: 'text-purple-400' },
//     { icon: <Smartphone className="w-8 h-8" />, label: 'Mobile', color: 'text-pink-400' },
//     { icon: <Cloud className="w-8 h-8" />, label: 'Cloud', color: 'text-green-400' },
//     { icon: <Sparkles className="w-8 h-8" />, label: 'AI/ML', color: 'text-yellow-400' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
//       {/* Animated Background Particles */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-blue-500 rounded-full"
//             animate={{
//               x: [0, Math.random() * 100 - 50],
//               y: [0, Math.random() * 100 - 50],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 4,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0.3 + Math.random() * 0.4
//             }}
//           />
//         ))}
//       </div>

//       {/* Navigation */}
//       <motion.nav
//         style={{ opacity: headerOpacity }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center h-20">
//             <motion.div
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               className="flex items-center space-x-2"
//             >
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
//               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 VK
//               </span>
//             </motion.div>

//             <div className="flex items-center space-x-1 md:space-x-3">
//               {[
//                 { id: 'home', icon: <Home size={18} />, label: 'Home' },
//                 { id: 'about', icon: <User size={18} />, label: 'About' },
//                 { id: 'skills', icon: <Code size={18} />, label: 'Skills' },
//                 { id: 'projects', icon: <Briefcase size={18} />, label: 'Projects' },
//                 { id: 'certifications', icon: <Award size={18} />, label: 'Certificates' },
//                 { id: 'contact', icon: <FaEnvelope size={18} />, label: 'Contact' },
//               ].map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     activeSection === item.id
//                       ? 'text-white bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/50 shadow-lg shadow-blue-500/20'
//                       : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
//                   }`}
//                 >
//                   <span className="flex items-center">
//                     {item.icon}
//                     <span className="ml-2 hidden md:inline">{item.label}</span>
//                   </span>
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="nav-indicator"
//                       className="absolute inset-0 border border-blue-500/30 rounded-full -z-10"
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Main Content */}
//       <div className="pt-20">
//         {/* Hero Section */}
//         <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
//           <div className="absolute inset-0">
//             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
//           </div>

//           <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
//             {/* Left Content */}
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-1/2 mb-12 lg:mb-0"
//             >
//               <div className="relative">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="absolute -top-6 -left-6 w-32 h-32 border-2 border-blue-500/30 rounded-full"
//                 />
//                 <div className="relative">
//                   <span className="text-cyan-400 font-mono text-lg mb-4 block">Hello, I'm</span>
//                   <h1 className="text-6xl md:text-7xl font-bold mb-4">
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
//                       Vinod Kudkyal
//                     </span>
//                   </h1>
//                   <div className="flex items-center mb-6">
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-4" />
//                     <span className="text-2xl text-gray-300">Java Developer & AI/ML Enthusiast</span>
//                   </div>
//                   <p className="text-gray-400 text-lg mb-8 max-w-2xl">
//                     Building intelligent solutions with cutting-edge technology. 
//                     Passionate about creating impactful software that solves real-world problems.
//                   </p>

//                   <div className="flex flex-wrap gap-4">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => scrollToSection('projects')}
//                       className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold flex items-center group"
//                     >
//                       View Projects
//                       <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                     </motion.button>

//                     <motion.a
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={resume}
//                       download
//                       className="px-8 py-3 border-2 border-blue-500/50 rounded-full font-semibold flex items-center hover:bg-blue-500/10 transition-colors"
//                     >
//                       <FaFileDownload className="mr-2" />
//                       Download Resume
//                     </motion.a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Content - Animated Profile */}
//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="lg:w-1/2 flex justify-center"
//             >
//               <div className="relative">
//                 {/* Glowing Rings */}
//                 <motion.div
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="absolute inset-0 border-4 border-blue-500/20 rounded-full blur-xl"
//                 />
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="absolute -inset-4 border-2 border-dashed border-cyan-500/30 rounded-full"
//                 />

//                 {/* Profile Image */}
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 4, repeat: Infinity }}
//                   className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
//                 >
//                   <img
//                     src={profile1}
//                     alt="Profile"
//                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
//                 </motion.div>

//                 {/* Floating Tech Icons */}
//                 <div className="absolute -top-4 -right-4">
//                   {techIcons.map((tech, index) => (
//                     <motion.div
//                       key={tech.label}
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ scale: 1.2, rotate: 5 }}
//                       className={`absolute ${tech.color} bg-gray-900 p-3 rounded-full border border-gray-800 shadow-lg`}
//                       style={{
//                         transform: `rotate(${index * 60}deg) translateX(120px) rotate(-${index * 60}deg)`
//                       }}
//                     >
//                       {tech.icon}
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//           >
//             <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-blue-400 rounded-full mt-2" />
//             </div>
//           </motion.div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={containerVariants}
//               className="relative"
//             >
//               {/* Background Elements */}
//               <div className="absolute -left-20 top-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
//               <div className="absolute -right-20 bottom-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

//               <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-16 text-center">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                   About Me
//                 </span>
//               </motion.h2>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                 <motion.div variants={itemVariants} className="space-y-6">
//                   <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
//                     <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
//                     <p className="text-gray-300 leading-relaxed">
//                       As a passionate developer specializing in Java and AI/ML technologies, 
//                       I bridge the gap between traditional software development and modern 
//                       intelligent systems. My journey is fueled by a deep curiosity for 
//                       solving complex problems through innovative technological solutions.
//                     </p>
//                   </div>

//                   <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
//                     <h3 className="text-2xl font-semibold mb-4 text-white">Philosophy</h3>
//                     <p className="text-gray-300 leading-relaxed">
//                       I believe in writing clean, efficient code that not only solves problems 
//                       but also creates meaningful impact. Every project is an opportunity to 
//                       learn, grow, and push the boundaries of what's possible with technology.
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       { value: '10+', label: 'Courses Completed' },
//                       { value: '4', label: 'Projects' },
//                       { value: '6', label: 'Certifications' },
//                       { value: '∞', label: 'Passion' }
//                     ].map((stat, index) => (
//                       <motion.div
//                         key={stat.label}
//                         variants={itemVariants}
//                         whileHover={{ scale: 1.05 }}
//                         className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-4 text-center"
//                       >
//                         <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                           {stat.value}
//                         </div>
//                         <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>

//                 <motion.div variants={itemVariants}>
//                   <div className="relative">
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                       className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-3xl"
//                     />
//                     <img
//                       src={profile}
//                       alt="About"
//                       className="relative rounded-2xl border-4 border-gray-800 shadow-2xl"
//                     />
//                     <motion.div
//                       animate={{ scale: [1, 1.1, 1] }}
//                       transition={{ duration: 4, repeat: Infinity }}
//                       className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl -z-10"
//                     />
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Technical Skills
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//               <div className="space-y-6">
//                 {[
//                   { category: 'Programming', skills: [
//                     { name: 'Java', level: 90, color: 'from-red-400 to-orange-400' },
//                     { name: 'Python', level: 85, color: 'from-blue-400 to-cyan-400' },
//                     { name: 'C++', level: 80, color: 'from-purple-400 to-pink-400' },
//                     { name: 'C', level: 75, color: 'from-blue-400 to-indigo-400' },
//                   ]},
//                   { category: 'Tools & Platforms', skills: [
//                     { name: 'Android Studio', level: 85, color: 'from-green-400 to-emerald-400' },
//                     { name: 'Eclipse', level: 80, color: 'from-purple-400 to-violet-400' },
//                     { name: 'VS Code', level: 90, color: 'from-blue-400 to-cyan-400' },
//                   ]},
//                   { category: 'Databases', skills: [
//                     { name: 'MySQL', level: 85, color: 'from-blue-500 to-cyan-500' },
//                     { name: 'Oracle', level: 75, color: 'from-red-500 to-orange-500' },
//                     { name: 'MongoDB', level: 70, color: 'from-green-500 to-emerald-500' },
//                   ]},
//                 ].map((category, catIndex) => (
//                   <motion.div
//                     key={category.category}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: catIndex * 0.2 }}
//                     className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
//                   >
//                     <h3 className="text-xl font-semibold mb-4 text-white">{category.category}</h3>
//                     <div className="space-y-4">
//                       {category.skills.map((skill, skillIndex) => (
//                         <div key={skill.name}>
//                           <div className="flex justify-between mb-1">
//                             <span className="text-gray-300">{skill.name}</span>
//                             <span className="text-gray-400">{skill.level}%</span>
//                           </div>
//                           <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
//                             <motion.div
//                               initial={{ width: 0 }}
//                               whileInView={{ width: `${skill.level}%` }}
//                               viewport={{ once: true }}
//                               transition={{ duration: 1, delay: skillIndex * 0.1 }}
//                               className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
//                             />
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="flex flex-col justify-center"
//               >
//                 <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-8 mb-8">
//                   <h3 className="text-2xl font-semibold mb-4 text-white">Expertise</h3>
//                   <p className="text-gray-300 leading-relaxed mb-6">
//                     With a solid foundation in both traditional programming and modern AI/ML technologies, 
//                     I specialize in creating robust backend systems while exploring the frontiers of 
//                     artificial intelligence.
//                   </p>
//                   <div className="flex flex-wrap gap-3">
//                     {['Backend Development', 'Machine Learning', 'System Design', 'Problem Solving', 'Team Collaboration'].map((skill) => (
//                       <span
//                         key={skill}
//                         className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={resume}
//                   download
//                   className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
//                 >
//                   <FaFileDownload className="mr-2" />
//                   Download Full Resume
//                 </motion.a>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Featured Projects
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Vaccine Management System",
//                   description: "Comprehensive system for managing vaccines with secure user management and inventory tracking",
//                   tech: ["Java", "MySQL", "Eclipse"],
//                   image: VMS,
//                   link: "https://github.com/vinodkudkyal/Vaccine-Management-System",
//                   color: "from-blue-500/20 to-cyan-500/20"
//                 },
//                 {
//                   title: "Calculator With Steganography",
//                   description: "Calculator app with integrated text steganography for secure message embedding",
//                   tech: ["Java", "Android Studio"],
//                   image: CWS,
//                   link: "https://github.com/vinodkudkyal/Easy-Calculater",
//                   color: "from-purple-500/20 to-pink-500/20"
//                 },
//                 {
//                   title: "Rock & Rolls Cafe",
//                   description: "Cafe management system with live order tracking and automated billing",
//                   tech: ["Java", "MVC", "Eclipse"],
//                   image: RAR,
//                   link: "https://github.com/vinodkudkyal/Rock-And-Rolls.git",
//                   color: "from-orange-500/20 to-red-500/20"
//                 },
//                 {
//                   title: "StudyGears",
//                   description: "Interactive learning platform with games module and content tracking",
//                   tech: ["React", "MongoDB", "JavaScript"],
//                   image: SG,
//                   link: "https://studygears-foru.onrender.com/index.html",
//                   color: "from-green-500/20 to-emerald-500/20"
//                 },
//                 {
//                   title: "Sign Language Detection",
//                   description: "Real-time sign language recognition using YOLOv8 and OpenCV",
//                   tech: ["Python", "YOLOv8", "OpenCV"],
//                   image: SLD,
//                   link: "https://github.com/vinodkudkyal/Sign-Language-Detection",
//                   color: "from-yellow-500/20 to-amber-500/20"
//                 }
//               ].map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="group relative"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
//                   <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full group-hover:border-blue-500/50 transition-all duration-300">
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
//                       <div className="absolute bottom-4 left-4">
//                         <h3 className="text-xl font-semibold text-white">{project.title}</h3>
//                         <div className="flex flex-wrap gap-2 mt-2">
//                           {project.tech.map((tech) => (
//                             <span key={tech} className="px-2 py-1 bg-gray-800/80 text-xs rounded">
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-gray-300 mb-6">{project.description}</p>
//                       <a
//                         href={project.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center text-blue-400 hover:text-cyan-300 group/link"
//                       >
//                         View Project
//                         <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Certifications Section */}
//         <section id="certifications" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Certifications
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Machine Learning A-Z: AI, Python & R + ChatGPT",
//                   issuer: "Udemy",
//                   year: "2024",
//                   link: certificate1,
//                   gradient: "from-blue-500/20 to-cyan-500/20"
//                 },
//                 {
//                   title: "Python (Basic)",
//                   issuer: "HackerRank",
//                   year: "2023",
//                   link: certificate2,
//                   gradient: "from-green-500/20 to-emerald-500/20"
//                 },
//                 {
//                   title: "Introduction to Machine Learning",
//                   issuer: "NPTEL",
//                   year: "2023",
//                   link: certificate3,
//                   gradient: "from-purple-500/20 to-pink-500/20"
//                 },
//                 {
//                   title: "Java Course - Mastering the Fundamentals",
//                   issuer: "Scaler",
//                   year: "2023",
//                   link: certificate4,
//                   gradient: "from-red-500/20 to-orange-500/20"
//                 },
//                 {
//                   title: "IoT Foundation Certification",
//                   issuer: "Infosys Springboard",
//                   year: "2023",
//                   link: certificate5,
//                   gradient: "from-yellow-500/20 to-amber-500/20"
//                 },
//                 {
//                   title: "Internet of Things 101",
//                   issuer: "Infosys Springboard",
//                   year: "2023",
//                   link: certificate6,
//                   gradient: "from-indigo-500/20 to-violet-500/20"
//                 }
//               ].map((cert, index) => (
//                 <motion.div
//                   key={cert.title}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="group relative"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
//                   <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full group-hover:border-blue-500/50 transition-all duration-300">
//                     <div className="flex justify-between items-start mb-4">
//                       <div>
//                         <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
//                         <p className="text-sm text-gray-400">Issued by: {cert.issuer}</p>
//                       </div>
//                       <span className="px-3 py-1 bg-gray-800 text-xs rounded-full">{cert.year}</span>
//                     </div>
//                     <a
//                       href={cert.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center text-blue-400 hover:text-cyan-300 text-sm mt-4"
//                     >
//                       View Certificate
//                       <FaArrowRight className="ml-2 text-xs" />
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Get In Touch
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="space-y-8"
//               >
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-4 text-white">Let's Connect</h3>
//                   <p className="text-gray-300">
//                     I'm always open to discussing new opportunities, interesting projects, 
//                     or just having a conversation about technology and innovation.
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   <a
//                     href="mailto:vinodkudkyal2005@gmail.com"
//                     className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
//                   >
//                     <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors">
//                       <FaEnvelope className="w-6 h-6 text-blue-400" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-400">Email</div>
//                       <div className="text-white">vinodkudkyal2005@gmail.com</div>
//                     </div>
//                   </a>

//                   <div className="grid grid-cols-2 gap-4">
//                     <a
//                       href="https://github.com/vinodkudkyal"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
//                     >
//                       <div className="p-3 bg-purple-500/10 rounded-lg mr-4 group-hover:bg-purple-500/20 transition-colors">
//                         <FaGithub className="w-6 h-6 text-purple-400" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-400">GitHub</div>
//                         <div className="text-white">vinodkudkyal</div>
//                       </div>
//                     </a>

//                     <a
//                       href="https://www.linkedin.com/in/vinod-kudkyal-98936023a"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-600/50 transition-all duration-300 group"
//                     >
//                       <div className="p-3 bg-blue-600/10 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
//                         <FaLinkedin className="w-6 h-6 text-blue-500" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-400">LinkedIn</div>
//                         <div className="text-white">Vinod Kudkyal</div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex space-x-4">
//                   {[
//                     { icon: <FaInstagram />, href: "https://www.instagram.com/vinodkudkyal2005", color: "from-pink-500 to-rose-500" },
//                     { icon: <FaXTwitter />, href: "https://x.com/KudkyalVinod", color: "from-gray-700 to-black" },
//                     { icon: <FaWhatsapp />, href: "https://wa.me/7666074208", color: "from-green-500 to-emerald-500" },
//                   ].map((social) => (
//                     <motion.a
//                       key={social.href}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-3 bg-gradient-to-br ${social.color} rounded-full text-white`}
//                     >
//                       {social.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
//                   <ContactForm />
//                 </div>
//               </motion.div>
//             </div>

//             {/* Footer */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="mt-20 pt-8 border-t border-gray-800 text-center"
//             >
//               <p className="text-gray-400">
//                 © {new Date().getFullYear()} Vinod Kudkyal. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Built with React, Tailwind CSS, and Framer Motion
//               </p>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;





// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// // Font Awesome 5 (old but still valid icons)
// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaInstagram,
//   FaWhatsapp,
//   FaFileDownload,
//   FaMapMarkerAlt,   // ✅ MOVED HERE
// } from 'react-icons/fa';

// // Font Awesome 6 (new icons only)
// import {
//   FaXTwitter,
//   FaArrowRight,
// } from 'react-icons/fa6';

// // Lucide icons
// import {
//   Home,
//   User,
//   Code,
//   Briefcase,
//   Award,
//   ChevronRight,
//   Sparkles,
//   Cpu,
//   Database,
//   Globe,
//   Smartphone,
//   Cloud,
//   GraduationCap,
//   Target,
//   MapPin,
// } from 'lucide-react';

// import ContactForm from "./components/Contact";
// import certificate1 from './components/files/certificate1.pdf';
// import certificate2 from './components/files/certificate2.pdf';
// import certificate3 from './components/files/certificate3.pdf';
// import certificate4 from './components/files/certificate4.pdf';
// import certificate5 from './components/files/certificate5.pdf';
// import certificate6 from './components/files/certificate6.pdf';
// import resume from './components/files/resume.pdf';
// import profile from './components/files/profile.png';
// import CWS from "./components/files/CWS.png";
// import SG from "./components/files/SG.png";
// import SLD from "./components/files/SLD.png";
// import VMS from "./components/files/VMS.png";
// import RAR from "./components/files/RAR.png";

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.9]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
//       {/* Animated Background Particles */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-blue-500 rounded-full"
//             animate={{
//               x: [0, Math.random() * 100 - 50],
//               y: [0, Math.random() * 100 - 50],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 4,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0.3 + Math.random() * 0.4
//             }}
//           />
//         ))}
//       </div>

//       {/* Navigation */}
//       <motion.nav
//         style={{ opacity: headerOpacity }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center h-20">
//             <motion.div
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               className="flex items-center space-x-2"
//             >
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
//               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 VK
//               </span>
//             </motion.div>

//             <div className="flex items-center space-x-1 md:space-x-3">
//               {[
//                 { id: 'home', icon: <Home size={18} />, label: 'Home' },
//                 { id: 'education', icon: <GraduationCap size={18} />, label: 'Education' },
//                 { id: 'skills', icon: <Code size={18} />, label: 'Skills' },
//                 { id: 'projects', icon: <Briefcase size={18} />, label: 'Projects' },
//                 { id: 'certifications', icon: <Award size={18} />, label: 'Certifications' },
//                 { id: 'contact', icon: <FaEnvelope size={18} />, label: 'Contact' },
//               ].map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     activeSection === item.id
//                       ? 'text-white bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/50 shadow-lg shadow-blue-500/20'
//                       : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
//                   }`}
//                 >
//                   <span className="flex items-center">
//                     {item.icon}
//                     <span className="ml-2 hidden md:inline">{item.label}</span>
//                   </span>
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="nav-indicator"
//                       className="absolute inset-0 border border-blue-500/30 rounded-full -z-10"
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Main Content */}
//       <div className="pt-20">
//         {/* Hero Section */}
//         <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
//           <div className="absolute inset-0">
//             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
//           </div>

//           <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
//             {/* Left Content */}
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-1/2 mb-12 lg:mb-0"
//             >
//               <div className="relative">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="absolute -top-6 -left-6 w-32 h-32 border-2 border-blue-500/30 rounded-full"
//                 />
//                 <div className="relative">
//                   <span className="text-cyan-400 font-mono text-lg mb-4 block">Hello, I'm</span>
//                   <h1 className="text-6xl md:text-7xl font-bold mb-4">
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
//                       Vinod Kudkyal
//                     </span>
//                   </h1>

//                   {/* Contact Info */}
//                   <div className="flex items-center flex-wrap gap-4 mb-6">
//                     <div className="flex items-center text-gray-300">
//                       <FaEnvelope className="w-4 h-4 mr-2" />
//                       <span>vinodkudkyal2005@gmail.com</span>
//                     </div>
//                     <div className="flex items-center text-gray-300">
//                       <FaWhatsapp className="w-4 h-4 mr-2" />
//                       <span>+91 7666074208</span>
//                     </div>
//                     <div className="flex items-center text-gray-300">
//                       <FaMapMarkerAlt className="w-4 h-4 mr-2" />
//                       <span>Solapur, Maharashtra</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center mb-6">
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-4" />
//                     <span className="text-2xl text-gray-300">AI & DS Engineer & ML Enthusiast</span>
//                   </div>

//                   <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
//                     <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
//                       <Target className="w-5 h-5 mr-2 text-blue-400" />
//                       Career Objective
//                     </h3>
//                     <p className="text-gray-300 leading-relaxed">
//                       Passionate Machine Learning enthusiast with a strong foundation in Java programming, 
//                       currently advancing skills in data modeling and intelligent systems. Eager to apply 
//                       Java and ML knowledge to real-world challenges as part of an innovative team. 
//                       Committed to continuous learning and impactful problem-solving.
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-4">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => scrollToSection('projects')}
//                       className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold flex items-center group"
//                     >
//                       View Projects
//                       <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                     </motion.button>

//                     <motion.a
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={resume}
//                       download="Vinod_Kudkyal_Resume"
//                       className="px-8 py-3 border-2 border-blue-500/50 rounded-full font-semibold flex items-center hover:bg-blue-500/10 transition-colors"
//                     >
//                       <FaFileDownload className="mr-2" />
//                       Download Resume
//                     </motion.a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Content - Profile */}
//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="lg:w-1/2 flex justify-center"
//             >
//               <div className="relative">
//                 <motion.div
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="absolute inset-0 border-4 border-blue-500/20 rounded-full blur-xl"
//                 />
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="absolute -inset-4 border-2 border-dashed border-cyan-500/30 rounded-full"
//                 />

//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 4, repeat: Infinity }}
//                   className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
//                 >
//                   <img
//                     src={profile}
//                     alt="Vinod Kudkyal"
//                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//           >
//             <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-blue-400 rounded-full mt-2" />
//             </div>
//           </motion.div>
//         </section>

//         {/* Education Section */}
//         <section id="education" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Educational Qualification
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   degree: "B. Tech in AI & DS",
//                   institution: "N.K. Orchid College of Engineering & Technology, Solapur",
//                   period: "2023 - 2026",
//                   score: "7.42 CGPA",
//                   status: "Pursuing",
//                   icon: <GraduationCap className="w-8 h-8" />
//                 },
//                 {
//                   degree: "Diploma in Information Technology",
//                   institution: "Government Polytechnic Solapur",
//                   period: "2020 - 2023",
//                   score: "85.50%",
//                   status: "Completed",
//                   icon: <Code className="w-8 h-8" />
//                 },
//                 {
//                   degree: "SSC",
//                   institution: "SVCS High School Solapur",
//                   period: "2019 - 2020",
//                   score: "87.20%",
//                   status: "Completed",
//                   icon: <Globe className="w-8 h-8" />
//                 }
//               ].map((edu, index) => (
//                 <motion.div
//                   key={edu.degree}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 }}
//                   whileHover={{ y: -10 }}
//                   className="group relative"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                   <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full group-hover:border-blue-500/50 transition-all duration-300">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
//                         <div className="text-blue-400">{edu.icon}</div>
//                       </div>
//                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                         edu.status === 'Pursuing' 
//                           ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
//                           : 'bg-green-500/20 text-green-300 border border-green-500/30'
//                       }`}>
//                         {edu.status}
//                       </span>
//                     </div>

//                     <h3 className="text-xl font-semibold mb-2 text-white">{edu.degree}</h3>
//                     <p className="text-gray-400 text-sm mb-4">{edu.institution}</p>

//                     <div className="flex items-center justify-between text-sm">
//                       <div className="text-gray-500">{edu.period}</div>
//                       <div className="text-cyan-300 font-semibold">{edu.score}</div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Technical Skills
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {[
//                     {
//                       category: "Programming Languages",
//                       skills: [
//                         { name: "Java", level: 90 },
//                         { name: "Python", level: 85 },
//                         { name: "C++", level: 80 },
//                         { name: "C", level: 75 },
//                       ],
//                       icon: <Code className="w-6 h-6" />,
//                       color: "from-blue-500 to-cyan-500"
//                     },
//                     {
//                       category: "Databases",
//                       skills: [
//                         { name: "MySQL", level: 85 },
//                         { name: "Oracle", level: 70 },
//                         { name: "MongoDB", level: 75 },
//                       ],
//                       icon: <Database className="w-6 h-6" />,
//                       color: "from-purple-500 to-pink-500"
//                     },
//                     {
//                       category: "Tools & IDEs",
//                       skills: [
//                         { name: "Android Studio", level: 85 },
//                         { name: "Visual Studio", level: 75 },
//                         { name: "Eclipse", level: 70 },
//                       ],
//                       icon: <Cpu className="w-6 h-6" />,
//                       color: "from-green-500 to-emerald-500"
//                     },
//                     {
//                       category: "Technologies",
//                       skills: [
//                         { name: "React", level: 80 },
//                         { name: "Node.js", level: 75 },
//                         { name: "MediaPipe", level: 70 },
//                         { name: "OpenCV", level: 75 },
//                       ],
//                       icon: <Sparkles className="w-6 h-6" />,
//                       color: "from-orange-500 to-red-500"
//                     }
//                   ].map((category, catIndex) => (
//                     <motion.div
//                       key={category.category}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: catIndex * 0.1 }}
//                       className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
//                     >
//                       <div className="flex items-center mb-4">
//                         <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg mr-3`}>
//                           <div className="text-white">{category.icon}</div>
//                         </div>
//                         <h3 className="text-xl font-semibold text-white">{category.category}</h3>
//                       </div>

//                       <div className="space-y-3">
//                         {category.skills.map((skill, skillIndex) => (
//                           <div key={skill.name}>
//                             <div className="flex justify-between mb-1">
//                               <span className="text-gray-300">{skill.name}</span>
//                               <span className="text-gray-400">{skill.level}%</span>
//                             </div>
//                             <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
//                               <motion.div
//                                 initial={{ width: 0 }}
//                                 whileInView={{ width: `${skill.level}%` }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 1, delay: skillIndex * 0.1 }}
//                                 className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6"
//                 >
//                   <h3 className="text-2xl font-semibold mb-4 text-white">Core Competencies</h3>
//                   <div className="space-y-3">
//                     {[
//                       "Full-Stack Development",
//                       "Machine Learning",
//                       "Data Modeling",
//                       "System Design",
//                       "Problem Solving",
//                       "Team Collaboration",
//                       "API Integration",
//                       "Mobile Development"
//                     ].map((skill, index) => (
//                       <motion.div
//                         key={skill}
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.05 }}
//                         className="flex items-center"
//                       >
//                         <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
//                         <span className="text-gray-300">{skill}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6"
//                 >
//                   <h3 className="text-2xl font-semibold mb-4 text-white">Interests</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {["Graphic Design", "Cricket", "Photography", "Coding", "AI Research", "Open Source"].map((interest) => (
//                       <span
//                         key={interest}
//                         className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm"
//                       >
//                         {interest}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Featured Projects
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* Vaccine Management System */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                 <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full group-hover:border-blue-500/50 transition-all duration-300">
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={VMS}
//                       alt="Vaccine Management System"
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-semibold text-white">Vaccine Management System</h3>
//                       <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Desktop App</span>
//                     </div>
//                     <p className="text-gray-300 mb-4 text-sm">
//                       Java & MySQL desktop application with secure role-based login, vaccine inventory management, 
//                       and patient tracking system.
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {["Java", "MySQL", "Eclipse", "Desktop"].map((tech) => (
//                         <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded">{tech}</span>
//                       ))}
//                     </div>
//                     <a
//                       href="https://github.com/vinodkudkyal/Vaccine-Management-System"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center text-blue-400 hover:text-cyan-300 group/link"
//                     >
//                       View on GitHub
//                       <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* StudyGears */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                 <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full group-hover:border-purple-500/50 transition-all duration-300">
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={SG}
//                       alt="StudyGears"
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-semibold text-white">StudyGears</h3>
//                       <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Web Platform</span>
//                     </div>
//                     <p className="text-gray-300 mb-4 text-sm">
//                       React + MongoDB learning platform with progress tracking, interactive Node.js games, 
//                       and responsive UI for enhanced learning experience.
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {["React", "MongoDB", "Node.js", "JavaScript", "Web"].map((tech) => (
//                         <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded">{tech}</span>
//                       ))}
//                     </div>
//                     <a
//                       href="https://studygears-foru.onrender.com/index.html"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center text-purple-400 hover:text-pink-300 group/link"
//                     >
//                       Live Demo
//                       <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Sign Language Detection */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                 <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full group-hover:border-green-500/50 transition-all duration-300">
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={SLD}
//                       alt="Sign Language Detection"
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-semibold text-white">Sign Language Detection</h3>
//                       <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">AI/ML</span>
//                     </div>
//                     <p className="text-gray-300 mb-4 text-sm">
//                       Real-time gesture recognition system using MediaPipe & OpenCV with text-to-speech 
//                       conversion for enhanced accessibility.
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {["Python", "OpenCV", "MediaPipe", "Computer Vision", "AI"].map((tech) => (
//                         <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded">{tech}</span>
//                       ))}
//                     </div>
//                     <a
//                       href="https://github.com/vinodkudkyal/Sign-Language-Detection"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center text-green-400 hover:text-emerald-300 group/link"
//                     >
//                       View on GitHub
//                       <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Nagarshuddhi Sweeper Tracker */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                 <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full group-hover:border-orange-500/50 transition-all duration-300">
//                   <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center">
//                     <div className="text-center">
//                       <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-2" />
//                       <span className="text-white font-semibold">SMC Project</span>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-semibold text-white">Nagarshuddhi Sweeper Tracker</h3>
//                       <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded">Android & Web</span>
//                     </div>
//                     <p className="text-gray-300 mb-4 text-sm">
//                       Android & web-based system for geo-fenced route assignment, real-time sweeper tracking, 
//                       and attendance logging using GPS and Google Maps API. Developed in collaboration with 
//                       Solapur Municipal Corporation.
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {["Android", "Web", "GPS", "Google Maps API", "SMC"].map((tech) => (
//                         <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded">{tech}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Faculty Feedback Management System */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                 <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full group-hover:border-indigo-500/50 transition-all duration-300">
//                   <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500/10 to-violet-500/10 flex items-center justify-center">
//                     <div className="text-center">
//                       <Smartphone className="w-12 h-12 text-indigo-400 mx-auto mb-2" />
//                       <span className="text-white font-semibold">MERN Stack</span>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-semibold text-white">Faculty Feedback Management</h3>
//                       <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded">Full Stack</span>
//                     </div>
//                     <p className="text-gray-300 mb-4 text-sm">
//                       Full-stack MERN application for collecting and analyzing faculty feedback with 
//                       real-time updates, automated reports, and comprehensive analytics dashboard.
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {["MongoDB", "Express", "React", "Node.js", "MERN"].map((tech) => (
//                         <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded">{tech}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Custom ERP System */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                 <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full group-hover:border-yellow-500/50 transition-all duration-300">
//                   <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow-500/10 to-amber-500/10 flex items-center justify-center">
//                     <div className="text-center">
//                       <Cloud className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
//                       <span className="text-white font-semibold">College ERP</span>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-semibold text-white">Custom College ERP System</h3>
//                       <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">Enterprise</span>
//                     </div>
//                     <p className="text-gray-300 mb-4 text-sm">
//                       Developed a comprehensive ERP system for college management including student 
//                       records, faculty management, attendance tracking, and automated reporting systems.
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {["Java", "Spring Boot", "React", "MySQL", "Enterprise"].map((tech) => (
//                         <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded">{tech}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Certifications Section */}
//         <section id="certifications" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Certifications & Achievements
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
//                   issuer: "Udemy",
//                   description: "Comprehensive course covering machine learning algorithms and their implementation using Python, R, and ChatGPT.",
//                   link: certificate1,
//                   gradient: "from-blue-500/20 to-cyan-500/20"
//                 },
//                 {
//                   title: "Introduction to Machine Learning",
//                   issuer: "NPTEL",
//                   description: "A course introducing the core concepts of machine learning and its real-world applications.",
//                   link: certificate3,
//                   gradient: "from-purple-500/20 to-pink-500/20"
//                 },
//                 {
//                   title: "Fundamentals of Deep Learning",
//                   issuer: "Nvidia",
//                   description: "Certification in deep learning fundamentals covering neural networks and advanced AI concepts.",
//                   link: null,
//                   gradient: "from-green-500/20 to-emerald-500/20"
//                 },
//                 {
//                   title: "Build Your Own Generative AI Model",
//                   issuer: "NxtWave",
//                   description: "Hands-on training in building and deploying generative AI models.",
//                   link: null,
//                   gradient: "from-orange-500/20 to-red-500/20"
//                 },
//                 {
//                   title: "Python (Basic)",
//                   issuer: "HackerRank",
//                   description: "Certification for basic Python programming skills, validating foundational knowledge in Python.",
//                   link: certificate2,
//                   gradient: "from-indigo-500/20 to-violet-500/20"
//                 },
//                 {
//                   title: "Java Course - Mastering the Fundamentals",
//                   issuer: "Scaler",
//                   description: "Mastered the fundamentals of Java programming with hands-on experience in object-oriented concepts.",
//                   link: certificate4,
//                   gradient: "from-yellow-500/20 to-amber-500/20"
//                 },
//                 {
//                   title: "Internet of Things Foundation Certification",
//                   issuer: "Infosys Springboard",
//                   description: "An introductory certification to the fundamentals of IoT and its applications.",
//                   link: certificate5,
//                   gradient: "from-cyan-500/20 to-blue-500/20"
//                 },
//                 {
//                   title: "Internet of Things 101",
//                   issuer: "Infosys Springboard",
//                   description: "A basic level certification for understanding IoT technology and its practical implementations.",
//                   link: certificate6,
//                   gradient: "from-pink-500/20 to-rose-500/20"
//                 },
//                 {
//                   title: "SMC Collaboration",
//                   issuer: "Solapur Municipal Corporation",
//                   description: "Collaborated with SMC for developing and deploying the Nagarshuddhi Sweeper Tracker system.",
//                   link: null,
//                   gradient: "from-gray-500/20 to-gray-700/20"
//                 }
//               ].map((cert, index) => (
//                 <motion.div
//                   key={cert.title}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="group relative"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
//                   <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full group-hover:border-blue-500/50 transition-all duration-300">
//                     <div className="flex justify-between items-start mb-4">
//                       <div>
//                         <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
//                         <p className="text-sm text-gray-400">Issued by: {cert.issuer}</p>
//                       </div>
//                       <div className="p-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
//                         <Award className="w-5 h-5 text-yellow-400" />
//                       </div>
//                     </div>
//                     <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
//                     {cert.link && (
//                       <a
//                         href={cert.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center text-blue-400 hover:text-cyan-300 text-sm"
//                       >
//                         View Certificate
//                         <FaArrowRight className="ml-2 text-xs" />
//                       </a>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Get In Touch
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="space-y-8"
//               >
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-4 text-white">Connect With Me</h3>
//                   <p className="text-gray-300">
//                     I'm always open to discussing new opportunities, interesting projects, 
//                     research collaborations, or just having a conversation about technology and innovation.
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   <a
//                     href="mailto:vinodkudkyal2005@gmail.com"
//                     className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
//                   >
//                     <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors">
//                       <FaEnvelope className="w-6 h-6 text-blue-400" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-400">Email</div>
//                       <div className="text-white">vinodkudkyal2005@gmail.com</div>
//                     </div>
//                   </a>

//                   <a
//                     href="tel:+917666074208"
//                     className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-500/50 transition-all duration-300 group"
//                   >
//                     <div className="p-3 bg-green-500/10 rounded-lg mr-4 group-hover:bg-green-500/20 transition-colors">
//                       <FaWhatsapp className="w-6 h-6 text-green-400" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-400">Phone / WhatsApp</div>
//                       <div className="text-white">+91 7666074208</div>
//                     </div>
//                   </a>

//                   <div className="grid grid-cols-2 gap-4">
//                     <a
//                       href="https://github.com/vinodkudkyal"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-500/50 transition-all duration-300 group"
//                     >
//                       <div className="p-3 bg-gray-700/10 rounded-lg mr-4 group-hover:bg-gray-700/20 transition-colors">
//                         <FaGithub className="w-6 h-6 text-gray-300" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-400">GitHub</div>
//                         <div className="text-white">vinodkudkyal</div>
//                       </div>
//                     </a>

//                     <a
//                       href="https://www.linkedin.com/in/vinod-kudkyal-98936023a"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-600/50 transition-all duration-300 group"
//                     >
//                       <div className="p-3 bg-blue-600/10 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
//                         <FaLinkedin className="w-6 h-6 text-blue-500" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-400">LinkedIn</div>
//                         <div className="text-white">Vinod Kudkyal</div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>

//                 <div className="pt-4">
//                   <div className="flex items-center text-gray-400 mb-2">
//                     <MapPin className="w-5 h-5 mr-2" />
//                     <span>Location</span>
//                   </div>
//                   <p className="text-white">Solapur, Maharashtra, India</p>
//                 </div>

//                 <div className="flex space-x-4 pt-4">
//                   {[
//                     { icon: <FaInstagram />, href: "https://www.instagram.com/vinodkudkyal2005", color: "from-pink-500 to-rose-500" },
//                     { icon: <FaXTwitter />, href: "https://x.com/KudkyalVinod", color: "from-gray-700 to-black" },
//                     { icon: <FaWhatsapp />, href: "https://wa.me/7666074208", color: "from-green-500 to-emerald-500" },
//                   ].map((social) => (
//                     <motion.a
//                       key={social.href}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-3 bg-gradient-to-br ${social.color} rounded-full text-white`}
//                     >
//                       {social.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
//                   <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
//                   <ContactForm />
//                 </div>
//               </motion.div>
//             </div>

//             {/* Footer */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="mt-20 pt-8 border-t border-gray-800 text-center"
//             >
//               <div className="flex flex-col md:flex-row justify-between items-center">
//                 <p className="text-gray-400">
//                   © {new Date().getFullYear()} Vinod Kudkyal. All rights reserved.
//                 </p>
//                 <div className="flex items-center space-x-4 mt-4 md:mt-0">
//                   <a href="https://vinodkudkyal.github.io/Portfolio/" className="text-gray-400 hover:text-cyan-400">
//                     Portfolio
//                   </a>
//                   <span className="text-gray-600">•</span>
//                   <a href={resume} download className="text-gray-400 hover:text-cyan-400">
//                     Resume
//                   </a>
//                   <span className="text-gray-600">•</span>
//                   <a href="#home" onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-cyan-400">
//                     Back to Top
//                   </a>
//                 </div>
//               </div>
//               <p className="text-gray-500 text-sm mt-4">
//                 Built with React, Tailwind CSS, and Framer Motion
//               </p>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;






// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// // Font Awesome 5 icons
// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaInstagram,
//   FaWhatsapp,
//   FaFileDownload,
//   FaExternalLinkAlt,
//   FaMapMarkerAlt, // ✅ MUST be here
// } from 'react-icons/fa';

// // Font Awesome 6 icons
// import {
//   FaXTwitter,
//   FaArrowRight,
// } from 'react-icons/fa6';

// // Lucide icons
// import {
//   Home,
//   User,
//   Code,
//   Briefcase,
//   Award,
//   ChevronRight,
//   Sparkles,
//   Cpu,
//   Database,
//   Globe,
//   Smartphone,
//   Cloud,
//   GraduationCap,
//   Target,
//   MapPin,
//   Plus,
//   ExternalLink,
// } from 'lucide-react';
// import ContactForm from "./components/Contact";
// import certificate1 from './components/files/certificate1.pdf';
// import certificate2 from './components/files/certificate2.pdf';
// import certificate3 from './components/files/certificate3.pdf';
// import certificate4 from './components/files/certificate4.pdf';
// import certificate5 from './components/files/certificate5.pdf';
// import certificate6 from './components/files/certificate6.pdf';
// import resume from './components/files/resume.pdf';
// import profile from './components/files/profile.png';
// import CWS from "./components/files/CWS.png";
// import SG from "./components/files/SG.png";
// import SLD from "./components/files/SLD.png";
// import VMS from "./components/files/VMS.png";
// import RAR from "./components/files/RAR.png";

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [visibleProjects, setVisibleProjects] = useState(6);
//   const [visibleCertifications, setVisibleCertifications] = useState(6);
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.9]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6
//       }
//     }
//   };

//   const projects = [
//     {
//       title: "Vaccine Management System",
//       description: "Java & MySQL desktop application with secure role-based login, vaccine inventory management, and patient tracking system.",
//       tech: ["Java", "MySQL", "Eclipse", "Desktop"],
//       image: VMS,
//       github: "https://github.com/vinodkudkyal/Vaccine-Management-System",
//       live: null,
//       color: "from-blue-500/20 to-cyan-500/20",
//       borderColor: "blue-500/50",
//       type: "Desktop App"
//     },
//     {
//       title: "StudyGears",
//       description: "React + MongoDB learning platform with progress tracking, interactive Node.js games, and responsive UI for enhanced learning experience.",
//       tech: ["React", "MongoDB", "Node.js", "JavaScript", "Web"],
//       image: SG,
//       github: "https://github.com/vinodkudkyal/StudyGears",
//       live: "https://studygears-foru.onrender.com/index.html",
//       color: "from-purple-500/20 to-pink-500/20",
//       borderColor: "purple-500/50",
//       type: "Web Platform"
//     },
//     {
//       title: "Sign Language Detection",
//       description: "Real-time gesture recognition system using MediaPipe & OpenCV with text-to-speech conversion for enhanced accessibility.",
//       tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "AI"],
//       image: SLD,
//       github: "https://github.com/vinodkudkyal/Sign-Language-Detection",
//       live: null,
//       color: "from-green-500/20 to-emerald-500/20",
//       borderColor: "green-500/50",
//       type: "AI/ML"
//     },
//     {
//       title: "Calculator With Steganography",
//       description: "A calculator app with integrated text steganography to embed hidden messages within arithmetic calculations.",
//       tech: ["Java", "Android Studio", "Mobile"],
//       image: CWS,
//       github: "https://github.com/vinodkudkyal/Easy-Calculater",
//       live: null,
//       color: "from-yellow-500/20 to-amber-500/20",
//       borderColor: "yellow-500/50",
//       type: "Mobile App"
//     },
//     {
//       title: "Rock & Rolls (Cafe Management System)",
//       description: "Cafe management system with live order tracking, food preparation progress updates, and automated billing using MVC architecture.",
//       tech: ["Java", "MVC", "Eclipse", "Desktop"],
//       image: RAR,
//       github: "https://github.com/vinodkudkyal/Rock-And-Rolls.git",
//       live: null,
//       color: "from-orange-500/20 to-red-500/20",
//       borderColor: "orange-500/50",
//       type: "Desktop App"
//     },
//     {
//       title: "Nagarshuddhi Sweeper Tracker",
//       description: "Android & web-based system for geo-fenced route assignment, real-time sweeper tracking, and attendance logging using GPS and Google Maps API.",
//       tech: ["Android", "Web", "GPS", "Google Maps API", "SMC"],
//       image: null,
//       icon: <MapPin className="w-12 h-12 text-orange-400" />,
//       github: null,
//       live: null,
//       color: "from-orange-500/20 to-red-500/20",
//       borderColor: "orange-500/50",
//       type: "Android & Web"
//     },
//     {
//       title: "Faculty Feedback Management System",
//       description: "Full-stack MERN application for collecting and analyzing faculty feedback with real-time updates, automated reports, and comprehensive analytics.",
//       tech: ["MongoDB", "Express", "React", "Node.js", "MERN"],
//       image: null,
//       icon: <Smartphone className="w-12 h-12 text-indigo-400" />,
//       github: "https://github.com/vinodkudkyal/Faculty-Feedback-System",
//       live: null,
//       color: "from-indigo-500/20 to-violet-500/20",
//       borderColor: "indigo-500/50",
//       type: "Full Stack"
//     }
//   ];

//   // const certifications = [
//   //   {
//   //     title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
//   //     issuer: "Udemy",
//   //     description: "Comprehensive course covering machine learning algorithms and their implementation using Python, R, and ChatGPT.",
//   //     link: certificate1,
//   //     gradient: "from-blue-500/20 to-cyan-500/20"
//   //   },
//   //   {
//   //     title: "Introduction to Machine Learning",
//   //     issuer: "NPTEL",
//   //     description: "A course introducing the core concepts of machine learning and its real-world applications.",
//   //     link: certificate3,
//   //     gradient: "from-purple-500/20 to-pink-500/20"
//   //   },
//   //   {
//   //     title: "Fundamentals of Deep Learning",
//   //     issuer: "Nvidia",
//   //     description: "Certification in deep learning fundamentals covering neural networks and advanced AI concepts.",
//   //     link: null,
//   //     gradient: "from-green-500/20 to-emerald-500/20"
//   //   },
//   //   {
//   //     title: "Build Your Own Generative AI Model",
//   //     issuer: "NxtWave",
//   //     description: "Hands-on training in building and deploying generative AI models.",
//   //     link: null,
//   //     gradient: "from-orange-500/20 to-red-500/20"
//   //   },
//   //   {
//   //     title: "Python (Basic)",
//   //     issuer: "HackerRank",
//   //     description: "Certification for basic Python programming skills, validating foundational knowledge in Python.",
//   //     link: certificate2,
//   //     gradient: "from-indigo-500/20 to-violet-500/20"
//   //   },
//   //   {
//   //     title: "Java Course - Mastering the Fundamentals",
//   //     issuer: "Scaler",
//   //     description: "Mastered the fundamentals of Java programming with hands-on experience in object-oriented concepts.",
//   //     link: certificate4,
//   //     gradient: "from-yellow-500/20 to-amber-500/20"
//   //   },
//   //   {
//   //     title: "Internet of Things Foundation Certification",
//   //     issuer: "Infosys Springboard",
//   //     description: "An introductory certification to the fundamentals of IoT and its applications.",
//   //     link: certificate5,
//   //     gradient: "from-cyan-500/20 to-blue-500/20"
//   //   },
//   //   {
//   //     title: "Internet of Things 101",
//   //     issuer: "Infosys Springboard",
//   //     description: "A basic level certification for understanding IoT technology and its practical implementations.",
//   //     link: certificate6,
//   //     gradient: "from-pink-500/20 to-rose-500/20"
//   //   },
//   //   {
//   //     title: "SMC Collaboration",
//   //     issuer: "Solapur Municipal Corporation",
//   //     description: "Collaborated with SMC for developing and deploying the Nagarshuddhi Sweeper Tracker system.",
//   //     link: null,
//   //     gradient: "from-gray-500/20 to-gray-700/20"
//   //   }
//   // ];

//   // const certifications = [
//   //   {
//   //     title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
//   //     issuer: "Udemy",
//   //     description: "Comprehensive course covering machine learning algorithms and their implementation using Python, R, and ChatGPT.",
//   //     link: certificate1,
//   //     gradient: "from-blue-500/20 to-cyan-500/20"
//   //   },
//   //   {
//   //     title: "Introduction to Machine Learning",
//   //     issuer: "NPTEL",
//   //     description: "A course introducing the core concepts of machine learning and its real-world applications.",
//   //     link: certificate3,
//   //     gradient: "from-purple-500/20 to-pink-500/20"
//   //   },
//   //   {
//   //     title: "Fundamentals of Deep Learning",
//   //     issuer: "Nvidia",
//   //     description: "Certification in deep learning fundamentals covering neural networks and advanced AI concepts.",
//   //     link: null,
//   //     gradient: "from-green-500/20 to-emerald-500/20"
//   //   },
//   //   {
//   //     title: "Build Your Own Generative AI Model",
//   //     issuer: "NxtWave",
//   //     description: "Hands-on training in building and deploying generative AI models.",
//   //     link: null,
//   //     gradient: "from-orange-500/20 to-red-500/20"
//   //   },
//   //   {
//   //     title: "Python (Basic)",
//   //     issuer: "HackerRank",
//   //     description: "Certification for basic Python programming skills, validating foundational knowledge in Python.",
//   //     link: certificate2,
//   //     gradient: "from-indigo-500/20 to-violet-500/20"
//   //   },
//   //   {
//   //     title: "Java Course - Mastering the Fundamentals",
//   //     issuer: "Scaler",
//   //     description: "Mastered the fundamentals of Java programming with hands-on experience in object-oriented concepts.",
//   //     link: certificate4,
//   //     gradient: "from-yellow-500/20 to-amber-500/20"
//   //   },
//   //   {
//   //     title: "Internet of Things Foundation Certification",
//   //     issuer: "Infosys Springboard",
//   //     description: "An introductory certification to the fundamentals of IoT and its applications.",
//   //     link: certificate5,
//   //     gradient: "from-cyan-500/20 to-blue-500/20"
//   //   },
//   //   {
//   //     title: "Internet of Things 101",
//   //     issuer: "Infosys Springboard",
//   //     description: "A basic level certification for understanding IoT technology and its practical implementations.",
//   //     link: certificate6,
//   //     gradient: "from-pink-500/20 to-rose-500/20"
//   //   },
//   //   {
//   //     title: "SMC Collaboration",
//   //     issuer: "Solapur Municipal Corporation",
//   //     description: "Collaborated with SMC for developing and deploying the Nagarshuddhi Sweeper Tracker system.",
//   //     link: null,
//   //     gradient: "from-gray-500/20 to-gray-700/20"
//   //   },
//   //   // {
//   //   //   title: "Custom College ERP System Development",
//   //   //   issuer: "College Project",
//   //   //   description: "Successfully developed and implemented a comprehensive ERP system for college management including student records, faculty management, and automated reporting.",
//   //   //   link: null,
//   //   //   gradient: "from-blue-600/20 to-indigo-600/20",
//   //   //   icon: "🏆"
//   //   // }
//   //   {
//   //     title: "Custom College ERP System Development",
//   //     issuer: "College Project Achievement",
//   //     description: "Successfully developed and implemented a comprehensive ERP system for college management including student records, faculty management, attendance tracking, and automated reporting systems.",
//   //     link: null,
//   //     gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
//   //     isAchievement: true,
//   //     icon: "🏆"
//   //   }
//   // ];

//   const certifications = [
//     // Achievements - These will appear first
//     {
//       title: "Custom College ERP System Development",
//       issuer: "College Project Achievement",
//       description: "Successfully developed and implemented a comprehensive ERP system for college management including student records, faculty management, attendance tracking, and automated reporting systems.",
//       link: null,
//       gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
//       isAchievement: true,
//       icon: "🏆",
//       order: 1 // To ensure it appears first
//     },
//     {
//       title: "SMC Collaboration - Nagarshuddhi Project",
//       issuer: "Solapur Municipal Corporation",
//       description: "Collaborated with SMC for developing and deploying the Nagarshuddhi Sweeper Tracker system for efficient city cleanliness management with real-time GPS tracking.",
//       link: null,
//       gradient: "from-blue-600/20 via-purple-600/20 to-indigo-600/20",
//       isAchievement: true,
//       icon: "🤝",
//       order: 2 // To ensure it appears second
//     },
//     // Regular Certifications
//     {
//       title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
//       issuer: "Udemy",
//       description: "Comprehensive course covering machine learning algorithms and their implementation using Python, R, and ChatGPT.",
//       link: certificate1,
//       gradient: "from-blue-500/20 to-cyan-500/20",
//       isAchievement: false,
//       order: 3
//     },
//     {
//       title: "Introduction to Machine Learning",
//       issuer: "NPTEL",
//       description: "A course introducing the core concepts of machine learning and its real-world applications.",
//       link: certificate3,
//       gradient: "from-purple-500/20 to-pink-500/20",
//       isAchievement: false,
//       order: 4
//     },
//     {
//       title: "Fundamentals of Deep Learning",
//       issuer: "Nvidia",
//       description: "Certification in deep learning fundamentals covering neural networks and advanced AI concepts.",
//       link: null,
//       gradient: "from-green-500/20 to-emerald-500/20",
//       isAchievement: false,
//       order: 5
//     },
//     {
//       title: "Build Your Own Generative AI Model",
//       issuer: "NxtWave",
//       description: "Hands-on training in building and deploying generative AI models.",
//       link: null,
//       gradient: "from-orange-500/20 to-red-500/20",
//       isAchievement: false,
//       order: 6
//     },
//     {
//       title: "Python (Basic)",
//       issuer: "HackerRank",
//       description: "Certification for basic Python programming skills, validating foundational knowledge in Python.",
//       link: certificate2,
//       gradient: "from-indigo-500/20 to-violet-500/20",
//       isAchievement: false,
//       order: 7
//     },
//     {
//       title: "Java Course - Mastering the Fundamentals",
//       issuer: "Scaler",
//       description: "Mastered the fundamentals of Java programming with hands-on experience in object-oriented concepts.",
//       link: certificate4,
//       gradient: "from-yellow-500/20 to-amber-500/20",
//       isAchievement: false,
//       order: 8
//     },
//     {
//       title: "Internet of Things Foundation Certification",
//       issuer: "Infosys Springboard",
//       description: "An introductory certification to the fundamentals of IoT and its applications.",
//       link: certificate5,
//       gradient: "from-cyan-500/20 to-blue-500/20",
//       isAchievement: false,
//       order: 9
//     },
//     {
//       title: "Internet of Things 101",
//       issuer: "Infosys Springboard",
//       description: "A basic level certification for understanding IoT technology and its practical implementations.",
//       link: certificate6,
//       gradient: "from-pink-500/20 to-rose-500/20",
//       isAchievement: false,
//       order: 10
//     }
//   ];


//   // Then update the rendering to sort by order and show achievements first:
//   const sortedCertifications = [...certifications].sort((a, b) => a.order - b.order);

//   const loadMoreProjects = () => {
//     setVisibleProjects(prev => prev + 3);
//   };

//   const loadMoreCertifications = () => {
//     setVisibleCertifications(prev => prev + 3);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
//       {/* Animated Background Particles */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-blue-500 rounded-full"
//             animate={{
//               x: [0, Math.random() * 100 - 50],
//               y: [0, Math.random() * 100 - 50],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 4,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0.3 + Math.random() * 0.4
//             }}
//           />
//         ))}
//       </div>

//       {/* Navigation */}
//       <motion.nav
//         style={{ opacity: headerOpacity }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
//           }`}
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center h-20">
//             <motion.div
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               className="flex items-center space-x-2"
//             >
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
//               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 VK
//               </span>
//             </motion.div>

//             <div className="flex items-center space-x-1 md:space-x-3">
//               {[
//                 { id: 'home', icon: <Home size={18} />, label: 'Home' },
//                 { id: 'education', icon: <GraduationCap size={18} />, label: 'Education' },
//                 { id: 'skills', icon: <Code size={18} />, label: 'Skills' },
//                 { id: 'projects', icon: <Briefcase size={18} />, label: 'Projects' },
//                 { id: 'certifications', icon: <Award size={18} />, label: 'Certifications' },
//                 { id: 'contact', icon: <FaEnvelope size={18} />, label: 'Contact' },
//               ].map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
//                     ? 'text-white bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/50 shadow-lg shadow-blue-500/20'
//                     : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
//                     }`}
//                 >
//                   <span className="flex items-center">
//                     {item.icon}
//                     <span className="ml-2 hidden md:inline">{item.label}</span>
//                   </span>
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="nav-indicator"
//                       className="absolute inset-0 border border-blue-500/30 rounded-full -z-10"
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Main Content */}
//       <div className="pt-20">
//         {/* Hero Section */}
//         <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
//           <div className="absolute inset-0">
//             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
//           </div>

//           <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
//             {/* Left Content */}
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-1/2 mb-12 lg:mb-0"
//             >
//               <div className="relative">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="absolute -top-6 -left-6 w-32 h-32 border-2 border-blue-500/30 rounded-full"
//                 />
//                 <div className="relative">
//                   <span className="text-cyan-400 font-mono text-lg mb-4 block">Hello, I'm</span>
//                   <h1 className="text-6xl md:text-7xl font-bold mb-4">
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
//                       Vinod Kudkyal
//                     </span>
//                   </h1>

//                   {/* Contact Info */}
//                   <div className="flex items-center flex-wrap gap-4 mb-6">
//                     <div className="flex items-center text-gray-300">
//                       <FaEnvelope className="w-4 h-4 mr-2" />
//                       <span>vinodkudkyal2005@gmail.com</span>
//                     </div>
//                     <div className="flex items-center text-gray-300">
//                       <FaWhatsapp className="w-4 h-4 mr-2" />
//                       <span>+91 7666074208</span>
//                     </div>
//                     <div className="flex items-center text-gray-300">
//                       <FaMapMarkerAlt className="w-4 h-4 mr-2" />
//                       <span>Solapur, Maharashtra</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center mb-6">
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-4" />
//                     <span className="text-2xl text-gray-300">AI & DS Engineer & ML Enthusiast</span>
//                   </div>

//                   <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
//                     <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
//                       <Target className="w-5 h-5 mr-2 text-blue-400" />
//                       Career Objective
//                     </h3>
//                     <p className="text-gray-300 leading-relaxed">
//                       Passionate Machine Learning enthusiast with a strong foundation in Java programming,
//                       currently advancing skills in data modeling and intelligent systems. Eager to apply
//                       Java and ML knowledge to real-world challenges as part of an innovative team.
//                       Committed to continuous learning and impactful problem-solving.
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-4">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => scrollToSection('projects')}
//                       className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold flex items-center group"
//                     >
//                       View Projects
//                       <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                     </motion.button>

//                     <motion.a
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={resume}
//                       download="Vinod_Kudkyal_Resume"
//                       className="px-8 py-3 border-2 border-blue-500/50 rounded-full font-semibold flex items-center hover:bg-blue-500/10 transition-colors"
//                     >
//                       <FaFileDownload className="mr-2" />
//                       Download Resume
//                     </motion.a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Content - Profile */}
//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="lg:w-1/2 flex justify-center"
//             >
//               <div className="relative">
//                 <motion.div
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="absolute inset-0 border-4 border-blue-500/20 rounded-full blur-xl"
//                 />
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="absolute -inset-4 border-2 border-dashed border-cyan-500/30 rounded-full"
//                 />

//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 4, repeat: Infinity }}
//                   className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
//                 >
//                   <img
//                     src={profile}
//                     alt="Vinod Kudkyal"
//                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//           >
//             <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-blue-400 rounded-full mt-2" />
//             </div>
//           </motion.div>
//         </section>

//         {/* Education Section */}
//         <section id="education" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Educational Qualification
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   degree: "B. Tech in AI & DS",
//                   institution: "N.K. Orchid College of Engineering & Technology, Solapur",
//                   period: "2023 - 2026",
//                   score: "7.42 CGPA",
//                   status: "Pursuing",
//                   icon: <GraduationCap className="w-8 h-8" />
//                 },
//                 {
//                   degree: "Diploma in Information Technology",
//                   institution: "Government Polytechnic Solapur",
//                   period: "2020 - 2023",
//                   score: "85.50%",
//                   status: "Completed",
//                   icon: <Code className="w-8 h-8" />
//                 },
//                 {
//                   degree: "SSC",
//                   institution: "SVCS High School Solapur",
//                   period: "2019 - 2020",
//                   score: "87.20%",
//                   status: "Completed",
//                   icon: <Globe className="w-8 h-8" />
//                 }
//               ].map((edu, index) => (
//                 <motion.div
//                   key={edu.degree}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 }}
//                   whileHover={{ y: -10 }}
//                   className="group relative"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                   <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full group-hover:border-blue-500/50 transition-all duration-300">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
//                         <div className="text-blue-400">{edu.icon}</div>
//                       </div>
//                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${edu.status === 'Pursuing'
//                         ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
//                         : 'bg-green-500/20 text-green-300 border border-green-500/30'
//                         }`}>
//                         {edu.status}
//                       </span>
//                     </div>

//                     <h3 className="text-xl font-semibold mb-2 text-white">{edu.degree}</h3>
//                     <p className="text-gray-400 text-sm mb-4">{edu.institution}</p>

//                     <div className="flex items-center justify-between text-sm">
//                       <div className="text-gray-500">{edu.period}</div>
//                       <div className="text-cyan-300 font-semibold">{edu.score}</div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Technical Skills
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {[
//                     {
//                       category: "Programming Languages",
//                       skills: [
//                         { name: "Java", level: 90 },
//                         { name: "Python", level: 85 },
//                         { name: "C++", level: 80 },
//                         { name: "C", level: 75 },
//                       ],
//                       icon: <Code className="w-6 h-6" />,
//                       color: "from-blue-500 to-cyan-500"
//                     },
//                     {
//                       category: "Databases",
//                       skills: [
//                         { name: "MySQL", level: 85 },
//                         { name: "Oracle", level: 70 },
//                         { name: "MongoDB", level: 75 },
//                       ],
//                       icon: <Database className="w-6 h-6" />,
//                       color: "from-purple-500 to-pink-500"
//                     },
//                     {
//                       category: "Tools & IDEs",
//                       skills: [
//                         { name: "Android Studio", level: 85 },
//                         { name: "Visual Studio", level: 75 },
//                         { name: "Eclipse", level: 70 },
//                       ],
//                       icon: <Cpu className="w-6 h-6" />,
//                       color: "from-green-500 to-emerald-500"
//                     },
//                     {
//                       category: "Technologies",
//                       skills: [
//                         { name: "React", level: 80 },
//                         { name: "Node.js", level: 75 },
//                         { name: "MediaPipe", level: 70 },
//                         { name: "OpenCV", level: 75 },
//                       ],
//                       icon: <Sparkles className="w-6 h-6" />,
//                       color: "from-orange-500 to-red-500"
//                     }
//                   ].map((category, catIndex) => (
//                     <motion.div
//                       key={category.category}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: catIndex * 0.1 }}
//                       className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
//                     >
//                       <div className="flex items-center mb-4">
//                         <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg mr-3`}>
//                           <div className="text-white">{category.icon}</div>
//                         </div>
//                         <h3 className="text-xl font-semibold text-white">{category.category}</h3>
//                       </div>

//                       <div className="space-y-3">
//                         {category.skills.map((skill, skillIndex) => (
//                           <div key={skill.name}>
//                             <div className="flex justify-between mb-1">
//                               <span className="text-gray-300">{skill.name}</span>
//                               <span className="text-gray-400">{skill.level}%</span>
//                             </div>
//                             <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
//                               <motion.div
//                                 initial={{ width: 0 }}
//                                 whileInView={{ width: `${skill.level}%` }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 1, delay: skillIndex * 0.1 }}
//                                 className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6"
//                 >
//                   <h3 className="text-2xl font-semibold mb-4 text-white">Core Competencies</h3>
//                   <div className="space-y-3">
//                     {[
//                       "Full-Stack Development",
//                       "Machine Learning",
//                       "Data Modeling",
//                       "System Design",
//                       "Problem Solving",
//                       "Team Collaboration",
//                       "API Integration",
//                       "Mobile Development"
//                     ].map((skill, index) => (
//                       <motion.div
//                         key={skill}
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.05 }}
//                         className="flex items-center"
//                       >
//                         <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
//                         <span className="text-gray-300">{skill}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6"
//                 >
//                   <h3 className="text-2xl font-semibold mb-4 text-white">Interests</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {["Graphic Design", "Cricket", "Photography", "Coding", "AI Research", "Open Source"].map((interest) => (
//                       <span
//                         key={interest}
//                         className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm"
//                       >
//                         {interest}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Featured Projects
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {projects.slice(0, visibleProjects).map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="group relative"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
//                   <div className={`relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full group-hover:border-${project.borderColor} transition-all duration-300`}>
//                     {/* Project Image/Icon */}
//                     <div className="relative h-48 overflow-hidden">
//                       {project.image ? (
//                         <>
//                           <img
//                             src={project.image}
//                             alt={project.title}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
//                         </>
//                       ) : (
//                         <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
//                           {project.icon}
//                         </div>
//                       )}
//                       <div className="absolute bottom-4 left-4">
//                         <span className={`px-3 py-1 bg-gradient-to-r ${project.color.replace('/20', '/40')} text-white text-xs rounded-full font-medium`}>
//                           {project.type}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Project Content */}
//                     <div className="p-6">
//                       <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
//                       <p className="text-gray-300 mb-4 text-sm leading-relaxed">
//                         {project.description}
//                       </p>

//                       {/* Tech Stack */}
//                       <div className="flex flex-wrap gap-2 mb-6">
//                         {project.tech.map((tech) => (
//                           <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">
//                             {tech}
//                           </span>
//                         ))}
//                       </div>

//                       {/* Project Links */}
//                       <div className="flex space-x-3">
//                         {project.github && (
//                           <motion.a
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             href={project.github}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
//                           >
//                             <FaGithub className="w-4 h-4 mr-2" />
//                             <span className="text-sm">GitHub</span>
//                           </motion.a>
//                         )}

//                         {project.live && (
//                           <motion.a
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             href={project.live}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
//                           >
//                             <FaExternalLinkAlt className="w-4 h-4 mr-2" />
//                             <span className="text-sm">Live Demo</span>
//                           </motion.a>
//                         )}

//                         {!project.github && !project.live && (
//                           <span className="px-4 py-2 bg-gray-800 text-gray-500 rounded-lg text-sm">
//                             Private Project
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Load More Button */}
//             {visibleProjects < projects.length && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="flex justify-center mt-12"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={loadMoreProjects}
//                   className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold flex items-center group"
//                 >
//                   <Plus className="w-5 h-5 mr-2" />
//                   Load More Projects
//                 </motion.button>
//               </motion.div>
//             )}
//           </div>
//         </section>


//         {/* Achievements Section - Add this before or after certifications section */}
//         {/* <motion.section
//           id="achievements"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="py-16 relative"
//         >
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-12 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
//                 Achievements
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <motion.div
//                 whileHover={{ y: -5 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-amber-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                 <div className="relative bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 h-full group-hover:border-yellow-400/50 transition-all duration-300">
//                   <div className="flex items-center mb-4">
//                     <div className="p-3 bg-yellow-500/20 rounded-lg mr-4">
//                       <div className="text-yellow-400 text-xl">🏆</div>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-white">Custom College ERP System</h3>
//                       <p className="text-sm text-yellow-300/80">Major Project Achievement</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-300 text-sm">
//                     Successfully developed and implemented a comprehensive ERP system for college management
//                     including student records, faculty management, attendance tracking, and automated reporting systems.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     <span className="px-2 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded">Java</span>
//                     <span className="px-2 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded">Spring Boot</span>
//                     <span className="px-2 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded">React</span>
//                     <span className="px-2 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded">MySQL</span>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 whileHover={{ y: -5 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
//                 <div className="relative bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 h-full group-hover:border-blue-400/50 transition-all duration-300">
//                   <div className="flex items-center mb-4">
//                     <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
//                       <div className="text-blue-400 text-xl">🤝</div>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-white">SMC Collaboration</h3>
//                       <p className="text-sm text-blue-300/80">Industry Collaboration</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-300 text-sm">
//                     Collaborated with Solapur Municipal Corporation (SMC) to develop and deploy
//                     the Nagarshuddhi Sweeper Tracker system for efficient city cleanliness management.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     <span className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded">Android</span>
//                     <span className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded">Web</span>
//                     <span className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded">GPS Tracking</span>
//                     <span className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded">Google Maps API</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.section> */}


//         {/* Certifications Section */}
//         <section id="certifications" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Certifications & Achievements
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* {certifications.slice(0, visibleCertifications).map((cert, index) => (
//                 <motion.div
//                   key={cert.title}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="group relative"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
//                   <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full group-hover:border-blue-500/50 transition-all duration-300">
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="flex-1">
//                         <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
//                         <p className="text-sm text-gray-400">Issued by: {cert.issuer}</p>
//                       </div>
//                       <div className="p-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg ml-2">
//                         <Award className="w-5 h-5 text-yellow-400" />
//                       </div>
//                     </div>
//                     <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
//                     {cert.link && (
//                       <a
//                         href={cert.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center text-blue-400 hover:text-cyan-300 text-sm"
//                       >
//                         View Certificate
//                         <FaArrowRight className="ml-2 text-xs" />
//                       </a>
//                     )}
//                   </div>
//                 </motion.div>
//               ))} */}

//               {/* // Then in the certifications mapping section, modify to include achievement styling: */}
//               {/* {certifications.slice(0, visibleCertifications).map((cert, index) => ( */}
//               {/* // In your JSX, use sortedCertifications instead of certifications: */}
//               {sortedCertifications.slice(0, visibleCertifications).map((cert, index) => (
//                 <motion.div
//                   key={cert.title}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="group relative"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
//                   <div className={`relative bg-gray-900/50 backdrop-blur-sm border ${cert.isAchievement ? 'border-yellow-500/50' : 'border-gray-800'} rounded-2xl p-6 h-full group-hover:border-blue-500/50 transition-all duration-300`}>
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="flex-1">
//                         <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
//                         <p className="text-sm text-gray-400">Issued by: {cert.issuer}</p>
//                       </div>
//                       <div className="p-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg ml-2">
//                         {cert.isAchievement ? (
//                           <div className="text-yellow-400 text-lg">🏆</div>
//                         ) : (
//                           <Award className="w-5 h-5 text-yellow-400" />
//                         )}
//                       </div>
//                     </div>
//                     <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
//                     {cert.link && (
//                       <a
//                         href={cert.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center text-blue-400 hover:text-cyan-300 text-sm"
//                       >
//                         View Certificate
//                         <FaArrowRight className="ml-2 text-xs" />
//                       </a>
//                     )}
//                     {cert.isAchievement && (
//                       <div className="mt-3">
//                         <span className="px-3 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded-full border border-yellow-500/20">
//                           Achievement
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}

//             </div>

//             {/* Load More Button */}
//             {visibleCertifications < certifications.length && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="flex justify-center mt-12"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={loadMoreCertifications}
//                   className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold flex items-center group"
//                 >
//                   <Plus className="w-5 h-5 mr-2" />
//                   Load More Certifications
//                 </motion.button>
//               </motion.div>
//             )}
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Get In Touch
//               </span>
//             </motion.h2>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="space-y-8"
//               >
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-4 text-white">Connect With Me</h3>
//                   <p className="text-gray-300">
//                     I'm always open to discussing new opportunities, interesting projects,
//                     research collaborations, or just having a conversation about technology and innovation.
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   <a
//                     href="mailto:vinodkudkyal2005@gmail.com"
//                     className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
//                   >
//                     <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors">
//                       <FaEnvelope className="w-6 h-6 text-blue-400" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-400">Email</div>
//                       <div className="text-white">vinodkudkyal2005@gmail.com</div>
//                     </div>
//                   </a>

//                   <a
//                     href="tel:+917666074208"
//                     className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-500/50 transition-all duration-300 group"
//                   >
//                     <div className="p-3 bg-green-500/10 rounded-lg mr-4 group-hover:bg-green-500/20 transition-colors">
//                       <FaWhatsapp className="w-6 h-6 text-green-400" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-400">Phone / WhatsApp</div>
//                       <div className="text-white">+91 7666074208</div>
//                     </div>
//                   </a>

//                   <div className="grid grid-cols-2 gap-4">
//                     <a
//                       href="https://github.com/vinodkudkyal"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-500/50 transition-all duration-300 group"
//                     >
//                       <div className="p-3 bg-gray-700/10 rounded-lg mr-4 group-hover:bg-gray-700/20 transition-colors">
//                         <FaGithub className="w-6 h-6 text-gray-300" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-400">GitHub</div>
//                         <div className="text-white">vinodkudkyal</div>
//                       </div>
//                     </a>

//                     <a
//                       href="https://www.linkedin.com/in/vinod-kudkyal-98936023a"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-600/50 transition-all duration-300 group"
//                     >
//                       <div className="p-3 bg-blue-600/10 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
//                         <FaLinkedin className="w-6 h-6 text-blue-500" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-400">LinkedIn</div>
//                         <div className="text-white">Vinod Kudkyal</div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>

//                 <div className="pt-4">
//                   <div className="flex items-center text-gray-400 mb-2">
//                     <MapPin className="w-5 h-5 mr-2" />
//                     <span>Location</span>
//                   </div>
//                   <p className="text-white">Solapur, Maharashtra, India</p>
//                 </div>

//                 <div className="flex space-x-4 pt-4">
//                   {[
//                     { icon: <FaInstagram />, href: "https://www.instagram.com/vinodkudkyal2005", color: "from-pink-500 to-rose-500" },
//                     { icon: <FaXTwitter />, href: "https://x.com/KudkyalVinod", color: "from-gray-700 to-black" },
//                     { icon: <FaWhatsapp />, href: "https://wa.me/7666074208", color: "from-green-500 to-emerald-500" },
//                   ].map((social) => (
//                     <motion.a
//                       key={social.href}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-3 bg-gradient-to-br ${social.color} rounded-full text-white`}
//                     >
//                       {social.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
//                   <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
//                   <ContactForm />
//                 </div>
//               </motion.div>
//             </div>

//             {/* Footer */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="mt-20 pt-8 border-t border-gray-800 text-center"
//             >
//               <div className="flex flex-col md:flex-row justify-between items-center">
//                 <p className="text-gray-400">
//                   © {new Date().getFullYear()} Vinod Kudkyal. All rights reserved.
//                 </p>
//                 <div className="flex items-center space-x-4 mt-4 md:mt-0">
//                   <a href="https://vinodkudkyal.github.io/Portfolio/" target="_blank" className="text-gray-400 hover:text-cyan-400">
//                     Portfolio
//                   </a>
//                   <span className="text-gray-600">•</span>
//                   <a href={resume} download className="text-gray-400 hover:text-cyan-400">
//                     Resume
//                   </a>
//                   <span className="text-gray-600">•</span>
//                   <a href="#home" onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-cyan-400">
//                     Back to Top
//                   </a>
//                 </div>
//               </div>
//               <p className="text-gray-500 text-sm mt-4">
//                 Built with React, Tailwind CSS, and Framer Motion
//               </p>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // Optional: npm install react-type-animation

// Font Awesome 5 icons
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaFileDownload,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

// Font Awesome 6 icons
import {
  FaXTwitter,
  FaArrowRight,
} from 'react-icons/fa6';

// Lucide icons
import {
  Home,
  User,
  Code,
  Briefcase,
  Award,
  ChevronRight,
  Sparkles,
  Cpu,
  Database,
  Globe,
  Smartphone,
  GraduationCap,
  Target,
  MapPin,
  Plus,
} from 'lucide-react';

// Import your components and files here
import ContactForm from "./components/Contact";
import certificate1 from './components/files/certificate1.pdf';
import certificate2 from './components/files/certificate2.pdf';
import certificate3 from './components/files/certificate3.pdf';
import certificate4 from './components/files/certificate4.pdf';
import certificate5 from './components/files/certificate5.pdf';
import certificate6 from './components/files/certificate6.pdf';
import certificate7 from './components/files/DLN.pdf';
import certificate8 from './components/files/NXTAI.pdf'
import resume from './components/files/resume.pdf';
import profile from './components/files/profile.png';
import CWS from "./components/files/CWS.png";
import SG from "./components/files/SG.png";
import SLD from "./components/files/SLD.png";
import VMS from "./components/files/VMS.png";
import RAR from "./components/files/RAR.png";
import FFERP from "./components/files/FFERP.png";
import SMC from "./components/files/SMC.png";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [visibleCertifications, setVisibleCertifications] = useState(6);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // --- DATA OBJECTS ---
  const projects = [
    {
      title: "Vaccine Management System",
      description: "Java & MySQL desktop application with secure role-based login, vaccine inventory management, and patient tracking system.",
      tech: ["Java", "MySQL", "Eclipse", "Desktop"],
      image: VMS,
      github: "https://github.com/vinodkudkyal/Vaccine-Management-System",
      live: null,
      type: "Desktop App"
    },
    {
      title: "StudyGears",
      description: "React + MongoDB learning platform with progress tracking, interactive Node.js games, and responsive UI for enhanced learning experience.",
      tech: ["React", "MongoDB", "Node.js", "Web"],
      image: SG,
      github: "https://github.com/vinodkudkyal/StudyGears",
      live: "https://studygears-foru.onrender.com/index.html",
      type: "Web Platform"
    },
    {
      title: "Sign Language Detection",
      description: "Real-time gesture recognition system using MediaPipe & OpenCV with text-to-speech conversion for enhanced accessibility.",
      tech: ["Python", "OpenCV", "MediaPipe", "AI"],
      image: SLD,
      github: "https://github.com/vinodkudkyal/Sign-Language-Detection",
      live: null,
      type: "AI/ML"
    },
    {
      title: "Calculator With Steganography",
      description: "A calculator app with integrated text steganography to embed hidden messages within arithmetic calculations.",
      tech: ["Java", "Android Studio", "Mobile"],
      image: CWS,
      github: "https://github.com/vinodkudkyal/Easy-Calculater",
      live: null,
      type: "Mobile App"
    },
    {
      title: "Rock & Rolls (CMS)",
      description: "Cafe management system with live order tracking, food preparation progress updates, and automated billing using MVC architecture.",
      tech: ["Java", "MVC", "Eclipse", "Desktop"],
      image: RAR,
      github: "https://github.com/vinodkudkyal/Rock-And-Rolls.git",
      live: null,
      type: "Desktop App"
    },
    {
      title: "Nagarshuddhi Sweeper Tracker",
      description: "Android & web-based system for geo-fenced route assignment, real-time sweeper tracking, and attendance logging.",
      tech: ["Android", "GPS", "Google Maps API"],
      image: SMC,
      icon: <MapPin className="w-12 h-12 text-orange-400" />,
      github: null,
      live: "https://smcadminweb.onrender.com/",
      type: "Android & Web"
    },
    {
      title: "Faculty Feedback System",
      description: "Full-stack MERN application for collecting and analyzing faculty feedback with real-time updates and analytics.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: FFERP,
      icon: <Smartphone className="w-12 h-12 text-indigo-400" />,
      github: "https://github.com/vinodkudkyal/FeedbackWA",
      live: "https://feedbackwa.onrender.com/",
      type: "Full Stack"
    }
  ];

  const certifications = [
    {
      title: "Custom College ERP System Development",
      issuer: "College Project Achievement",
      description: "Developed comprehensive ERP system for student records, faculty management, and attendance.",
      link: null,
      isAchievement: true,
      icon: "🏆",
      order: 1
    },
    {
      title: "SMC Collaboration - Nagarshuddhi Project",
      issuer: "Solapur Municipal Corporation",
      description: "Collaborated with SMC to deploy the Nagarshuddhi Sweeper Tracker system with GPS tracking.",
      link: null,
      isAchievement: true,
      icon: "🤝",
      order: 2
    },
    {
      title: "Machine Learning A-Z",
      issuer: "Udemy",
      description: "Comprehensive course covering machine learning algorithms, Python, R, and ChatGPT.",
      link: certificate1,
      isAchievement: false,
      order: 3
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      description: "Core concepts of machine learning and real-world applications.",
      link: certificate3,
      isAchievement: false,
      order: 4
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "Nvidia",
      description: "Deep learning fundamentals covering neural networks and advanced AI concepts.",
      link: certificate7,
      isAchievement: false,
      order: 5
    },
    {
      title: "Build Your Own Generative AI Model",
      issuer: "NxtWave",
      description: "Hands-on training in building and deploying generative AI models.",
      link: certificate8,
      isAchievement: false,
      order: 6
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      description: "Certification for basic Python programming skills.",
      link: certificate2,
      isAchievement: false,
      order: 7
    },
    {
      title: "Java Course",
      issuer: "Scaler",
      description: "Mastered fundamentals of Java programming and OOP concepts.",
      link: certificate4,
      isAchievement: false,
      order: 8
    },
    {
      title: "IoT Foundation",
      issuer: "Infosys Springboard",
      description: "Introductory certification to the fundamentals of IoT.",
      link: certificate5,
      isAchievement: false,
      order: 9
    },
    {
      title: "IoT 101",
      issuer: "Infosys Springboard",
      description: "Basic level certification for understanding IoT technology.",
      link: certificate6,
      isAchievement: false,
      order: 10
    }
  ];

  const sortedCertifications = [...certifications].sort((a, b) => a.order - b.order);

  const skillsData = [
    {
      category: "Languages",
      items: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 80 }
      ],
      icon: <Code />,
      color: "text-blue-400"
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Oracle", level: 70 }
      ],
      icon: <Database />,
      color: "text-purple-400"
    },
    {
      category: "Frameworks & AI",
      items: [
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "OpenCV", level: 75 },
        { name: "MediaPipe", level: 70 }
      ],
      icon: <Sparkles />,
      color: "text-orange-400"
    },
    {
        category: "Tools",
        items: [
          { name: "Android Studio", level: 85 },
          { name: "VS Code", level: 90 },
          { name: "Git/GitHub", level: 80 }
        ],
        icon: <Cpu />,
        color: "text-green-400"
      }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Global Background Grid Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
      </div>

      {/* Floating Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl flex items-center gap-1 md:gap-2"
        >
             <motion.div 
             className="px-4 py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 hidden md:block cursor-pointer"
             onClick={() => scrollToSection('home')}
             >
                VK.
             </motion.div>
             <div className="h-6 w-[1px] bg-white/10 hidden md:block mx-2"></div>

            {[
              { id: 'home', icon: <Home size={16} />, label: 'Home' },
              { id: 'education', icon: <GraduationCap size={16} />, label: 'Edu' },
              { id: 'skills', icon: <Code size={16} />, label: 'Skills' },
              { id: 'projects', icon: <Briefcase size={16} />, label: 'Work' },
              { id: 'certifications', icon: <Award size={16} />, label: 'Awards' },
              { id: 'contact', icon: <FaEnvelope size={16} />, label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.icon}</span>
                <span className="relative z-10 hidden sm:block">{item.label}</span>
              </button>
            ))}
        </motion.nav>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for Work
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Hi, I'm <br/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                            Vinod Kudkyal
                        </span>
                    </h1>

                    <div className="text-xl md:text-2xl text-gray-400 mb-8 h-[60px] md:h-auto font-light">
                        I am a <span className="text-white font-semibold">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'AI & Data Science Engineer',
                                    2000,
                                    'Machine Learning Enthusiast',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </div>

                    <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Passionate about bridging the gap between data and design. 
                        Currently pursuing B.Tech in AI & DS, building intelligent systems that solve real-world problems.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            View Projects <FaArrowRight />
                        </motion.button>
                        
                        <motion.a
                            href={resume}
                            download="Vinod_Kudkyal_Resume"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
                        >
                            <FaFileDownload /> Resume
                        </motion.a>
                    </div>

                    {/* Social Snippets */}
                    <div className="mt-12 flex items-center gap-6 text-gray-400">
                         <a href="https://github.com/vinodkudkyal" target="_blank" className="hover:text-white transition-colors"><FaGithub size={24} /></a>
                         <a href="https://www.linkedin.com/in/vinod-kudkyal-98936023a" target="_blank" className="hover:text-blue-400 transition-colors"><FaLinkedin size={24} /></a>
                         <a href="mailto:vinodkudkyal2005@gmail.com" className="hover:text-white transition-colors"><FaEnvelope size={24} /></a>
                         <div className="h-8 w-[1px] bg-gray-800"></div>
                         <div className="flex items-center gap-2 text-sm">
                            <MapPin size={16} /> Solapur, IN
                         </div>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2 flex justify-center relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-2xl bg-gray-900">
                             <img src={profile} alt="Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        
                        {/* Floating Badges */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-10 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
                        >
                            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><Code size={20} /></div>
                            <div>
                                <div className="text-xs text-gray-400">Stack</div>
                                <div className="font-bold text-sm">Full Stack</div>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-4 bottom-10 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
                        >
                            <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400"><Sparkles size={20} /></div>
                            <div>
                                <div className="text-xs text-gray-400">Focus</div>
                                <div className="font-bold text-sm">AI & ML</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-gray-500 rounded-full"></div>
                </div>
            </motion.div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24 px-4 bg-gradient-to-b from-[#030712] to-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title="Education" subtitle="My Academic Journey" />
                
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                         { degree: "B. Tech in AI & DS", school: "N.K. Orchid College of Engg", year: "2023 - 2026", score: "7.42 CGPA", status: "Pursuing" },
                         { degree: "Diploma in IT", school: "Government Polytechnic Solapur", year: "2020 - 2023", score: "85.50%", status: "Completed" },
                         { degree: "Secondary School (SSC)", school: "SVCS High School Solapur", year: "2019 - 2020", score: "87.20%", status: "Completed" }
                    ].map((edu, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-blue-400 group-hover:text-blue-300 transition-colors">
                                        <GraduationCap size={24} />
                                    </div>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full border ${edu.status === 'Pursuing' ? 'border-blue-500/30 text-blue-300 bg-blue-500/10' : 'border-green-500/30 text-green-300 bg-green-500/10'}`}>
                                        {edu.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                <p className="text-gray-400 text-sm mb-4">{edu.school}</p>
                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="text-sm text-gray-500">{edu.year}</span>
                                    <span className="font-mono text-cyan-400 font-semibold">{edu.score}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title="Technical Arsenal" subtitle="Skills & Technologies" />
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className={`flex items-center gap-3 mb-6 ${skillGroup.color}`}>
                                {skillGroup.icon}
                                <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                            </div>
                            <div className="space-y-4">
                                {skillGroup.items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className={`h-full rounded-full bg-current ${skillGroup.color}`} 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Tags */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 flex flex-wrap justify-center gap-3"
                >
                    {["Problem Solving", "System Design", "Data Structures", "REST APIs", "Agile", "Team Leadership", "UI/UX Design"].map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-default">
                            {tag}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-900/50 to-[#030712]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="Featured Projects" subtitle="Code into Reality" />
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, visibleProjects).map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>

                {visibleProjects < projects.length && (
                    <div className="flex justify-center mt-12">
                         <button 
                            onClick={() => setVisibleProjects(prev => prev + 3)}
                            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-medium"
                         >
                            Load More <Plus className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                         </button>
                    </div>
                )}
            </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-24 px-4">
             <div className="max-w-7xl mx-auto">
                <SectionHeader title="Certifications & Awards" subtitle="Continuous Learning" />
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedCertifications.slice(0, visibleCertifications).map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className={`group relative p-6 rounded-2xl bg-white/5 border ${cert.isAchievement ? 'border-yellow-500/20' : 'border-white/5'} hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
                            
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${cert.isAchievement ? 'bg-yellow-500/10 text-yellow-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                    {cert.isAchievement ? <span className="text-xl">🏆</span> : <Award size={20} />}
                                </div>
                                {cert.isAchievement && (
                                    <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-[10px] uppercase tracking-wider font-bold rounded">
                                        Achievement
                                    </span>
                                )}
                            </div>

                            <h3 className="text-lg font-bold mb-2 group-hover:text-blue-200 transition-colors line-clamp-2">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4">{cert.issuer}</p>
                            <p className="text-sm text-gray-500 flex-grow mb-6 line-clamp-3">
                                {cert.description}
                            </p>

                            {cert.link && (
                                <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider gap-2 mt-auto"
                                >
                                    Verify Credential <FaArrowRight />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
                
                {visibleCertifications < sortedCertifications.length && (
                    <div className="flex justify-center mt-12">
                         <button 
                            onClick={() => setVisibleCertifications(prev => prev + 3)}
                            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-medium"
                         >
                            Show More <Plus className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                         </button>
                    </div>
                )}
             </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
             {/* Background glow for contact */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
             
             <div className="max-w-5xl mx-auto relative z-10">
                <SectionHeader title="Get In Touch" subtitle="Let's build something amazing together" />
                
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I'm currently looking for internships and new opportunities. 
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <ContactItem 
                                icon={<FaEnvelope />} 
                                label="Email" 
                                value="vinodkudkyal2005@gmail.com" 
                                href="mailto:vinodkudkyal2005@gmail.com" 
                            />
                             <ContactItem 
                                icon={<FaWhatsapp />} 
                                label="Phone / WhatsApp" 
                                value="+91 7666074208" 
                                href="https://wa.me/917666074208" 
                            />
                             <ContactItem 
                                icon={<MapPin />} 
                                label="Location" 
                                value="Solapur, Maharashtra, India" 
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                             <SocialButton href="https://www.instagram.com/vinodkudkyal2005" icon={<FaInstagram />} color="hover:bg-pink-600" />
                             <SocialButton href="https://x.com/KudkyalVinod" icon={<FaXTwitter />} color="hover:bg-black" />
                             <SocialButton href="https://www.linkedin.com/in/vinod-kudkyal-98936023a" icon={<FaLinkedin />} color="hover:bg-blue-600" />
                        </div>
                    </motion.div>

                    {/* Contact Form Container */}
                    <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
                    >
                        {/* Assuming ContactForm handles its own internals */}
                        <ContactForm /> 
                    </motion.div>
                </div>
             </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p className="mb-2">© {new Date().getFullYear()} Vinod Kudkyal. Crafted with precision.</p>
            <div className="flex justify-center gap-4 text-xs">
                <span>React</span>
                <span>•</span>
                <span>Tailwind</span>
                <span>•</span>
                <span>Framer Motion</span>
            </div>
        </footer>

      </main>
    </div>
  );
};

// --- SUB COMPONENTS ---

const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
        >
            {subtitle}
        </motion.span>
        <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
        >
            {title}
        </motion.h2>
    </div>
);

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
    >
        {/* Image / Icon Area */}
        <div className="h-48 overflow-hidden relative bg-gray-900 flex items-center justify-center">
            {project.image ? (
                <>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </>
            ) : (
                <div className="scale-125 opacity-80 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                </div>
            )}
            
            {/* Type Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                {project.type}
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/5">
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-3 mt-auto">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
                        <FaGithub size={18} />
                    </a>
                )}
                {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-white transition-colors">
                        <FaExternalLinkAlt size={16} />
                    </a>
                )}
                {!project.github && !project.live && (
                    <span className="text-xs text-gray-500 italic">Private Project</span>
                )}
            </div>
        </div>
    </motion.div>
);

const ContactItem = ({ icon, label, value, href }) => {
    const Wrapper = href ? 'a' : 'div';
    return (
        <Wrapper href={href} className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                {icon}
            </div>
            <div>
                <div className="text-xs text-gray-500 mb-1">{label}</div>
                <div className="text-white font-medium group-hover:text-blue-200 transition-colors">{value}</div>
            </div>
        </Wrapper>
    );
};

const SocialButton = ({ href, icon, color }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all ${color} hover:text-white hover:-translate-y-1`}
    >
        {icon}
    </a>
);

export default Portfolio;