import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_wpgzm7s", // Replace with your EmailJS Service ID
        "template_vrfaqdh", // Replace with your EmailJS Template ID
        formRef.current,
        "zgR48tCn1H09mv1oN" // Replace with your EmailJS Public API Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setIsSent(true);
          setLoading(false);
          formRef.current.reset(); // Clear form after submission
        },
        (error) => {
          console.error("Error:", error.text);
          setIsSent(false);
          setLoading(false);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full max-w-full sm:max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Enter Your Name"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Enter Your Email"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      <div className="flex flex-col mb-6">
        <label className="text-gray-700 font-semibold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message here..."
          rows="5"
          required
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-auto">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base"
          style={{ width: "auto" }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>

      {/* Success Message */}
      {isSent && (
        <p className="mt-4 text-green-600 text-center font-semibold">
          ✅ Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
