"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="LEYMAT Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-foreground">
                  LEYMAT
                </h2>
                <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                  Seguridad Privada
                </p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Brindamos soluciones de seguridad integral, con guardias altamente capacitados y supervisores certificados por OS-10.
            </p>
            <br />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Prestación de servicios de aseo empresarial para entidades publicas y privadas, con personal calificado para brindar soluciones integrales
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+56958006127"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +56 9 58006127
                </a>
              </li>
              <li>
                <a
                  href="tel:+56938854399"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +56 9 38854399
                </a>
              </li>
              <li>
                <a
                  href="mailto:leymatseguridad@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  leymatseguridad@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Curicó, Región del Maule, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-primary-foreground/60 text-sm text-center md:text-left space-y-1">
            <p>
              © {currentYear} LEYMAT Seguridad Privada. Todos los derechos
              reservados.
            </p>
            <p>
              Sitio construido por{" "}
              <a
                href="https://fluxia.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary-foreground transition-colors"
              >
                Fluxia
              </a>
            </p>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            Empresa Certificada OS-10 Carabineros de Chile
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
