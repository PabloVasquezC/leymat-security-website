"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const images = [
  {
    src: "/images/1.png",
    alt: "Reconocimiento Pyme Destacada de Curicó",
    title: "Reconocimiento Pyme Destacada",
  },
  {
    src: "/images/2.png",
    alt: "Personal de seguridad LEYMAT",
    title: "Personal Profesional",
  },
  {
    src: "/images/3.png",
    alt: "Equipo de seguridad en eventos",
    title: "Seguridad en Eventos",
  },
  {
    src: "/images/4.png",
    alt: "LEYMAT Seguridad Privada Banner",
    title: "Nuestra Marca",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Galería
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Nuestro Trabajo en Acción
          </h2>
          <p className="text-muted-foreground text-lg">
            Conoce a nuestro equipo y descubre cómo protegemos a nuestros
            clientes día a día.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-primary-foreground text-xl font-bold">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl aspect-video"
          >
            <Image
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
