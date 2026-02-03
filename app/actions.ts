"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER, // The authenticated sender (the "postman")
        to: "vascor.pablo@gmail.com", // The destination
        replyTo: email, // When Leymat replies, it goes to the client (formData email)
        subject: `Nueva Cotización: ${name} - ${service}`,
        text: `
      De: ${name} (${email})
      Teléfono: ${phone}
      Servicio: ${service}
      
      Mensaje:
      ${message}
    `,
        html: `
      <h3>Nueva Solicitud de Cotización</h3>
      <p><strong>De:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Servicio:</strong> ${service}</p>
      <br/>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: "Correo enviado exitosamente" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Error al enviar el correo" };
    }
}
