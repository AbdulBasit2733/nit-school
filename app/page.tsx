"use client";
import { motion } from "framer-motion";

import TestimonialsSection from "./testimonials/page";
import CoursesSection from "./courses/page";
import WhyChooseUs from "./why-choose-us/page";
import CTA from "./cta/page";
import FeaturedCourseSlider from "./components/FeaturedCourseSlider";
import AboutUs from "./components/AboutUs";
import { Atom, Book, Code, Globe, GraduationCap, MousePointerSquareDashed } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <FeaturedCourseSlider />
      <WhyChooseUs />
      <CoursesSection />
      <TestimonialsSection />
      <CTA />
    </>
  );
}

const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/20 animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-48 h-48 rounded-full bg-green-500/20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-40 w-56 h-56 rounded-full bg-yellow-500/20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-40 w-72 h-72 rounded-full bg-teal-500/20 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative flex-grow flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {/* Animated background shapes */}
        <AnimatedShapes />

        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-2"
            >
              <div className="h-1 w-10 bg-green-600 rounded-full"></div>
              <p className="text-green-600 font-medium">CBSE Affiliated</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight"
            >
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Islamic Values
              </span>{" "}
              Meet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Modern Education
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300"
            >
              New Iqra Techno English School provides a balanced education from
              Jr. KG to 12th grade, nurturing both spiritual growth and
              technological excellence in a CBSE curriculum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                Explore Admission
              </button>
              <button className="px-6 py-3 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 font-bold rounded-xl shadow hover:shadow-md transform hover:-translate-y-1 transition duration-300">
                Virtual Tour
              </button>
            </motion.div>
          </div>

          <motion.div
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <IslamicTechAnimation />
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              fill="currentColor"
              className="text-white dark:text-slate-800"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Unique Approach
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Combining Islamic values with modern education to nurture
              well-rounded individuals ready for the challenges of the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Book}
              title="Islamic Education"
              description="Strong foundation in Islamic studies, Quran, and moral values integrated into daily curriculum."
              delay={0.1}
            />
            <FeatureCard
              icon={Code}
              title="Modern Technology"
              description="State-of-the-art computer labs and technology-integrated learning experiences."
              delay={0.2}
            />
            <FeatureCard
              icon={GraduationCap}
              title="CBSE Curriculum"
              description="Following the CBSE pattern with excellence in academic standards from Jr. KG to 12th grade."
              delay={0.3}
            />
            <FeatureCard
              icon={Globe}
              title="Global Perspective"
              description="Preparing students with a worldview while maintaining cultural values and identity."
              delay={0.4}
            />
            <FeatureCard
              icon={Atom}
              title="Science & Innovation"
              description="Focus on STEM education with hands-on experiments and innovative learning approaches."
              delay={0.5}
            />
            <FeatureCard
              icon={MousePointerSquareDashed}
              title="Character Building"
              description="Emphasis on developing strong character, ethics, and leadership qualities."
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </motion.div>
  );
};

const IslamicTechAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute w-64 h-64 bg-blue-500/10 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="relative flex items-center justify-center">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-48 h-48">
              <motion.div
                className="absolute top-0 left-0 w-6 h-6 bg-blue-600 rounded-full shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="absolute top-0 right-0 w-6 h-6 bg-green-600 rounded-full shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-6 h-6 bg-yellow-600 rounded-full shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-6 h-6 bg-red-600 rounded-full shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </div>
        </motion.div>

        <div className="z-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center justify-center">
          <Image
            src="/logo.jpg"
            alt="School Logo"
            width={36}
            height={36}
            className="w-36 h-36 object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};
