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

export const subjects = {
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
 export const calendarEvents = [
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
  export const facultyDepartments = [
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
  export const assessmentStructure = {
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
  export const specialPrograms = [
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