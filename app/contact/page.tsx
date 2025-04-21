"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  User, 
  CheckCircle,
  Clock,
  Users,
  Building,
  ChevronRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreeToTerms: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-40 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 relative z-10"
          >
            <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4 inline-block">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              We&apos;d Love to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Hear</span> From You
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Have questions about our school, admissions process, or programs? Our team is here to help you. 
              Reach out to us and we&apos;ll respond as soon as we can.
            </p>
          </motion.div>
          
          {/* Decorative items */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute top-10 right-10 w-20 h-20 md:w-40 md:h-40"
          >
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500/20 rounded-lg transform rotate-12"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-green-500/20 rounded-lg transform -rotate-12"></div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information Cards */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4 inline-block">
              CONTACT DETAILS
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Multiple ways to connect with our dedicated team
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* General Inquiries */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">General Inquiries</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  For general questions about our school and programs
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <a href="mailto:info@nites.edu" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400">
                      info@nites.edu
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <a href="tel:+919876543210" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Admissions */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Admissions Office</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  For enrollment, applications, and admission queries
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                    <a href="mailto:admissions@nites.edu" className="text-slate-700 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400">
                      admissions@nites.edu
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                    <a href="tel:+911234567890" className="text-slate-700 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400">
                      +91 12345 67890
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Administration */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Administration</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  For administrative matters and official communications
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
                    <a href="mailto:admin@nites.edu" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">
                      admin@nites.edu
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
                    <a href="tel:+911234098765" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">
                      +91 12340 98765
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Address and Map Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Visit Our Campus</h2>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">Our Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    New Iqra Techno English School<br />
                    123 Education Street, Knowledge Park<br />
                    Tech City, State - 500001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">Office Hours</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Monday to Friday: 8:00 AM - 4:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md mt-8">
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  Schedule a Campus Tour
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Would you like to visit our campus? We offer guided tours for prospective students and parents.
                </p>
                <a href="#contact-form" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Request a tour through our contact form
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Placeholder for map - in a real implementation, you would use Google Maps or similar */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden h-full min-h-80">
                <div className="bg-slate-200 dark:bg-slate-700 h-full w-full flex items-center justify-center p-6 text-center">
                  <div>
                    <MapPin className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <p className="text-slate-600 dark:text-slate-300">
                      Interactive map would be displayed here.<br />
                      (Google Maps Integration)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4 inline-block">
              SEND US A MESSAGE
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a question or need more information? Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Thank You!</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  Your message has been successfully submitted. Our team will contact you within 1-2 business days.
                </p>
                <div className="p-6 bg-slate-50 dark:bg-slate-700/50 rounded-xl mb-6">
                  <div className="text-left mb-4">
                    <span className="block text-sm text-slate-500 dark:text-slate-400">Reference Number</span>
                    <span className="text-lg font-medium text-slate-900 dark:text-white">NITES-INQ-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
                  </div>
                  <div className="text-left">
                    <span className="block text-sm text-slate-500 dark:text-slate-400">Submitted By</span>
                    <span className="text-lg font-medium text-slate-900 dark:text-white">{formData.name}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
              >
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Your Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User className="w-5 h-5 text-slate-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail className="w-5 h-5 text-slate-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Phone className="w-5 h-5 text-slate-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="admission">Admission Inquiry</option>
                          <option value="academics">Academic Programs</option>
                          <option value="fees">Fee Structure</option>
                          <option value="transportation">Transportation</option>
                          <option value="campus">Campus Visit</option>
                          <option value="career">Career Opportunities</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageSquare className="w-5 h-5 text-slate-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Type your message here..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-slate-700 dark:text-slate-300">
                        I agree to the <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">privacy policy</a> and consent to the processing of my personal data.
                      </label>
                    </div>
                    
                    <div className="text-right">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center ml-auto"
                      >
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Department Contact Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 inline-block">
              SPECIALIZED DEPARTMENTS
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Contact Specific Departments
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Need to reach a specific department? Here&apos;s how to connect with our specialized teams.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Academic Affairs',
                email: 'academics@nites.edu',
                phone: '+91 98760 12345',
                color: 'blue'
              },
              {
                title: 'Student Services',
                email: 'student.services@nites.edu',
                phone: '+91 98760 23456',
                color: 'green'
              },
              {
                title: 'Finance & Accounts',
                email: 'accounts@nites.edu',
                phone: '+91 98760 34567',
                color: 'yellow'
              },
              {
                title: 'Transportation',
                email: 'transport@nites.edu',
                phone: '+91 98760 45678',
                color: 'red'
              },
              {
                title: 'IT Support',
                email: 'it.support@nites.edu',
                phone: '+91 98760 56789',
                color: 'indigo'
              },
              {
                title: 'Career Counseling',
                email: 'careers@nites.edu',
                phone: '+91 98760 67890',
                color: 'purple'
              }
            ].map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md"
              >
                <h3 className={`text-lg font-medium text-${dept.color}-600 dark:text-${dept.color}-400 mb-3`}>
                  {dept.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-slate-500 dark:text-slate-400 mr-3" />
                    <a href={`mailto:${dept.email}`} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-slate-500 dark:text-slate-400 mr-3" />
                    <a href={`tel:${dept.phone}`} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;