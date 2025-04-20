"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Islamic Studies & Engineering Student",
    avatar: "/api/placeholder/100/100",
    quote:
      "This institution transformed my learning experience. The balance of Deen and Duniya helped me excel in both Islamic studies and technical subjects.",
  },
  {
    name: "Meera Nair",
    role: "Hifz & Medical Aspirant",
    avatar: "/api/placeholder/100/100",
    quote:
      "I love how the curriculum integrates Islamic values with modern education. The interactive teaching methods helped me memorize Quran while preparing for medical entrance exams.",
  },
  {
    name: "Kabir Verma",
    role: "Parent of Grade 10 Student",
    avatar: "/api/placeholder/100/100",
    quote:
      "As a parent, I appreciate how the institution nurtures both spiritual and academic growth. My son is developing strong Islamic character while excelling academically!",
  },
  {
    name: "Sara Ali",
    role: "Alimah Course & Computer Science Student",
    avatar: "/api/placeholder/100/100",
    quote:
      "The balance of traditional Islamic sciences with modern technology education is perfect. I'm learning programming while deepening my understanding of Islamic jurisprudence.",
  },
  {
    name: "Ishaan Patel",
    role: "Quranic Studies & Olympiad Topper",
    avatar: "/api/placeholder/100/100",
    quote:
      "This institution gave me the foundation I needed to win academic competitions while maintaining a strong connection to my faith. The teachers are exceptional in both fields.",
  },
];

const spotlightStories = [
  {
    name: "Riya Kulkarni",
    achievement: "State Board Topper & Quran Competition Winner",
    image: "/api/placeholder/600/400",
    story:
      "Riya balanced her academic studies with Islamic education perfectly. She topped the state board exams while also winning the regional Quran recitation competition!",
  },
  {
    name: "Dev Malhotra",
    achievement: "Gold Medalist - National Science Olympiad & Hadith Memorization",
    image: "/api/placeholder/600/400",
    story:
      "Dev's deep understanding of both science and Islamic teachings helped him secure a gold medal at the NSO 2024 while completing his Hadith memorization program.",
  },
  {
    name: "Simran Joshi",
    achievement: "English Olympiad Winner & Islamic Calligraphy Champion",
    image: "/api/placeholder/600/400",
    story:
      "Simran developed excellent writing skills in both English and Arabic. She won the national English Olympiad while also excelling in Islamic calligraphy competitions.",
  },
  {
    name: "Zainab Khan",
    achievement: "Mathematics Prodigy & Hafiza-e-Quran",
    image: "/api/placeholder/600/400",
    story:
      "Zainab completed her Hifz of the Quran while simultaneously maintaining top position in Mathematics in her class. She represents the perfect balance of Deen and Duniya.",
  },
  {
    name: "Yusuf Ahmed",
    achievement: "Tech Innovation Award & Islamic Ethics Excellence",
    image: "/api/placeholder/600/400",
    story:
      "Yusuf developed an app that helps students learn Tajweed while also excelling in computer science. His project won national recognition for innovation.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === spotlightStories.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, spotlightStories.length]);

  // Testimonial auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === spotlightStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? spotlightStories.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
      <div className="absolute top-40 left-10 w-64 h-64 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      {/* Islamic-inspired pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/api/placeholder/100/100')] bg-repeat -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-4 leading-tight">
            Our Excellence Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A pioneering institution offering a balanced education in <span className="font-semibold text-emerald-600 dark:text-emerald-400">Deen</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">Duniya</span> from Jr. KG to 12th
          </p>
        </motion.div>

        {/* Featured Success Stories Carousel */}
        <div className="mb-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-slate-800"
          >
            <div className="flex h-full">
              <div 
                className="flex transition-transform duration-500 ease-out w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {spotlightStories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 z-10"></div>
                      <Image
                        src={story.image}
                        alt={story.name}
                        width={600}
                        height={400}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-gradient-to-br from-emerald-600 to-blue-600 text-white px-4 py-2 rounded-br-xl z-20">
                        <span className="text-sm font-medium">Featured Student</span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                      <div className="mb-4 flex items-center">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Success Story</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">{story.name}</h3>
                      <p className="text-md font-medium text-indigo-600 dark:text-indigo-400 mb-4 italic">
                        {story.achievement}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-lg">{story.story}</p>
                      <div className="flex items-center mt-6 text-emerald-600 dark:text-emerald-400 font-medium">
                        <span>Read full story</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel controls */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 rounded-full p-2 shadow-lg z-20 hover:bg-white dark:hover:bg-slate-700 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-200" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 rounded-full p-2 shadow-lg z-20 hover:bg-white dark:hover:bg-slate-700 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-200" />
            </button>
            
            {/* Dots navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {spotlightStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index 
                      ? 'bg-indigo-600 dark:bg-indigo-400 w-6 transition-all' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-indigo-300 dark:hover:bg-indigo-700 transition-all'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonials section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              What Our Students Say
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (testimonialIndex + offset) % testimonials.length;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: offset * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 dark:bg-indigo-900/20 rounded-full -mr-10 -mt-10 z-0"></div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-emerald-200 dark:border-emerald-800">
                      <Image
                        src={testimonials[index].avatar}
                        alt={testimonials[index].name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                        {testimonials[index].name}
                      </h4>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4 text-slate-800 dark:text-slate-200">
                    <svg className="w-8 h-8 text-slate-200 dark:text-slate-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                    </svg>
                    <blockquote className="text-slate-600 dark:text-slate-300 mb-6 relative z-10">
                      {testimonials[index].quote}
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center relative z-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { 
              label: "Students", 
              value: "15,000+",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            { 
              label: "Courses", 
              value: "200+",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )
            },
            { 
              label: "Success Rate", 
              value: "92%",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              )
            },
            { 
              label: "Hafiz Graduates", 
              value: "500+",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-600 opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative p-8 text-center z-10">
                <div className="flex justify-center mb-4 text-white opacity-90">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-white text-opacity-90 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;