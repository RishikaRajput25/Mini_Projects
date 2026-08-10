import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const footercontact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Me 📩</h2>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold">Your Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold">Email Address</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold">Your Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            rows="4" 
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Send Message 🚀
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-6 flex space-x-6">
        <a href="https://github.com/yourname" target="_blank" className="text-gray-700 dark:text-white text-3xl hover:text-blue-500">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourname" target="_blank" className="text-gray-700 dark:text-white text-3xl hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="mailto:your-email@example.com" className="text-gray-700 dark:text-white text-3xl hover:text-blue-500">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default footercontact;
