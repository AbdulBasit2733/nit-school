import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Moon, Sun, Users, GraduationCap, Heart } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background gradient with Islamic-inspired colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-700 dark:from-emerald-900 dark:to-blue-900"></div>
      
      {/* Islamic geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/api/placeholder/200/200')] bg-repeat"></div>
      
      {/* Animated light effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-500/10 rounded-full mix-blend-overlay blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-overlay blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Decorative crescents */}
      <div className="absolute top-10 left-10 text-white/10 dark:text-white/5">
        <Moon size={120} />
      </div>
      <div className="absolute bottom-10 right-10 text-white/10 dark:text-white/5">
        <Moon size={80} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Small decorative element */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-10 bg-emerald-400 rounded-full mx-2"></div>
              <div className="text-emerald-300 font-medium">Balance of Knowledge</div>
              <div className="h-1 w-10 bg-emerald-400 rounded-full mx-2"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Nurturing <span className="text-emerald-300">Deen</span> and <span className="text-blue-300">Duniya</span> for a Balanced Future
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join our pioneering institution where students excel in both Islamic knowledge and academic studies from Jr. KG to 12th grade, preparing them for success in this world and the hereafter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-emerald-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Enroll Today
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Schedule a Visit
                </span>
              </motion.button>
            </div>
          </motion.div>
          
          {/* Divider with Islamic pattern */}
          <div className="my-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-white/20"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 bg-gradient-to-r from-transparent via-emerald-600 to-transparent">
                <Sun className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          {/* Key benefits with glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              { 
                icon: <BookOpen className="text-emerald-300" />, 
                title: "Integrated Curriculum", 
                description: "Seamlessly blending Quranic studies with modern academics"
              },
              { 
                icon: <Users className="text-blue-300" />, 
                title: "Expert Teachers", 
                description: "Qualified in both Islamic sciences and academic subjects"
              },
              { 
                icon: <Heart className="text-pink-300" />, 
                title: "Character Development", 
                description: "Building future leaders with strong Islamic values"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-4 bg-white/10 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/70 text-sm mb-4">Recognized and Trusted By</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 h-full w-20 rounded-md flex items-center justify-center text-xs text-emerald-800 font-medium">
                    Partner {i}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Final call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-blue-100 mb-6">Begin your child&apos;s journey to a balanced education today</p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-none outline-none text-white placeholder-blue-200/70 w-48 md:w-64"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 bg-white text-emerald-600 font-medium rounded-full px-4 py-2 text-sm"
              >
                Request Info
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA