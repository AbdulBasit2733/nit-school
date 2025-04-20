"use client"
import React from "react";
import { motion } from "framer-motion";
import { CameraIcon } from "lucide-react";
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

const Galleries = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4 inline-block">
            EVENT MEMORIES
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Glimpses of School Life
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore memorable moments from our past events and celebrations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden group aspect-square"
            >
              <img
                src={`/api/placeholder/${400 + index * 10}/${400 + index * 10}`}
                alt={`School event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 md:p-4">
                  <h4 className="text-sm md:text-base font-medium text-white">
                    Event Memory {index + 1}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-200">
                    Academic Year 2024-25
                  </p>
                </div>
              </div>

              <div className="absolute top-2 right-2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <CameraIcon className="w-4 h-4 text-slate-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* 
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg flex items-center mx-auto shadow-md hover:from-blue-700 hover:to-green-700 transition-colors">
              <Camera className="w-5 h-5 mr-2" />
              View More Photos
            </button>
          </div>
          */}
      </div>
    </section>
  );
};

export default Galleries;
