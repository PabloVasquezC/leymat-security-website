"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data, error } = await resend.emails.send({
            from: "Leymat Seguridad <onboarding@resend.dev>",
            to: ["leymatseguridad@gmail.com"],
            replyTo: email,
            subject: `Nueva Cotización: ${name} - ${service}`,
            react: <EmailTemplate
                name={name}
                email={email}
                phone={phone}
                service={service}
                message={message}
            />,
        });

        if (error) {
            console.error("Error sending email:", error);
            return { success: false, message: "Error al enviar el correo" };
        }

        return { success: true, message: "Correo enviado exitosamente" };
    } catch (error) {
        console.error("Unexpected error sending email:", error);
        return { success: false, message: "Error inesperado al enviar el correo" };
    }
}
