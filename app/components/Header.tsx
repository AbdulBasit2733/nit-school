"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "academics" },
    { name: "Events", href: "events" },
    { name: "Galleries", href: "galleries" },
    { name: "Admission", href: "admissions" },
    { name: "About Us", href: "about" },
    { name: "Contact Us", href: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex gap-x-2 items-center">
            {/*
            <Image src={"/logo.png"} width={50} height={20} alt="logo" />
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">E</span>
            </div>
              */}
            <span
              className={`font-extrabold text-xl ${
                isScrolled ? "text-slate-900 dark:text-white" : "text-white"
              }`}
            >
              N I T
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Call to Action Buttons */}
          {/*
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="#login"
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white' 
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Log in
            </Link>
            <Link 
              href="#signup"
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg transition duration-300"
            >
              Sign up
            </Link>
          </div>
          */}
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-10 h-10 flex items-center justify-center focus:outline-none ${
                isScrolled ? "text-slate-900 dark:text-white" : "text-white"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col space-y-4 border-t border-slate-200 dark:border-slate-700">
                  <Link
                    href="#login"
                    className="font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="#signup"
                    className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg text-center transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
