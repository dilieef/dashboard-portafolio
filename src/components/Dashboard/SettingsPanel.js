"use client";

import { useState } from "react";
import { Mail, Github, MessageCircle, CheckCircle } from "lucide-react";

const availability = [
    { label: "Disponible para freelance", value: "available", color: "bg-emerald-400" },
    { label: "Disponible en 2 semanas", value: "soon", color: "bg-amber-400" },
    { label: "No disponible", value: "unavailable", color: "bg-red-400" },
];

export default function SettingsPanel() {
    const [currentAvailability, setCurrentAvailability] = useState("available");
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("es");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    function handleFormChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit() {
        if (!formData.name || !formData.email || !formData.message) return;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", message: "" });
    }

    const selectedAvailability = availability.find((a) => a.value === currentAvailability);

    return (
        <div className="space-y-6">

            <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white mb-1">
                    Disponibilidad
                </h2>
                <p className="text-sm text-[#6B8BA4] dark:text-slate-400 mb-5">
                    Estado actual para proyectos freelance
                </p>
                <div className="flex flex-wrap gap-3">
                    {availability.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => setCurrentAvailability(option.value)}
                            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition border ${
                                currentAvailability === option.value
                                    ? "bg-[#1C3044] text-white border-[#1C3044]"
                                    : "bg-slate-50 dark:bg-slate-800 text-[#1C3044] dark:text-white border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                            }`}
                        >
                            <span className={`h-2 w-2 rounded-full ${option.color}`} />
                            {option.label}
                        </button>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-3">
                    <span className={`h-3 w-3 rounded-full ${selectedAvailability.color}`} />
                    <p className="text-sm text-[#6B8BA4] dark:text-slate-400">
                        Estado actual:{" "}
                        <span className="font-semibold text-[#1C3044] dark:text-white">
                            {selectedAvailability.label}
                        </span>
                    </p>
                </div>
            </section>

            <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white mb-1">
                    Preferencias
                </h2>
                <p className="text-sm text-[#6B8BA4] dark:text-slate-400 mb-5">
                    Configuración visual del dashboard
                </p>
                <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4">
                        <div>
                            <h3 className="text-sm font-semibold text-[#1C3044] dark:text-white">
                                Modo oscuro
                            </h3>
                            <p className="mt-1 text-xs text-[#6B8BA4] dark:text-slate-400">
                                Cambia la apariencia del dashboard
                            </p>
                        </div>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`relative h-7 w-12 rounded-full transition ${
                                darkMode ? "bg-[#00D084]" : "bg-slate-300 dark:bg-slate-600"
                            }`}
                        >
                            <span
                                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                                    darkMode ? "left-6" : "left-1"
                                }`}
                            />
                        </button>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4">
                        <div>
                            <h3 className="text-sm font-semibold text-[#1C3044] dark:text-white">
                                Idioma
                            </h3>
                            <p className="mt-1 text-xs text-[#6B8BA4] dark:text-slate-400">
                                Idioma de la interfaz
                            </p>
                        </div>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-[#1C3044] dark:text-white outline-none"
                        >
                            <option value="es">Español</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </div>
            </section>

            <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white mb-1">
                    Contáctame
                </h2>
                <p className="text-sm text-[#6B8BA4] dark:text-slate-400 mb-5">
                    ¿Tienes un proyecto en mente? Escríbeme
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                    <a
                        href="mailto:cabezasdilieef@gmail.com"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#1C3044] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24445F]"
                    >
                        <Mail size={14} />
                        Email directo
                    </a>
                    <a
                        href="https://github.com/dilieef"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#1C3044] dark:border-slate-600 px-4 py-2 text-sm font-semibold text-[#1C3044] dark:text-white transition hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                        <Github size={14} />
                        GitHub
                    </a>
                    <a
                        href="https://wa.me/+57 3160531430"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                    >
                        <MessageCircle size={14} />
                        WhatsApp
                    </a>
                </div>
                {submitted ? (
                    <div className="flex items-center gap-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-4">
                        <CheckCircle size={20} className="text-emerald-500" />
                        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                            Mensaje enviado correctamente
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={handleFormChange}
                                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm text-[#1C3044] dark:text-white outline-none transition focus:border-[#1C3044] dark:focus:border-slate-400"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu email"
                                value={formData.email}
                                onChange={handleFormChange}
                                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm text-[#1C3044] dark:text-white outline-none transition focus:border-[#1C3044] dark:focus:border-slate-400"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Cuéntame sobre tu proyecto..."
                            value={formData.message}
                            onChange={handleFormChange}
                            rows={4}
                            className="w-full resize-none rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm text-[#1C3044] dark:text-white outline-none transition focus:border-[#1C3044] dark:focus:border-slate-400"
                        />
                        <button
                            onClick={handleSubmit}
                            className="rounded-xl bg-[#1C3044] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24445F]"
                        >
                            Enviar mensaje
                        </button>
                    </div>
                )}
            </section>

        </div>
    );
}