"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Calendar,
  ShieldCheck,
  UserCheck,
  Camera,
  Car,
  Trash,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Seguridad Empresarial",
    description:
      "Protección integral para empresas, oficinas e instalaciones industriales con guardias especializados.",
    features: ["Control de acceso", "Rondas de vigilancia", "Informes diarios"],
  },
  {
    icon: Calendar,
    title: "Seguridad en Eventos",
    description:
      "Cobertura profesional para eventos masivos, conciertos, ferias y actividades públicas.",
    features: [
      "Control de multitudes",
      "Evacuación segura",
      "Coordinación con autoridades",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Vigilancia Privada",
    description:
      "Servicios de vigilancia 24/7 para condominios, residenciales y propiedades privadas.",
    features: [
      "Monitoreo continuo",
      "Respuesta inmediata",
      "Patrullaje vehicular",
    ],
  },
  {
    icon: UserCheck,
    title: "Guardias de Seguridad",
    description:
      "Personal capacitado y certificado para todo tipo de requerimientos de seguridad.",
    features: [
      "Personal certificado OS-10",
      "Uniformados",
      "Capacitación continua",
    ],
  },
  {
    icon: Camera,
    title: "Control de Acceso",
    description:
      "Gestión profesional de ingreso y salida de personas y vehículos en instalaciones.",
    features: [
      "Control vehicular",
      "Gestión de visitas",
      "Control de acceso",
    ],
  },
  {
    icon: Car,
    title: "Escoltas y Traslados",
    description:
      "Servicios de protección personal y traslado seguro de valores y personas.",
    features: [
      "Rutas seguras",
      "Escolta y transporte de cargas pesadas",
      "Personal de élite",
    ],
  },

  // aseo empresarial
  {
    icon: Trash,
    title: "Aseo Empresarial",
    description: "Servicios de limpieza profesional para empresas.",
    features: [
      "Limpieza de oficinas",
      "Limpieza de baños",
      "Limpieza de vidrios",
    ],
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Soluciones de Seguridad Integrales
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos una amplia gama de servicios de seguridad adaptados a las
            necesidades específicas de cada cliente.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
