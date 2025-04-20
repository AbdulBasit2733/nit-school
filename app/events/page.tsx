"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronRight,
  Camera,
  Award,
  BookOpen,
  Star,
  Bookmark,
  Flag,
  Activity,
  Music,
  Globe,
  Heart,
} from "lucide-react";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Define event categories
  const categories = [
    { id: "all", name: "All Events", icon: Calendar },
    { id: "academic", name: "Academic", icon: BookOpen },
    { id: "islamic", name: "Islamic", icon: Star },
    { id: "cultural", name: "Cultural", icon: Globe },
    { id: "sports", name: "Sports", icon: Activity },
  ];

  // Sample events data
  const eventsData = [
    {
      id: 1,
      title: "Annual Science Exhibition",
      description:
        "Showcasing innovative student projects across various scientific disciplines with interactive demonstrations and expert judging.",
      category: "academic",
      date: "May 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "School Main Hall",
      participants: "250+",
      image: "/api/placeholder/600/400",
      icon: BookOpen,
      color: "blue",
    },
    {
      id: 2,
      title: "Quran Recitation Competition",
      description:
        "Annual event highlighting the beautiful recitation of the Holy Quran with participants from all grade levels competing in different categories.",
      category: "islamic",
      date: "June 5, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "School Prayer Hall",
      participants: "100+",
      image: "/api/placeholder/600/400",
      icon: Star,
      color: "green",
    },
    {
      id: 3,
      title: "Inter-School Sports Tournament",
      description:
        "Competitive sports event featuring cricket, football, basketball, and athletics with participation from neighboring schools.",
      category: "sports",
      date: "July 20-25, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "School Sports Complex",
      participants: "300+",
      image: "/api/placeholder/600/400",
      icon: Activity,
      color: "red",
    },
    {
      id: 4,
      title: "Annual Day Celebration",
      description:
        "A grand celebration showcasing student performances, achievements, and cultural programs with parent participation.",
      category: "cultural",
      date: "December 10, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "School Auditorium",
      participants: "500+",
      image: "/api/placeholder/600/400",
      icon: Music,
      color: "purple",
    },
    {
      id: 5,
      title: "Career Guidance Workshop",
      description:
        "Expert-led sessions on career options, college admissions, and future pathways for high school students.",
      category: "academic",
      date: "August 12, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Conference Room",
      participants: "150+",
      image: "/api/placeholder/600/400",
      icon: BookOpen,
      color: "blue",
    },
    {
      id: 6,
      title: "Eid Celebration",
      description:
        "Special assembly and community gathering to celebrate Eid with prayers, traditional food, and cultural activities.",
      category: "islamic",
      date: "May 30, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "School Campus",
      participants: "400+",
      image: "/api/placeholder/600/400",
      icon: Star,
      color: "green",
    },
    {
      id: 7,
      title: "Literary Festival",
      description:
        "Week-long celebration of literature featuring book fair, author visits, storytelling sessions, and creative writing competitions.",
      category: "cultural",
      date: "September 15-20, 2025",
      time: "Various Timings",
      location: "School Library & Halls",
      participants: "350+",
      image: "/api/placeholder/600/400",
      icon: Globe,
      color: "yellow",
    },
    {
      id: 8,
      title: "Technology Hackathon",
      description:
        "A 24-hour coding and innovation challenge for students to develop solutions to real-world problems.",
      category: "academic",
      date: "October 5-6, 2025",
      time: "9:00 AM - 9:00 AM (Next Day)",
      location: "Computer Labs",
      participants: "100+",
      image: "/api/placeholder/600/400",
      icon: BookOpen,
      color: "blue",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Filter events based on selected category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(
        eventsData.filter((event) => event.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-40 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-40 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
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
              SCHOOL EVENTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Creating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Memorable
              </span>{" "}
              Experiences
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              New Iqra Techno English School hosts a variety of events
              throughout the academic year, blending educational excellence with
              Islamic values and cultural celebrations.
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

      {/* Category Filter */}
      <section className="py-8 border-t border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {selectedEvent ? (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-20 bg-white/80 dark:bg-slate-900/80 p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto relative">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-${selectedEvent.color}-600`}
                      >
                        {
                          categories.find(
                            (cat) => cat.id === selectedEvent.category
                          )?.name
                        }
                      </span>
                      <h2 className="text-2xl font-bold text-white mt-2">
                        {selectedEvent.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-full bg-${selectedEvent.color}-100 dark:bg-${selectedEvent.color}-900/30 mr-4`}
                    >
                      <selectedEvent.icon
                        className={`w-6 h-6 text-${selectedEvent.color}-600 dark:text-${selectedEvent.color}-400`}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {selectedEvent.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400">
                        {
                          categories.find(
                            (cat) => cat.id === selectedEvent.category
                          )?.name
                        }{" "}
                        Event
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-8">
                    {selectedEvent.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          Date
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {selectedEvent.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          Time
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {selectedEvent.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          Location
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {selectedEvent.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          Participants
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {selectedEvent.participants} Expected
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center shadow-md hover:bg-blue-700 transition-colors">
                      <Calendar className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </button>
                    <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg flex items-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save Event
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-${event.color}-600`}
                        >
                          {
                            categories.find((cat) => cat.id === event.category)
                              ?.name
                          }
                        </span>
                        <h3 className="text-xl font-bold text-white mt-2">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div
                        className={`absolute top-0 right-0 w-24 h-24 bg-${event.color}-500 rotate-45 transform origin-bottom-left`}
                      ></div>
                      <event.icon className="absolute top-3 right-3 w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="p-5 flex-grow">
                    <p className="text-slate-600 dark:text-slate-300 line-clamp-3 mb-4">
                      {event.description}
                    </p>

                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{event.date}</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="px-5 pb-5 mt-auto">
                    <button className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredEvents.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <Calendar className="w-16 h-16 mx-auto text-slate-400 dark:text-slate-500 mb-4" />
                <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">
                  No events found
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  There are no events in this category currently. Please check
                  back later.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Upcoming Events Timeline (visible only when no event is selected) */}
      {!selectedEvent && (
        <section className="py-12 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 inline-block">
                MARK YOUR CALENDAR
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Upcoming Featured Events
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Don't miss out on these exciting events happening at our school
                in the coming months.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8 md:space-y-16"
              >
                {eventsData.slice(0, 4).map((event, index) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-4 w-5 h-5 rounded-full bg-blue-600 transform -translate-x-1/2"></div>

                    {/* Date card - always on the same side */}
                    <div className="md:w-48 flex-shrink-0 md:text-right md:mr-8">
                      <div
                        className={`inline-block md:block bg-${event.color}-100 dark:bg-${event.color}-900/30 px-3 py-2 rounded-lg`}
                      >
                        <Calendar
                          className={`inline-block w-4 h-4 mr-1 md:mr-0 md:mb-1 text-${event.color}-600 dark:text-${event.color}-400`}
                        />
                        <span
                          className={`font-medium text-${event.color}-600 dark:text-${event.color}-400`}
                        >
                          {event.date}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row ${
                        index % 2 === 1 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="md:w-2/5 h-48 md:h-auto relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 m-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-${event.color}-600`}
                          >
                            {
                              categories.find(
                                (cat) => cat.id === event.category
                              )?.name
                            }
                          </span>
                        </div>
                      </div>

                      <div className="p-6 md:w-3/5">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEvent(event);
                          }}
                          className={`px-4 py-2 bg-${event.color}-100 dark:bg-${event.color}-900/30 text-${event.color}-600 dark:text-${event.color}-400 rounded-lg flex items-center text-sm font-medium hover:bg-${event.color}-200 dark:hover:bg-${event.color}-900/50 transition-colors`}
                        >
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;
