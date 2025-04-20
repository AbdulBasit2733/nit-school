import { motion } from 'framer-motion';

const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating blobs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, 30, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
        className="absolute top-2/3 right-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"
      />
      
      {/* Decorative SVG elements */}
      <div className="absolute top-1/4 left-10 opacity-30 dark:opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
          <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="2" className="text-indigo-500" />
          <circle cx="40" cy="40" r="16" stroke="currentColor" strokeWidth="2" className="text-teal-500" />
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 right-10 opacity-30 dark:opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="10" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="2" className="text-pink-500" />
          <rect x="25" y="25" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="2" className="text-indigo-500" />
        </svg>
      </div>
      
      <div className="absolute top-3/4 left-1/4 opacity-30 dark:opacity-10">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 10L45 50L15 50L30 10Z" stroke="currentColor" strokeWidth="2" className="text-teal-500" />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedShapes;