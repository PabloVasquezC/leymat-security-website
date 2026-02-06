'use client'

import { useActionState, useState, useEffect } from "react"
import { submitContactForm } from "@/app/actions/submit-contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle2, ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
// import { motion } from "framer-motion" // Motion is used in parent, keeping it simple here or could add if needed. Keeping simple to avoid conflicts.

const serviciosOptions = [
    "Seguridad",
    "Aseo",
    "Ambos"
]

const tipoSolicitanteOptions = [
    "Empresa",
    "Persona natural"
]

export function ContactForm() {
    // using useActionState (React 19 pattern)
    const [state, formAction, isPending] = useActionState(submitContactForm, { success: false, message: '' })

    // Client-side state for conditional fields and custom dropdowns
    const [selectedTipo, setSelectedTipo] = useState("")
    const [selectedServicio, setSelectedServicio] = useState("")

    // Custom Dropdown Open States
    const [isTipoOpen, setIsTipoOpen] = useState(false)
    const [isServicioOpen, setIsServicioOpen] = useState(false)

    // Close dropdowns when clicking outside (simple implementation)
    useEffect(() => {
        const handleClick = () => {
            // Logic to close could go here, but for simplicity relying on onBlur or backdrop could be better. 
            // We'll trust the user interaction for now or keep it simple.
            // Actually, for a robust custom dropdown, a click listener on document is good.
        }
        // document.addEventListener('click', handleClick)
        // return () => document.removeEventListener('click', handleClick)
    }, [])

    return (
        <div className="w-full bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-xl">

            {state.success ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">¡Mensaje enviado!</h3>
                    <p className="text-slate-400 max-w-xs">{state.message}</p>
                    <Button
                        variant="outline"
                        onClick={() => window.location.reload()}
                        className="mt-6 border-white/10 text-white hover:bg-white/5 hover:text-white"
                    >
                        Enviar otro mensaje
                    </Button>
                </div>
            ) : (
                <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">Contáctanos</h3>
                        <p className="text-sm text-slate-400">Completa el formulario y te responderemos pronto.</p>
                    </div>

                    <div className="grid gap-6">
                        {/* Nombre Completo */}
                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-slate-200">Nombre Completo <span className="text-red-500">*</span></Label>
                            <Input
                                id="nombre"
                                name="nombre"
                                placeholder="Tu nombre"
                                required
                                className="bg-slate-950/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-primary/50"
                            />
                            {state.errors?.nombre && <p className="text-xs text-red-400">{state.errors.nombre[0]}</p>}
                        </div>

                        {/* Correo y Celular */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="correo" className="text-slate-200">Correo <span className="text-red-500">*</span></Label>
                                <Input
                                    id="correo"
                                    name="correo"
                                    type="email"
                                    placeholder="tu@correo.com"
                                    required
                                    className="bg-slate-950/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-primary/50"
                                />
                                {state.errors?.correo && <p className="text-xs text-red-400">{state.errors.correo[0]}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="celular" className="text-slate-200">Celular <span className="text-red-500">*</span></Label>
                                <Input
                                    id="celular"
                                    name="celular"
                                    type="tel"
                                    placeholder="+569 XXXX XXXX"
                                    required
                                    className="bg-slate-950/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-primary/50"
                                />
                                {state.errors?.celular && <p className="text-xs text-red-400">{state.errors.celular[0]}</p>}
                            </div>
                        </div>

                        {/* Tipo de Solicitante (Custom Dropdown) */}
                        <div className="space-y-2 relative">
                            <Label className="text-slate-200">¿Eres empresa o persona natural sin inicio de actividades? <span className="text-red-500">*</span></Label>
                            <input type="hidden" name="tipo" value={selectedTipo} />
                            <div
                                className="relative"
                                onClick={() => setIsTipoOpen(!isTipoOpen)}
                            >
                                <div className={cn(
                                    "flex h-10 w-full items-center justify-between rounded-md border bg-slate-950/50 px-3 py-2 text-sm cursor-pointer hover:bg-slate-950/70 transition-colors",
                                    isTipoOpen ? "border-primary ring-2 ring-primary/20" : "border-white/10",
                                    selectedTipo ? "text-white" : "text-slate-500"
                                )}>
                                    {selectedTipo || "Seleccionar..."}
                                    <ChevronDown className="h-4 w-4 opacity-50 text-white" />
                                </div>

                                {isTipoOpen && (
                                    <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-white/10 bg-slate-900 shadow-xl py-1">
                                        {tipoSolicitanteOptions.map((option) => (
                                            <div
                                                key={option}
                                                className={cn(
                                                    "relative flex select-none items-center px-3 py-2 text-sm outline-none cursor-pointer hover:bg-white/10 text-slate-200",
                                                    selectedTipo === option && "bg-primary/20 text-primary"
                                                )}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setSelectedTipo(option)
                                                    setIsTipoOpen(false)
                                                }}
                                            >
                                                <span className="flex-1 truncate">{option}</span>
                                                {selectedTipo === option && <Check className="ml-2 h-4 w-4" />}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {state.errors?.tipo && <p className="text-xs text-red-400">{state.errors.tipo[0]}</p>}
                        </div>

                        {/* Servicios (Custom Dropdown) */}
                        <div className="space-y-2 relative">
                            <Label className="text-slate-200">Servicios <span className="text-red-500">*</span></Label>
                            <input type="hidden" name="servicio" value={selectedServicio} />
                            <div
                                className="relative"
                                onClick={() => setIsServicioOpen(!isServicioOpen)}
                            >
                                <div className={cn(
                                    "flex h-10 w-full items-center justify-between rounded-md border bg-slate-950/50 px-3 py-2 text-sm cursor-pointer hover:bg-slate-950/70 transition-colors",
                                    isServicioOpen ? "border-primary ring-2 ring-primary/20" : "border-white/10",
                                    selectedServicio ? "text-white" : "text-slate-500"
                                )}>
                                    {selectedServicio || "Seleccionar servicio..."}
                                    <ChevronDown className="h-4 w-4 opacity-50 text-white" />
                                </div>

                                {isServicioOpen && (
                                    <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-white/10 bg-slate-900 shadow-xl py-1">
                                        {serviciosOptions.map((option) => (
                                            <div
                                                key={option}
                                                className={cn(
                                                    "relative flex select-none items-center px-3 py-2 text-sm outline-none cursor-pointer hover:bg-white/10 text-slate-200",
                                                    selectedServicio === option && "bg-primary/20 text-primary"
                                                )}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setSelectedServicio(option)
                                                    setIsServicioOpen(false)
                                                }}
                                            >
                                                <span className="flex-1 truncate">{option}</span>
                                                {selectedServicio === option && <Check className="ml-2 h-4 w-4" />}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {state.errors?.servicio && <p className="text-xs text-red-400">{state.errors.servicio[0]}</p>}
                        </div>

                        {/* Nombre Empresa (Conditional) */}
                        {selectedTipo === 'Empresa' && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                <Label htmlFor="nombreEmpresa" className="text-slate-200">Nombre empresa <span className="text-red-500">*</span></Label>
                                <Input
                                    id="nombreEmpresa"
                                    name="nombreEmpresa"
                                    placeholder="Si tu repuesta anterior fue Si, escribe aquí el nombre de la empresa..."
                                    required={selectedTipo === 'Empresa'}
                                    className="bg-slate-950/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-primary/50"
                                />
                                {state.errors?.nombreEmpresa && <p className="text-xs text-red-400">{state.errors.nombreEmpresa[0]}</p>}
                            </div>
                        )}

                        {/* Mensaje */}
                        <div className="space-y-2">
                            <Label htmlFor="mensaje" className="text-slate-200">Mensaje <span className="text-red-500">*</span></Label>
                            <Textarea
                                id="mensaje"
                                name="mensaje"
                                placeholder="Tu mensaje"
                                required
                                className="bg-slate-950/50 border-white/10 text-white placeholder:text-slate-500 min-h-[120px] focus-visible:ring-primary/50"
                            />
                            {state.errors?.mensaje && <p className="text-xs text-red-400">{state.errors.mensaje[0]}</p>}
                        </div>

                        {state.message && !state.success && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-400 text-sm">
                                {state.message}
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                "Enviar"
                            )}
                        </Button>
                    </div>
                </form>
            )}
        </div>
    )
}
