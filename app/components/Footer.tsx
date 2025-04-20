"use client"
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-white text-xl font-bold">
                  N I T School
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6">
              At N I T School, we strive to provide a nurturing environment for students to excel academically and personally.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <motion.a
                    key={social}
                    href={`#${social}`}
                    whileHover={{ y: -4 }}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                  >
                    {/* Social icon */}
                    <span className="sr-only">{social}</span>
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Admissions",
                "Faculty",
                "Contact Us",
                "Blog",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* School Programs */}
          <div>
            <h3 className="text-white font-bold mb-6">School Programs</h3>
            <ul className="space-y-3">
              {[
                "Primary Education",
                "Secondary Education",
                "Extracurricular Activities",
                "Online Learning",
                "Specialized Workshops",
              ].map((program) => (
                <li key={program}>
                  <Link
                    href={`#${program.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">Stay Updated</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter to receive the latest updates, events, and announcements from Sunshine Academy.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium py-3 rounded-lg transition duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} N I T School. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#terms"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="#privacy"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookie"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
