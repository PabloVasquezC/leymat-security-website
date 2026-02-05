import * as React from "react";
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Heading,
    Hr,
    Link,
    Preview,
    Tailwind,
    Row,
    Column,
} from "@react-email/components";

interface EmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    name,
    email,
    phone,
    service,
    message,
}) => {
    return (
        <Html>
            <Head />
            <Preview>Nueva solicitud de cotización de {name}</Preview>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                primary: "#1a365d", // Navy Blue approx
                                accent: "#3b82f6", // Sky Blue approx
                            },
                        },
                    },
                }}
            >
                <Body className="bg-slate-100 font-sans">
                    <Container className="bg-white mx-auto my-10 rounded-lg shadow-lg overflow-hidden max-w-2xl">
                        {/* Header */}
                        <Section className="bg-primary p-8 text-center">
                            <Heading className="text-3xl font-bold text-white m-0">
                                LEYMAT
                            </Heading>
                            <Text className="text-accent font-medium uppercase tracking-widest text-xs mt-2">
                                Seguridad & Aseo Industrial
                            </Text>
                        </Section>

                        <Section className="p-8">
                            <Heading className="text-2xl font-bold text-gray-800 text-center mb-2">
                                Nueva Solicitud de Cotización
                            </Heading>
                            <Text className="text-gray-600 text-center mb-8">
                                Has recibido un nuevo mensaje desde el sitio web.
                            </Text>

                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <Row className="mb-4">
                                    <Column>
                                        <Text className="font-bold text-primary text-sm uppercase mb-1">Nombre</Text>
                                        <Text className="text-gray-800 text-lg m-0">{name}</Text>
                                    </Column>
                                </Row>

                                <Row className="mb-4">
                                    <Column>
                                        <Text className="font-bold text-primary text-sm uppercase mb-1">Email</Text>
                                        <Link href={`mailto:${email}`} className="text-accent text-base underline">
                                            {email}
                                        </Link>
                                    </Column>
                                    <Column>
                                        <Text className="font-bold text-primary text-sm uppercase mb-1">Teléfono</Text>
                                        <Link href={`tel:${phone}`} className="text-accent text-base underline">
                                            {phone}
                                        </Link>
                                    </Column>
                                </Row>

                                <Row className="mb-4">
                                    <Column>
                                        <Text className="font-bold text-primary text-sm uppercase mb-1">Servicio Interesado</Text>
                                        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold capitalize">
                                            {service}
                                        </div>
                                    </Column>
                                </Row>
                            </div>

                            <Hr className="border-slate-200 my-8" />

                            <Text className="font-bold text-primary text-lg mb-2">Mensaje:</Text>
                            <Text className="text-gray-700 whitespace-pre-wrap bg-white p-4 rounded border border-slate-200 text-base leading-relaxed">
                                {message}
                            </Text>

                            <div className="mt-8 text-center">
                                <Link
                                    href={`mailto:${email}`}
                                    className="bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm no-underline inline-block transition-colors"
                                >
                                    Responder al Cliente
                                </Link>
                            </div>
                        </Section>

                        {/* Footer */}
                        <Section className="bg-slate-50 p-6 text-center border-t border-slate-200">
                            <Text className="text-xs text-gray-500 m-0">
                                Este mensaje fue enviado automáticamente desde leymatseguridad.cl
                            </Text>
                            <Text className="text-xs text-gray-400 mt-2 m-0">
                                &copy; {new Date().getFullYear()} Leymat Seguridad. Todos los derechos reservados.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html >
    );
};

export default EmailTemplate;
