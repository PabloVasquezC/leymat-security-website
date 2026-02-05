"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ThankYouPage() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-primary px-4">
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-8"
                >
                    <CheckCircle className="w-12 h-12 text-accent" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-white mb-4"
                >
                    ¡Mensaje Recibido!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-primary-foreground/80 text-lg mb-8"
                >
                    Gracias por contactar a <span className="text-accent font-semibold">Leymat Seguridad</span>. Hemos recibido tu solicitud y
                    te responderemos a la brevedad posible.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                    <p className="text-sm text-primary-foreground/60">
                        Serás redirigido al inicio en{" "}
                        <span className="font-bold text-accent text-lg">{countdown}</span>{" "}
                        segundos...
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8"
                >
                    <button
                        onClick={() => router.push("/")}
                        className="text-white hover:text-accent font-medium text-sm transition-colors"
                    >
                        Volver al inicio ahora
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
