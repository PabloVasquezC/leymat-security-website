"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
// @ts-ignore
import { useActionState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm } from "@/app/actions/submit-contact";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfonos",
    value: "+56 9 58006127\n+56 9 38854399",
    href: "tel:+56958006127",
  },
  {
    icon: Mail,
    label: "Email",
    value: "leymatseguridad@gmail.com",
    href: "mailto:leymatseguridad@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Curicó, Región del Maule\nChile",
    href: "#",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [state, formAction, isPending] = useActionState(submitContactForm, { success: false, message: '' });

  // Client-side state for conditional fields
  const [selectedTipo, setSelectedTipo] = useState("");

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      setSelectedTipo("");
    } else if (state.message && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section id="contacto" className="py-24 bg-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-accent font-semibold text-sm uppercase tracking-wider"
            >
              Contacto
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-6"
            >
              ¿Necesitas Seguridad Profesional?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-primary-foreground/70 text-lg mb-10"
            >
              Contáctanos hoy para una cotización personalizada. Estamos listos
              para proteger lo que más importa para ti.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60">
                      {item.label}
                    </div>
                    <div className="text-primary-foreground font-medium whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/56958006127"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold mt-10 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Escríbenos por WhatsApp
            </motion.a>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {state.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-2xl p-8 shadow-xl h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border-2 border-green-500/20">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-card-foreground/70 text-lg">
                    Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.
                  </p>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 text-accent font-medium hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form
                action={formAction}
                className="bg-card rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-xl font-bold text-card-foreground mb-6">
                  Solicita una Cotización
                </h3>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      placeholder="Tu nombre"
                    />
                    {state.errors?.nombre && <p className="text-xs text-red-500 mt-1">{state.errors.nombre[0]}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="correo"
                        className="block text-sm font-medium text-card-foreground mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                        placeholder="tu@email.com"
                      />
                      {state.errors?.correo && <p className="text-xs text-red-500 mt-1">{state.errors.correo[0]}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="celular"
                        className="block text-sm font-medium text-card-foreground mb-2"
                      >
                        Teléfono <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="celular"
                        name="celular"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                        placeholder="+56 9 XXXX XXXX"
                      />
                      {state.errors?.celular && <p className="text-xs text-red-500 mt-1">{state.errors.celular[0]}</p>}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="tipo"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      ¿Eres empresa o persona natural? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      required
                      value={selectedTipo}
                      onChange={(e) => setSelectedTipo(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground appearance-none"
                    >
                      <option value="" disabled>Seleccionar...</option>
                      <option value="Empresa">Empresa</option>
                      <option value="Persona natural">Persona natural</option>
                    </select>
                    {state.errors?.tipo && <p className="text-xs text-red-500 mt-1">{state.errors.tipo[0]}</p>}
                  </div>

                  {selectedTipo === 'Empresa' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="overflow-hidden"
                    >
                      <label
                        htmlFor="nombreEmpresa"
                        className="block text-sm font-medium text-card-foreground mb-2"
                      >
                        Nombre de la Empresa <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombreEmpresa"
                        name="nombreEmpresa"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                        placeholder="Nombre de tu empresa"
                      />
                      {state.errors?.nombreEmpresa && <p className="text-xs text-red-500 mt-1">{state.errors.nombreEmpresa[0]}</p>}
                    </motion.div>
                  )}

                  <div>
                    <label
                      htmlFor="servicio"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Servicio <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground appearance-none"
                    >
                      <option value="" disabled>Selecciona un servicio</option>
                      <option value="Seguridad">Seguridad</option>
                      <option value="Aseo">Aseo</option>
                      <option value="Ambos">Ambos</option>
                    </select>
                    {state.errors?.servicio && <p className="text-xs text-red-500 mt-1">{state.errors.servicio[0]}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                    {state.errors?.mensaje && <p className="text-xs text-red-500 mt-1">{state.errors.mensaje[0]}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isPending}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
