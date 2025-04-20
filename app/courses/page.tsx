'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const batchCategories = [
  'All Batches',
  'NEET',
  'JEE',
  'Olympiads',
  'English Speaking',
];

const allBatches = [
  {
    id: 1,
    title: 'NEET Foundation Batch',
    description: 'Comprehensive coaching for medical aspirants from class 9 to 12.',
    image: '/images/batches/neet.jpg',
    category: 'NEET',
    level: 'Advanced',
    duration: '1 year',
    rating: 4.9,
    price: 15000,
  },
  {
    id: 2,
    title: 'JEE Main + Advanced Batch',
    description: 'Intensive training with problem-solving and mock tests for engineering aspirants.',
    image: '/images/batches/jee.jpg',
    category: 'JEE',
    level: 'Advanced',
    duration: '1 year',
    rating: 4.8,
    price: 17000,
  },
  {
    id: 3,
    title: 'Olympiad Training Batch',
    description: 'Focused preparation for Science and Math Olympiads (IMO, NSO, NTSE).',
    image: '/images/batches/olympiad.jpg',
    category: 'Olympiads',
    level: 'Intermediate',
    duration: '6 months',
    rating: 4.7,
    price: 8000,
  },
  {
    id: 4,
    title: 'English Speaking & Personality Dev.',
    description: 'Boost confidence and fluency with real-life speaking practice and soft skills.',
    image: '/images/batches/english.jpg',
    category: 'English Speaking',
    level: 'Beginner',
    duration: '3 months',
    rating: 4.6,
    price: 5000,
  },
];

type BatchType = typeof allBatches[number];

const BatchCard = ({ batch }: { batch: BatchType }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={batch.image}
          alt={batch.title}
          fill
          className="object-cover transform hover:scale-105 transition duration-700"
        />
        <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {batch.level}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-2 text-xs text-slate-500 dark:text-slate-400 space-x-2">
          <span>{batch.category}</span>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span>{batch.duration}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {batch.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
          {batch.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${
                  star <= Math.round(batch.rating)
                    ? 'text-yellow-400'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
              {batch.rating.toFixed(1)}
            </span>
          </div>

          <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">
            ₹{batch.price.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Batches');

  const filteredBatches =
    selectedCategory === 'All Batches'
      ? allBatches
      : allBatches.filter((batch) => batch.category === selectedCategory);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-64 -left-64 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Explore Our Batches
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Specialized batches designed for students preparing for competitive exams and skill development.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {batchCategories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700'
              } shadow-sm`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBatches.map((batch) => (
            <BatchCard key={batch.id} batch={batch} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 font-medium rounded-xl border border-indigo-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-300"
          >
            View All Batches
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
