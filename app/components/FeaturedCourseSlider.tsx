"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Star, Users, BookOpen } from "lucide-react";

// New Iqra Techno NIT - Sample School Programs
const featuredCourses = [
  {
    id: 1,
    title: "Junior KG – Foundational Program",
    description: "Nurturing young minds with a balance of basic literacy, numeracy, and Islamic values through play-based learning.",
    image: "/school/jrkg.jpg",
    category: "Pre-Primary",
    rating: 5.0,
    students: 120,
    duration: "1 Year",
    level: "Beginner",
    price: 0
  },
  {
    id: 2,
    title: "Primary (1st to 5th) – Deen & Duniya Integration",
    description: "An engaging curriculum that blends core subjects like Math, English & Science with Quranic studies, Arabic, and Islamic etiquette.",
    image: "/school/primary.jpg",
    category: "Primary",
    rating: 4.9,
    students: 320,
    duration: "5 Years",
    level: "Beginner to Intermediate",
    price: 0
  },
  {
    id: 3,
    title: "Higher Secondary (11th-12th) – Career-Focused Islamic Learning",
    description: "Specialized streams in Science, Commerce & Arts with Islamic perspective. Prepare for NEET, JEE, or other careers grounded in values.",
    image: "/school/secondary.jpg",
    category: "Higher Secondary",
    rating: 4.8,
    students: 150,
    duration: "2 Years",
    level: "Advanced",
    price: 0
  }
];

export default function FeaturedCourseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredCourses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredCourses.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Programs at New Iqra Techno NIT
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A unique fusion of Deen and Duniya education for all age groups from Jr. KG to 12th
          </p>
        </div>

        <div className="relative">
          {/* Controls */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 px-4">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors duration-300">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors duration-300">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slides */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row bg-white dark:bg-slate-800 overflow-hidden"
              >
                <div className="lg:w-1/2 relative">
                  <img
                    src={featuredCourses[currentIndex].image}
                    alt={featuredCourses[currentIndex].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {featuredCourses[currentIndex].category}
                  </div>
                </div>

                <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill={i < Math.floor(featuredCourses[currentIndex].rating) ? "currentColor" : "none"}
                            className={i < Math.floor(featuredCourses[currentIndex].rating) ? "text-yellow-400" : "text-slate-300 dark:text-slate-600"}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        {featuredCourses[currentIndex].rating.toFixed(1)}
                      </span>
                      <span className="mx-2 text-slate-300 dark:text-slate-600">•</span>
                      <span className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <Users size={16} className="mr-1" />
                        {featuredCourses[currentIndex].students.toLocaleString()} students
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      {featuredCourses[currentIndex].title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      {featuredCourses[currentIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <Clock size={16} className="mr-2" />
                        {featuredCourses[currentIndex].duration}
                      </div>
                      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <BookOpen size={16} className="mr-2" />
                        {featuredCourses[currentIndex].level}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {featuredCourses[currentIndex].price === 0 ? "Free" : `$${featuredCourses[currentIndex].price}`}
                    </span>

                    <div className="flex gap-3">
                      <button className="px-4 py-2 border border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-500 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-700 transition duration-300">
                        Learn More
                      </button>
                      <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg transition duration-300">
                        Admission Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {featuredCourses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-indigo-600 w-8" : "bg-slate-300 dark:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
