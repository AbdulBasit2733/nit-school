
"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Award,
  Calendar,
  Users,
  CheckCircle,
  FileText,
  Clock,
  Star,
  ChevronDown,
  ChevronRight,
  Layers,
  Code,
  Book,
  Microscope,
  Calculator,
  Palette,
  Globe,
  MapPin,
} from "lucide-react";

const Academics = () => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeAccordion, setActiveAccordion] = useState("primary");

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

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

  // Subjects by grade level
  const subjects = {
    kindergarten: [
      {
        icon: BookOpen,
        name: "Early Literacy",
        description: "Introduction to letters, sounds, and basic reading",
      },
      {
        icon: Calculator,
        name: "Number Basics",
        description: "Counting, number recognition, and basic math concepts",
      },
      {
        icon: Globe,
        name: "Environmental Studies",
        description: "Exploring the world around us",
      },
      {
        icon: Palette,
        name: "Creative Arts",
        description: "Expression through drawing, coloring, and crafts",
      },
      {
        icon: Book,
        name: "Islamic Studies",
        description: "Basic Islamic etiquettes and short surahs",
      },
    ],
    primary: [
      {
        icon: BookOpen,
        name: "English",
        description: "Reading comprehension, writing skills, and grammar",
      },
      {
        icon: Calculator,
        name: "Mathematics",
        description: "Number operations, patterns, measurements, and geometry",
      },
      {
        icon: Microscope,
        name: "Science",
        description: "Basic scientific concepts and environmental awareness",
      },
      {
        icon: Globe,
        name: "Social Studies",
        description: "History, geography, and civic awareness",
      },
      {
        icon: Book,
        name: "Islamic Studies",
        description: "Quran recitation, tafsir, and Islamic history",
      },
      {
        icon: Globe,
        name: "Arabic Language",
        description: "Basic vocabulary, reading, and writing skills",
      },
      {
        icon: Palette,
        name: "Art & Craft",
        description: "Creative expression and fine motor skills development",
      },
      {
        icon: Code,
        name: "Computer Basics",
        description: "Introduction to computers and basic applications",
      },
    ],
    middle: [
      {
        icon: BookOpen,
        name: "English Language & Literature",
        description: "Advanced reading, writing, and literary appreciation",
      },
      {
        icon: Calculator,
        name: "Mathematics",
        description: "Algebra, geometry, data handling, and arithmetic",
      },
      {
        icon: Microscope,
        name: "Science",
        description: "Physics, chemistry, and biology concepts",
      },
      {
        icon: Globe,
        name: "Social Science",
        description: "History, geography, civics, and economics",
      },
      {
        icon: Book,
        name: "Islamic Studies",
        description: "Detailed Quran study, hadith, and Islamic jurisprudence",
      },
      {
        icon: Globe,
        name: "Arabic Language",
        description: "Grammar, vocabulary, and communication skills",
      },
      {
        icon: Code,
        name: "Computer Science",
        description:
          "Programming basics, software applications, and digital literacy",
      },
      {
        icon: Palette,
        name: "Art Education",
        description: "Visual arts, craft, and art appreciation",
      },
    ],
    secondary: [
      {
        icon: BookOpen,
        name: "English Language & Literature",
        description: "Advanced literary analysis and communication skills",
      },
      {
        icon: Calculator,
        name: "Mathematics",
        description: "Advanced algebra, calculus, statistics, and trigonometry",
      },
      {
        icon: Microscope,
        name: "Science",
        description: "Specialized physics, chemistry, and biology",
      },
      {
        icon: Globe,
        name: "Social Science",
        description:
          "In-depth history, geography, political science, and economics",
      },
      {
        icon: Book,
        name: "Islamic Studies",
        description:
          "Advanced Islamic philosophy, ethics, and contemporary applications",
      },
      {
        icon: Globe,
        name: "Second Language",
        description: "Arabic/Urdu advanced studies",
      },
      {
        icon: Code,
        name: "Information Technology",
        description: "Programming, web development, and computer applications",
      },
    ],
    highersecondary: [
      {
        icon: Microscope,
        name: "Science Stream",
        description: "Physics, Chemistry, Biology, Mathematics",
      },
      {
        icon: Calculator,
        name: "Commerce Stream",
        description: "Accountancy, Business Studies, Economics, Mathematics",
      },
      {
        icon: FileText,
        name: "Humanities Stream",
        description:
          "History, Geography, Political Science, Economics, Psychology",
      },
      {
        icon: Code,
        name: "Computer Science/IT",
        description: "Available as an elective with any stream",
      },
      {
        icon: Book,
        name: "Islamic Studies",
        description: "Integrated across all streams",
      },
    ],
  };

  // Academic calendar events
  const calendarEvents = [
    {
      month: "April",
      events: [
        "New Academic Year Begins",
        "Orientation Program for New Students",
      ],
    },
    {
      month: "June",
      events: ["First Formative Assessment", "Science Exhibition"],
    },
    {
      month: "August",
      events: ["Islamic Quiz Competition", "Independence Day Celebrations"],
    },
    {
      month: "September",
      events: ["Half-Yearly Examinations", "Teachers' Day Celebrations"],
    },
    { month: "October", events: ["Sports Meet", "Technology Fair"] },
    { month: "December", events: ["Annual Day Celebration", "Winter Break"] },
    {
      month: "January",
      events: ["School Reopens", "Quran Recitation Competition"],
    },
    {
      month: "February",
      events: ["Second Formative Assessment", "Science Day Activities"],
    },
    {
      month: "March",
      events: ["Final Examinations", "Annual Result Declaration"],
    },
  ];

  // Faculty departments
  const facultyDepartments = [
    {
      name: "Islamic Studies",
      count: 12,
      qualifications:
        "Islamic Scholars with specialized teaching certifications",
    },
    {
      name: "Languages",
      count: 15,
      qualifications: "MA/M.Phil in respective languages with B.Ed",
    },
    {
      name: "Mathematics",
      count: 8,
      qualifications: "M.Sc Mathematics with B.Ed",
    },
    {
      name: "Science",
      count: 14,
      qualifications: "M.Sc in Physics/Chemistry/Biology with B.Ed",
    },
    {
      name: "Social Sciences",
      count: 10,
      qualifications: "MA in History/Geography/Political Science with B.Ed",
    },
    {
      name: "Computer Science",
      count: 6,
      qualifications:
        "MCA/M.Tech/M.Sc Computer Science with teaching experience",
    },
    {
      name: "Physical Education",
      count: 4,
      qualifications: "B.P.Ed/M.P.Ed with sports specializations",
    },
    {
      name: "Art & Craft",
      count: 3,
      qualifications: "Fine Arts graduates with teaching experience",
    },
  ];

  // Assessment structure
  const assessmentStructure = {
    formative: [
      "Regular class participation and activities",
      "Projects and assignments",
      "Periodic tests and quizzes",
      "Oral assessments and presentations",
      "Practical work and experiments",
    ],
    summative: [
      "Term-end examinations (twice a year)",
      "Comprehensive testing of subjects",
      "Laboratory practical examinations",
      "Project evaluations and viva voce",
      "Final assessment and grading",
    ],
    islamic: [
      "Quran recitation and memorization assessments",
      "Islamic knowledge tests",
      "Character development evaluations",
      "Arabic language proficiency tests",
      "Islamic etiquette observations",
    ],
  };

  // Special programs
  const specialPrograms = [
    {
      title: "Hifz Program",
      description:
        "Special program for students who wish to memorize the Quran alongside regular academics",
      features: [
        "Schedule adjusted to accommodate Quran memorization",
        "Expert Huffaz as instructors",
        "Regular assessment and progress tracking",
        "Completion ceremonies and recognition",
      ],
    },
    {
      title: "Technology Innovation Lab",
      description:
        "Advanced technology program to develop programming and innovation skills",
      features: [
        "Robotics and coding workshops",
        "Project-based learning approach",
        "Participation in national level competitions",
        "Mentorship from industry professionals",
      ],
    },
    {
      title: "Leadership Development Program",
      description:
        "Nurturing future leaders with Islamic values and modern leadership skills",
      features: [
        "Regular workshops on leadership principles",
        "Community service projects",
        "Public speaking and debate training",
        "Student council participation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-40 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-40 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
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
              ACADEMICS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Excellence in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Education
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              New Iqra Techno English School offers a comprehensive CBSE
              curriculum from Junior KG to 12th grade, blending Islamic values
              with modern academic excellence.
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

      {/* Tabs Navigation */}
      <section className="py-8 border-t border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-8">
            {[
              { id: "curriculum", label: "Curriculum", icon: BookOpen },
              { id: "calendar", label: "Academic Calendar", icon: Calendar },
              { id: "faculty", label: "Faculty", icon: Users },
              { id: "assessment", label: "Assessment", icon: CheckCircle },
              { id: "programs", label: "Special Programs", icon: Star },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Curriculum Tab */}
          {activeTab === "curriculum" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  <BookOpen className="inline-block mr-2 mb-1" size={32} />
                  Our Curriculum
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
                  Our CBSE-affiliated curriculum is designed to provide a
                  balanced education that integrates Islamic teachings with
                  modern academic subjects, preparing students for success in
                  this world and the hereafter.
                </p>
              </motion.div>

              {/* Grade Level Accordions */}
              <motion.div variants={itemVariants} className="space-y-4">
                {/* Kindergarten */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("kindergarten")}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="mr-4 bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          Kindergarten (Jr. KG & Sr. KG)
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Foundation years with play-based learning
                        </p>
                      </div>
                    </div>
                    {activeAccordion === "kindergarten" ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </button>

                  {activeAccordion === "kindergarten" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Our kindergarten program focuses on developing
                        foundational skills through play-based learning,
                        nurturing curiosity and creativity while introducing
                        basic Islamic concepts.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {subjects.kindergarten.map((subject, index) => (
                          <div
                            key={index}
                            className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg flex items-start"
                          >
                            <div className="mt-1 mr-3 text-blue-600 dark:text-blue-400">
                              <subject.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900 dark:text-white">
                                {subject.name}
                              </h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                {subject.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                          Learning Approach:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-blue-600 dark:text-blue-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Play-based learning with structured activities
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-blue-600 dark:text-blue-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Development of fine and gross motor skills
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-blue-600 dark:text-blue-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Introduction to Islamic etiquettes and short
                              surahs
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-blue-600 dark:text-blue-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Social skills development and emotional
                              intelligence
                            </span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Primary School */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("primary")}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="mr-4 bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          Primary School (Grades 1-5)
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Building core academic and Islamic foundations
                        </p>
                      </div>
                    </div>
                    {activeAccordion === "primary" ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </button>

                  {activeAccordion === "primary" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        The primary school curriculum follows CBSE guidelines
                        while integrating Islamic studies. Students develop
                        strong foundations in core subjects while building
                        character and values.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {subjects.primary.map((subject, index) => (
                          <div
                            key={index}
                            className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg flex items-start"
                          >
                            <div className="mt-1 mr-3 text-green-600 dark:text-green-400">
                              <subject.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900 dark:text-white">
                                {subject.name}
                              </h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                {subject.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">
                          Learning Approach:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-green-600 dark:text-green-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Interactive classroom teaching with technology
                              integration
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-green-600 dark:text-green-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Project-based learning and hands-on activities
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-green-600 dark:text-green-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Regular Quran classes and Islamic studies
                              integration
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-green-600 dark:text-green-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Field trips and experiential learning
                              opportunities
                            </span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Middle School */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("middle")}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          Middle School (Grades 6-8)
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Expanding knowledge and developing critical thinking
                        </p>
                      </div>
                    </div>
                    {activeAccordion === "middle" ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </button>

                  {activeAccordion === "middle" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        The middle school curriculum focuses on developing
                        deeper understanding of subjects while nurturing
                        critical thinking skills. Islamic studies are integrated
                        to provide moral guidance during these formative years.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {subjects.middle.map((subject, index) => (
                          <div
                            key={index}
                            className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg flex items-start"
                          >
                            <div className="mt-1 mr-3 text-blue-600 dark:text-blue-400">
                              <subject.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900 dark:text-white">
                                {subject.name}
                              </h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                {subject.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                          Learning Approach:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-blue-600 dark:text-blue-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Concept-based learning with emphasis on
                              understanding
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-blue-600 dark:text-blue-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Laboratory experiments and scientific inquiries
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-blue-600 dark:text-blue-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Research projects and presentations
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-blue-600 dark:text-blue-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Advanced Quran studies and Islamic history
                            </span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Secondary School */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("secondary")}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="mr-4 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          Secondary School (Grades 9-10)
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Preparing for board examinations with comprehensive
                          education
                        </p>
                      </div>
                    </div>
                    {activeAccordion === "secondary" ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </button>

                  {activeAccordion === "secondary" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        The secondary curriculum follows CBSE guidelines,
                        focusing on preparing students for board examinations
                        while maintaining a balance between academic excellence
                        and Islamic values.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {subjects.secondary.map((subject, index) => (
                          <div
                            key={index}
                            className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg flex items-start"
                          >
                            <div className="mt-1 mr-3 text-purple-600 dark:text-purple-400">
                              <subject.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900 dark:text-white">
                                {subject.name}
                              </h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                {subject.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">
                          Learning Approach:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-purple-600 dark:text-purple-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Board examination-focused curriculum
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-purple-600 dark:text-purple-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Regular assessments and practice tests
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-purple-600 dark:text-purple-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Advanced laboratory work and practical
                              applications
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-purple-600 dark:text-purple-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Career guidance and counseling
                            </span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Higher Secondary School */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("highersecondary")}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="mr-4 bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          Higher Secondary (Grades 11-12)
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Specialized streams with focus on college preparation
                        </p>
                      </div>
                    </div>
                    {activeAccordion === "highersecondary" ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </button>

                  {activeAccordion === "highersecondary" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Our higher secondary program offers specialized streams
                        to prepare students for higher education and future
                        careers while maintaining Islamic values and ethics.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {subjects.highersecondary.map((subject, index) => (
                          <div
                            key={index}
                            className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg flex items-start"
                          >
                            <div className="mt-1 mr-3 text-red-600 dark:text-red-400">
                              <subject.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900 dark:text-white">
                                {subject.name}
                              </h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                {subject.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">
                          Learning Approach:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-red-600 dark:text-red-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Specialized teaching by subject experts
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-red-600 dark:text-red-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Competitive exam preparation guidance
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-red-600 dark:text-red-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              College and career counseling
                            </span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle
                              size={16}
                              className="mr-2 text-red-600 dark:text-red-400"
                            />
                            <span className="text-slate-700 dark:text-slate-300">
                              Advanced laboratory facilities and research
                              opportunities
                            </span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Academic Calendar Tab */}
          {activeTab === "calendar" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  <Calendar className="inline-block mr-2 mb-1" size={32} />
                  Academic Calendar
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
                  Our academic year runs from April to March with a structured
                  calendar that includes academic assessments, Islamic events,
                  and extracurricular activities.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {calendarEvents.map((month, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="bg-blue-600 dark:bg-blue-700 p-4 flex items-center">
                      <MapPin className="w-5 h-5 text-white mr-2" />
                      <h3 className="text-lg font-bold text-white">
                        {month.month}
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {month.events.map((event, eventIndex) => (
                          <li key={eventIndex} className="flex items-start">
                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" />
                            <span className="text-slate-700 dark:text-slate-300">
                              {event}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Faculty Tab */}
          {activeTab === "faculty" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  <Users className="inline-block mr-2 mb-1" size={32} />
                  Our Faculty
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
                  Our experienced and qualified teachers are dedicated to
                  providing excellent education while nurturing Islamic values
                  in our students.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {facultyDepartments.map((dept, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                        <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {dept.name}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                        {dept.count} Faculty Members
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {dept.qualifications}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Faculty Development Program
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  We invest in our teachers' continuous professional development
                  through regular training sessions, workshops, and
                  opportunities for higher education.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2 flex items-center">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                      Regular Training
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Monthly pedagogical training and subject-specific
                      workshops
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2 flex items-center">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                      Islamic Education
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Special training on integrating Islamic values in teaching
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2 flex items-center">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                      Technology Integration
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Training for effective use of technology in classrooms
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Assessment Tab */}
          {activeTab === "assessment" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  <CheckCircle className="inline-block mr-2 mb-1" size={32} />
                  Assessment Structure
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
                  Our comprehensive assessment system evaluates both academic
                  achievement and character development through regular
                  formative and summative assessments.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="bg-green-600 dark:bg-green-700 p-4">
                    <h3 className="text-lg font-bold text-white flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Formative Assessment
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {assessmentStructure.formative.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 mr-2" />
                          <span className="text-slate-700 dark:text-slate-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="bg-blue-600 dark:bg-blue-700 p-4">
                    <h3 className="text-lg font-bold text-white flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Summative Assessment
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {assessmentStructure.summative.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" />
                          <span className="text-slate-700 dark:text-slate-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="bg-purple-600 dark:bg-purple-700 p-4">
                    <h3 className="text-lg font-bold text-white flex items-center">
                      <Book className="w-5 h-5 mr-2" />
                      Islamic Assessment
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {assessmentStructure.islamic.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1 mr-2" />
                          <span className="text-slate-700 dark:text-slate-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Report Cards & Parent-Teacher Meetings
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Comprehensive report cards are issued quarterly with
                    detailed feedback on academic performance and character
                    development. Regular parent-teacher meetings ensure open
                    communication about student progress.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                          Report Card Schedule
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          July (First Term), September (Half-Yearly), December
                          (Third Term), March (Final)
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg flex items-start">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                          Parent-Teacher Meetings
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Scheduled after each report card distribution, with
                          additional meetings upon request
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Special Programs Tab */}
          {activeTab === "programs" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  <Star className="inline-block mr-2 mb-1" size={32} />
                  Special Programs
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
                  Beyond our standard curriculum, we offer special programs that
                  cater to various interests and talents, balancing Islamic
                  education with modern skills development.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {specialPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {program.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {program.description}
                      </p>

                      <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Star className="w-4 h-4 text-yellow-500 dark:text-yellow-400 mt-1 mr-2" />
                            <span className="text-slate-700 dark:text-slate-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Co-Curricular Activities
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  We offer a range of co-curricular activities that complement
                  our academic curriculum and provide students with
                  opportunities to develop their talents and interests.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                      <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      Sports
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Cricket, Football, Basketball, Athletics, and more
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                      <Palette className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      Arts
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Drawing, Painting, Calligraphy, and Crafts
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                      <Book className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      Literary
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Debate, Creative Writing, Quizzes, and Recitation
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mx-auto mb-3">
                      <Code className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      Technology
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Coding, Robotics, Digital Art, and Animation
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Join Our Educational Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience holistic education that balances academic excellence with
            Islamic values at New Iqra Techno English School.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-slate-100 transition-colors shadow-md">
              Apply for Admission
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
