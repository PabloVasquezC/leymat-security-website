"use client";

import { motion } from "framer-motion";
import { Shield, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-accent rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              Empresa Certificada OS-10
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              <span className="block">SEGURIDAD</span>
              <span className="block text-accent">PRIVADA</span>
              <span className="block">LEYMAT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-primary-foreground/70 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Años de experiencia al servicio de las empresas. Protegemos lo que
              más importa con profesionalismo y dedicación.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="tel:+56958006127"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 hover:border-primary-foreground/50 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/10"
            >
              {[
                { value: "15+", label: "Años de Experiencia" },
                { value: "100+", label: "Clientes Satisfechos" },
                { value: "24/7", label: "Disponibilidad" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Hexagonal Frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/2.png"
                    alt="LEYMAT Seguridad Privada"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
