"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Clipboard, 
  Clock, 
  FileText, 
  GraduationCap, 
  HelpCircle, 
  Mail, 
  MapPin, 
  Phone, 
  User, 
  Users, 
  ChevronRight,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    grade: '',
    previousSchool: '',
    message: '',
    agreeToTerms: false
  });
  
  const [activeStep, setActiveStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

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

  // Form steps
  const steps = [
    { id: 1, title: 'Personal Information', icon: User },
    { id: 2, title: 'Academic Background', icon: BookOpen },
    { id: 3, title: 'Additional Information', icon: FileText },
  ];

  // Grade options
  const grades = [
    { value: '', label: 'Select Grade' },
    { value: 'KG', label: 'Kindergarten' },
    { value: '1', label: 'Grade 1' },
    { value: '2', label: 'Grade 2' },
    { value: '3', label: 'Grade 3' },
    { value: '4', label: 'Grade 4' },
    { value: '5', label: 'Grade 5' },
    { value: '6', label: 'Grade 6' },
    { value: '7', label: 'Grade 7' },
    { value: '8', label: 'Grade 8' },
    { value: '9', label: 'Grade 9' },
    { value: '10', label: 'Grade 10' },
    { value: '11', label: 'Grade 11' },
    { value: '12', label: 'Grade 12' },
  ];

  // FAQ data
  const faqs = [
    {
      id: 1, 
      question: 'What is the admission process at New Iqra Techno English School?',
      answer: 'The admission process includes submitting an enquiry form, attending an interview, assessment test (for grades 2 and above), document verification, and payment of registration fees. Once these steps are completed successfully, your child will be enrolled in the appropriate grade.'
    },
    {
      id: 2, 
      question: 'What documents are required for admission?',
      answer: 'Required documents include birth certificate, previous school transfer certificate (if applicable), report cards from the previous school, passport-sized photographs, address proof, and Aadhar card or other identity documents of both the student and parents.'
    },
    {
      id: 3, 
      question: 'Is there an entrance exam for admission?',
      answer: 'Yes, for grades 2 and above, students are required to take an assessment test to evaluate their academic readiness. For kindergarten and grade 1, we conduct an informal interaction with the child and parents.'
    },
    {
      id: 4, 
      question: 'What is the age requirement for different grades?',
      answer: 'For Kindergarten, children should be at least 3.5 years old. For Grade 1, children should be at least 5.5 years old by June 1st of the academic year. For other grades, the age requirement increases accordingly.'
    },
    {
      id: 5, 
      question: 'Does the school provide transportation services?',
      answer: 'Yes, the school provides transportation services covering various areas of the city. The fees vary depending on the distance. You can enquire about specific routes during the admission process.'
    },
    {
      id: 6, 
      question: 'What is the medium of instruction?',
      answer: 'The primary medium of instruction is English. Arabic and Islamic Studies are also part of the curriculum in alignment with our values-based education approach.'
    }
  ];

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

  // Handle step navigation
  const nextStep = () => {
    setActiveStep(prev => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
  };

  // Toggle accordion
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-40 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
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
              ADMISSIONS OPEN 2025-26
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Educational</span> Journey
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              New Iqra Techno English School welcomes students to join our vibrant community of learning, 
              where academic excellence meets Islamic values and modern education.
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
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-10 left-10 w-20 h-20 md:w-32 md:h-32"
          >
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500/10 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-500/10 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Admission Process */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4 inline-block">
              HOW TO APPLY
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Our Admission Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A step-by-step guide to joining our school community
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              
              {/* Process steps */}
              {[
                {
                  title: 'Submit Enquiry Form',
                  description: 'Complete the online enquiry form or visit our admissions office to express interest.',
                  icon: Clipboard,
                  color: 'blue'
                },
                {
                  title: 'Document Verification',
                  description: 'Submit required documents for initial verification including birth certificate and previous academic records.',
                  icon: FileText,
                  color: 'green'
                },
                {
                  title: 'Entrance Assessment',
                  description: 'Students applying for Grade 2 and above take an assessment test to evaluate their academic readiness.',
                  icon: BookOpen,
                  color: 'yellow'
                },
                {
                  title: 'Parent-Student Interview',
                  description: 'A brief interaction with the Principal and Admission Committee to understand mutual expectations.',
                  icon: Users,
                  color: 'purple'
                },
                {
                  title: 'Offer of Admission',
                  description: 'Successful candidates receive an admission offer with details about fee structure and documents.',
                  icon: Mail,
                  color: 'indigo'
                },
                {
                  title: 'Registration & Enrollment',
                  description: 'Complete the registration process by paying the fees and submitting all required documents.',
                  icon: CheckCircle,
                  color: 'green'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 md:mb-24 relative`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-${step.color}-500 shadow-lg transform -translate-x-1/2 z-10 flex items-center justify-center`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} md:w-1/2`}>
                    <div className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-${step.color}-500`}>
                      <div className={`p-3 rounded-full bg-${step.color}-100 dark:bg-${step.color}-900/30 inline-flex mb-4`}>
                        <step.icon className={`w-6 h-6 text-${step.color}-600 dark:text-${step.color}-400`} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Enquiry Form */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4 inline-block">
              GET STARTED
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Admission Enquiry Form
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Fill out the form below to initiate the admission process for your child.
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
                  Your admission enquiry has been successfully submitted. Our admissions team will contact you within 2-3 working days.
                </p>
                <div className="p-6 bg-slate-50 dark:bg-slate-700/50 rounded-xl mb-6">
                  <div className="text-left mb-4">
                    <span className="block text-sm text-slate-500 dark:text-slate-400">Reference Number</span>
                    <span className="text-lg font-medium text-slate-900 dark:text-white">NITES-ADM-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
                  </div>
                  <div className="text-left">
                    <span className="block text-sm text-slate-500 dark:text-slate-400">Student Name</span>
                    <span className="text-lg font-medium text-slate-900 dark:text-white">{formData.studentName}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Progress bar */}
                <div className="bg-slate-50 dark:bg-slate-700/50 p-6">
                  <div className="flex justify-between mb-2">
                    {steps.map((step) => (
                      <motion.button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`flex flex-col items-center relative z-10 ${
                          activeStep === step.id 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : activeStep > step.id 
                              ? 'text-green-600 dark:text-green-400' 
                              : 'text-slate-400 dark:text-slate-500'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          activeStep === step.id 
                            ? 'bg-blue-100 dark:bg-blue-900/30' 
                            : activeStep > step.id 
                              ? 'bg-green-100 dark:bg-green-900/30' 
                              : 'bg-slate-200 dark:bg-slate-600/50'
                        }`}>
                          {activeStep > step.id ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <step.icon className="w-5 h-5" />
                          )}
                        </div>
                        <span className="text-xs font-medium hidden md:block">{step.title}</span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Progress line */}
                  <div className="relative h-1 bg-slate-200 dark:bg-slate-600/50 mt-5 mb-2">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-green-600"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  {activeStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="studentName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Student Full Name *
                          </label>
                          <input
                            type="text"
                            id="studentName"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter student&apos;s full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="parentName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Parent/Guardian Name *
                          </label>
                          <input
                            type="text"
                            id="parentName"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter parent&apos;s/guardian&apos;s name"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your email address"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Residential Address *
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          rows="3"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your complete address"
                        ></textarea>
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Academic Background</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="grade" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Grade Applying For *
                          </label>
                          <select
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            {grades.map(grade => (
                              <option key={grade.value} value={grade.value}>{grade.label}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="previousSchool" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Previous School (if any)
                          </label>
                          <input
                            type="text"
                            id="previousSchool"
                            name="previousSchool"
                            value={formData.previousSchool}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter previous school name"
                          />
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                        <h4 className="flex items-center text-lg font-medium text-blue-700 dark:text-blue-400 mb-3">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          Academic Requirements
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                          <li>Minimum passing grades from previous academic year</li>
                          <li>Assessment test for grades 2 and above</li>
                          <li>Interview with admission committee</li>
                          <li>Previous school records and transfer certificate</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Additional Information</h3>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Message / Special Requirements (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Any additional information you would like to share"
                        ></textarea>
                      </div>
                      
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
                        <h4 className="flex items-center text-lg font-medium text-yellow-700 dark:text-yellow-400 mb-3">
                          <HelpCircle className="w-5 h-5 mr-2" />
                          Important Information
                        </h4>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          Please note that submission of this form is only an enquiry and does not guarantee admission.
                          Our admissions team will review your application and contact you for the next steps.
                        </p>
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
                          I confirm that the information provided is accurate and I agree to the school&apos;s 
                          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline"> terms and conditions</a>.
                        </label>
                      </div>
                    </div>
                  )}
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                    {activeStep > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-2 border border-slate-300 dark:border-slateborder-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                      >
                        Back
                      </button>
                    ) : (
                      <div></div>
                    )}
                    
                    {activeStep < steps.length ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center"
                      >
                        Next Step
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors flex items-center"
                      >
                        Submit Application
                        <CheckCircle className="w-4 h-4 ml-2" />
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 inline-block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Common Admission Queries
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get answers to the most commonly asked questions about our admission process
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: faq.id * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all ${
                    activeAccordion === faq.id
                      ? 'bg-white dark:bg-slate-800 shadow-md'
                      : 'bg-white/50 dark:bg-slate-800/50 hover:bg-white hover:dark:bg-slate-800'
                  }`}
                >
                  <span className="font-medium text-slate-900 dark:text-white">{faq.question}</span>
                  {activeAccordion === faq.id ? (
                    <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  )}
                </button>
                
                {activeAccordion === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-slate-800 px-6 pb-6 rounded-b-lg -mt-1 pt-2"
                  >
                    <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Begin Your Educational Journey?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join New Iqra Techno English School and give your child the advantage of quality education with Islamic values.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#enquiry-form" className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium flex items-center justify-center">
                Schedule a Visit
                <MapPin className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-slate-600 dark:text-slate-300">admissions@nites.edu</p>
              <p className="text-slate-600 dark:text-slate-300">info@nites.edu</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Call Us</h3>
              <p className="text-slate-600 dark:text-slate-300">+91 98765 43210</p>
              <p className="text-slate-600 dark:text-slate-300">+91 12345 67890</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Office Hours</h3>
              <p className="text-slate-600 dark:text-slate-300">Monday to Friday: 8:00 AM - 4:00 PM</p>
              <p className="text-slate-600 dark:text-slate-300">Saturday: 9:00 AM - 1:00 PM</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Important Dates */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-4 inline-block">
              MARK YOUR CALENDAR
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Important Admission Dates
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Key dates to remember for the 2025-26 academic year admissions
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Application Open Date',
                  date: 'December 1, 2024',
                  description: 'Start of the admission process for the academic year 2025-26',
                  color: 'blue'
                },
                {
                  title: 'Early Bird Deadline',
                  date: 'January 31, 2025',
                  description: 'Last date to get early application benefits and priority processing',
                  color: 'green'
                },
                {
                  title: 'Assessment Tests',
                  date: 'February 10-28, 2025',
                  description: 'Scheduled tests for students applying to Grade 2 and above',
                  color: 'yellow'
                },
                {
                  title: 'Interview Schedule',
                  date: 'March 5-20, 2025',
                  description: 'Parent and student interviews with the admission committee',
                  color: 'purple'
                },
                {
                  title: 'Final Application Deadline',
                  date: 'April 15, 2025',
                  description: 'Last date to submit applications for the 2025-26 academic year',
                  color: 'red'
                },
                {
                  title: 'Academic Year Begins',
                  date: 'June 1, 2025',
                  description: 'First day of the new academic session for all students',
                  color: 'indigo'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden`}
                >
                  <div className={`bg-${item.color}-500 w-2`}></div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center mb-3">
                      <Calendar className={`w-5 h-5 text-${item.color}-600 dark:text-${item.color}-400 mr-2`} />
                      <h3 className="font-medium text-slate-900 dark:text-white">{item.title}</h3>
                    </div>
                    <p className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">{item.date}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;