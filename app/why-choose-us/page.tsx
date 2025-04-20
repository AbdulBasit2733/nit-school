'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Activity, MonitorSmartphone } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Our School
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A nurturing environment where academic excellence meets overall development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Experienced Faculty */}
          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-slate-200 dark:border-slate-700"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Qualified Faculty</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Our experienced educators are dedicated to fostering academic excellence and personal growth.
            </p>
          </motion.div>

          {/* Card 2: Holistic Development */}
          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-slate-200 dark:border-slate-700"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 text-white flex items-center justify-center mb-6">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Holistic Development</h3>
            <p className="text-slate-600 dark:text-slate-300">
              From academics to arts and sports, we shape well-rounded individuals for tomorrow.
            </p>
          </motion.div>

          {/* Card 3: Smart Classrooms */}
          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-slate-200 dark:border-slate-700"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center mb-6">
              <MonitorSmartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Smart Classrooms</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Cutting-edge technology enhances learning through engaging and interactive sessions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
