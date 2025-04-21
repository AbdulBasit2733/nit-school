"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Book,
  MousePointerClick,
  Globe,
  Users,
  Star,
  ClipboardCheck,
} from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-1/4 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-block">
            <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4 inline-block">
              ABOUT US
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              New Iqra Techno
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Founded on the principles of integrating Islamic values with modern
            education, we strive to create a nurturing environment where
            students excel academically, spiritually, and morally.
          </p>
        </motion.div>

        {/* Main content with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image with geometric decorations */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-200 dark:bg-green-900/30 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/school-campus.jpg"
                alt="School Campus"
                width={100}
                height={100}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Our Story
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                New Iqra Techno English School (N.I.T) was established with a
                vision to provide education that balances modern technological
                advancements with timeless Islamic values. Our institution
                serves students from Junior KG to 12th grade, following the CBSE
                curriculum.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="border-l-4 border-green-600 pl-4 py-2"
            >
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 italic">
                &quot;We believe in nurturing not just intelligent minds, but
                compassionate hearts and righteous character.&quot;
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Our Approach
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                We take pride in our unique approach that integrates Quranic
                teachings and modern subjects, preparing students to excel in
                both worldly pursuits and spiritual growth. Our experienced
                faculty ensures that students receive personalized attention and
                guidance throughout their educational journey.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission and Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 border-t-4 border-blue-600 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-300"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <Star className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </h3>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              To provide a comprehensive education that integrates Islamic
              principles with modern knowledge, empowering students to become
              confident, responsible, and successful individuals in both this
              world and the hereafter.
            </p>

            <ul className="space-y-3">
              {[
                "Nurturing academic excellence while inculcating Islamic values",
                "Developing critical thinking and technological literacy",
                "Building character based on moral and ethical principles",
                "Creating a supportive community of learners and educators",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3">
                    <div className="h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 border-t-4 border-green-600 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-green-100 dark:bg-green-900/20 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-300"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <ClipboardCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Our Vision
              </h3>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              To be a leading educational institution that excels in providing
              holistic education, producing graduates who are not only
              academically accomplished but also spiritually grounded and
              socially responsible.
            </p>

            <ul className="space-y-3">
              {[
                "Becoming a center of excellence in education with Islamic values",
                "Fostering innovation and creativity through modern technology",
                "Preparing students for global challenges while preserving cultural identity",
                "Creating positive change through education and community service",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3">
                    <div className="h-2 w-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Our Core Values
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
            These principles guide everything we do at New Iqra Techno English
            School
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Book,
              title: "Knowledge & Wisdom",
              description:
                "We value the pursuit of both sacred and worldly knowledge, believing that true wisdom comes from integrating both.",
            },
            {
              icon: MousePointerClick,
              title: "Faith & Character",
              description:
                "We nurture strong faith and exemplary character, teaching students to embody Islamic values in their daily lives.",
            },
            {
              icon: Globe,
              title: "Innovation & Excellence",
              description:
                "We embrace technological innovation and strive for excellence in all academic and extracurricular endeavors.",
            },
            {
              icon: Users,
              title: "Community & Belonging",
              description:
                "We foster a sense of community and belonging, where every student feels valued, respected, and supported.",
            },
            {
              icon: Star,
              title: "Leadership & Service",
              description:
                "We develop leaders who are committed to serving their communities and making positive contributions to society.",
            },
            {
              icon: ClipboardCheck,
              title: "Respect & Responsibility",
              description:
                "We uphold respect for diversity and personal responsibility, teaching students to be accountable for their actions.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {value.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
