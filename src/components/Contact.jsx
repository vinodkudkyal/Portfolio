  // import React, { useRef, useState } from "react";
  // import emailjs from "@emailjs/browser";

  // const ContactForm = () => {
  //   const formRef = useRef();
  //   const [isSent, setIsSent] = useState(false);
  //   const [loading, setLoading] = useState(false);

  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     setLoading(true);

  //     emailjs
  //       .sendForm(
  //         "service_wpgzm7s", // Replace with your EmailJS Service ID
  //         "template_vrfaqdh", // Replace with your EmailJS Template ID
  //         formRef.current,
  //         "zgR48tCn1H09mv1oN" // Replace with your EmailJS Public API Key
  //       )
  //       .then(
  //         (result) => {
  //           console.log("Success:", result.text);
  //           setIsSent(true);
  //           setLoading(false);
  //           formRef.current.reset(); // Clear form after submission
  //         },
  //         (error) => {
  //           console.error("Error:", error.text);
  //           setIsSent(false);
  //           setLoading(false);
  //         }
  //       );
  //   };

  //   return (
  //     <form
  //       ref={formRef}
  //       onSubmit={sendEmail}
  //       className="w-full max-w-full sm:max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105"
  //     >
  //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
  //         <div className="flex flex-col">
  //           <label className="text-gray-700 font-semibold mb-2" htmlFor="name">
  //             Full Name
  //           </label>
  //           <input
  //             type="text"
  //             name="user_name"
  //             id="name"
  //             placeholder="Enter Your Name"
  //             required
  //             className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
  //           />
  //         </div>
  //         <div className="flex flex-col">
  //           <label className="text-gray-700 font-semibold mb-2" htmlFor="email">
  //             Email Address
  //           </label>
  //           <input
  //             type="email"
  //             name="user_email"
  //             id="email"
  //             placeholder="Enter Your Email"
  //             required
  //             className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
  //           />
  //         </div>
  //       </div>

  //       <div className="flex flex-col mb-6">
  //         <label className="text-gray-700 font-semibold mb-2" htmlFor="message">
  //           Message
  //         </label>
  //         <textarea
  //           name="message"
  //           id="message"
  //           placeholder="Your message here..."
  //           rows="5"
  //           required
  //           className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
  //         ></textarea>
  //       </div>

  //       {/* Submit Button */}
  //       <div className="flex justify-center mt-auto">
  //         <button
  //           type="submit"
  //           className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base"
  //           style={{ width: "auto" }}
  //           disabled={loading}
  //         >
  //           {loading ? "Sending..." : "Send Message"}
  //         </button>
  //       </div>

  //       {/* Success Message */}
  //       {isSent && (
  //         <p className="mt-4 text-green-600 text-center font-semibold">
  //           ✅ Message sent successfully!
  //         </p>
  //       )}
  //     </form>
  //   );
  // };

  // export default ContactForm;


  import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_wpgzm7s",
        "template_vrfaqdh",
        formRef.current,
        "zgR48tCn1H09mv1oN"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setIsSent(true);
          setLoading(false);
          formRef.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.error("Error:", error.text);
          setIsSent(false);
          setLoading(false);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-gray-300 font-medium text-sm" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <label className="text-gray-300 font-medium text-sm" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gray-300 font-medium text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message here..."
            rows="5"
            required
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none transition-all duration-300"
          ></textarea>
        </div>

        <div className="pt-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-blue-500/25'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </div>

        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
          >
            <p className="text-green-400 text-center font-medium">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;