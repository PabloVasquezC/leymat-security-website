"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Galería", href: "#galeria" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-primary border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-6 text-sm text-primary-foreground/80">
          <a
            href="tel:+56958006127"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            +56 9 58006127
          </a>
          <a
            href="mailto:leymatseguridad@gmail.com"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            leymatseguridad@gmail.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3">
            <div className="relative w-14 h-14">
              <Image
                src="/logo.png"
                alt="LEYMAT Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary-foreground">
                LEYMAT
              </h1>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                Seguridad Privada
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground font-medium transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctanos
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary border-t border-primary-foreground/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/80 hover:text-primary-foreground font-medium py-2 border-b border-primary-foreground/10"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex flex-col gap-2 pt-4 text-sm text-primary-foreground/70">
                <a href="tel:+56958006127" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +56 9 58006127
                </a>
                <a
                  href="mailto:leymatseguridad@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  leymatseguridad@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
