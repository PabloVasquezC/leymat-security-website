"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Shield } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "Seguridad Certificada",
    description:
      "Empresa registrada y certificada por OS-10 de Carabineros de Chile.",
  },
  {
    icon: Users,
    title: "Personal Capacitado",
    description:
      "Guardias profesionales con formación continua y certificaciones vigentes.",
  },
  {
    icon: Target,
    title: "Soluciones a Medida",
    description:
      "Servicios personalizados según las necesidades específicas de cada cliente.",
  },
  {
    icon: Award,
    title: "Reconocimiento",
    description:
      "Reconocidos como Pyme destacada de Curicó por nuestra excelencia en servicio.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-generic.png"
                alt="LEYMAT - Seguridad y Aseo Integral"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-card-foreground">
                    Pyme Destacada
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Curicó, Chile
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-accent font-semibold text-sm uppercase tracking-wider"
            >
              Sobre Nosotros
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6"
            >
              Años de Experiencia al Servicio de las Empresas
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              En LEYMAT Seguridad Privada nos dedicamos a brindar servicios de
              seguridad integral con los más altos estándares de calidad.
              Nuestro compromiso es proteger a nuestros clientes con personal
              altamente capacitado y tecnología de punta.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
