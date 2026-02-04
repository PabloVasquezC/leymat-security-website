"use client"
import { useEffect } from "react"
import "@n8n/chat/style.css";


export function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://n8n.fluxia.cl/webhook/afbe1aff-91f5-42d8-9f77-03bf8e0d1aae/chat",
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        loadPreviousSession: true,
        showWelcomeScreen: false,
        initialMessages: [
          "👋 Hola! Soy el asistente virtual de Leymat y estoy aquí para ayudarte."
        ],
        i18n: {
          en: {
            title: "Leymat.",
            subtitle: "Asistencia Virtual",
            inputPlaceholder: "Escribe aqui..",
            footer: "",
            getStarted: "Comenzar",
            closeButtonTooltip: "Cerrar chat",
          },
        },
      });
    });
  }, []);

  return null;
}
