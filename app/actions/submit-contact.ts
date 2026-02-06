'use server'

interface ContactFormData {
    nombre: string
    correo: string
    celular: string
    tipo: string
    nombreEmpresa?: string
    servicio: string
    mensaje: string
}

interface State {
    success: boolean
    message: string
    errors?: Record<string, string[]>
}

export async function submitContactForm(prevState: State | null, formData: FormData): Promise<State> {
    const rawData: ContactFormData = {
        nombre: formData.get('nombre') as string,
        correo: formData.get('correo') as string,
        celular: formData.get('celular') as string,
        tipo: formData.get('tipo') as string,
        nombreEmpresa: formData.get('nombreEmpresa') as string,
        servicio: formData.get('servicio') as string,
        mensaje: formData.get('mensaje') as string,
    }

    // Basic validation
    const errors: Record<string, string[]> = {}
    if (!rawData.nombre) errors.nombre = ['El nombre es obligatorio']
    if (!rawData.correo) errors.correo = ['El correo es obligatorio']
    if (!rawData.celular) errors.celular = ['El celular es obligatorio']
    if (!rawData.tipo) errors.tipo = ['El tipo de solicitante es obligatorio']
    if (rawData.tipo === 'Empresa' && !rawData.nombreEmpresa) {
        errors.nombreEmpresa = ['El nombre de la empresa es obligatorio']
    }
    if (!rawData.servicio) errors.servicio = ['El servicio es obligatorio']
    if (!rawData.mensaje) errors.mensaje = ['El mensaje es obligatorio']

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            message: 'Por favor corrija los errores en el formulario',
            errors
        }
    }

    try {
        const response = await fetch('https://n8n.fluxia.cl/webhook-test/bd25f6ee-941f-4132-b795-e5520049e251', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rawData),
        })

        if (!response.ok) {
            throw new Error('Error al enviar el formulario')
        }

        return {
            success: true,
            message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        }
    } catch (error) {
        console.error('Error submitting form:', error)
        return {
            success: false,
            message: 'Hubo un error al enviar el mensaje. Por favor intente nuevamente.'
        }
    }
}
