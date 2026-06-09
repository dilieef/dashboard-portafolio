"use client";

import { useState } from "react";

export default function SettingsPanel() {
    const [profileName, setProfileName] = useState("Dilieef Dev");
    const [role, setRole] = useState("Frontend Developer");
    const [goal, setGoal] = useState("Construir portfolio fullstack");
    const [level, setLevel] = useState("Intermedio");
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm transition-colors dark:bg-slate-900">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white">
                    Configuracion del perfil
                </h2>
                <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                    Ajustes locales para practicar formularios controlados.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <label className="block">
                    <span className="text-sm font-semibold text-[#1C3044] dark:text-slate-200">
                        Nombre visible
                    </span>
                    <input
                        type="text"
                        value={profileName}
                        onChange={(event) => setProfileName(event.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1C3044] outline-none transition focus:border-[#1C3044] focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-slate-400"
                    />
                </label>

                <label className="block">
                    <span className="text-sm font-semibold text-[#1C3044] dark:text-slate-200">
                        Rol profesional
                    </span>
                    <input
                        type="text"
                        value={role}
                        onChange={(event) => setRole(event.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1C3044] outline-none transition focus:border-[#1C3044] focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-slate-400"
                    />
                </label>

                <label className="block lg:col-span-2">
                    <span className="text-sm font-semibold text-[#1C3044] dark:text-slate-200">
                        Objetivo actual
                    </span>
                    <textarea
                        value={goal}
                        onChange={(event) => setGoal(event.target.value)}
                        rows={4}
                        className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1C3044] outline-none transition focus:border-[#1C3044] focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-slate-400"
                    />
                </label>

                <label className="block">
                    <span className="text-sm font-semibold text-[#1C3044] dark:text-slate-200">
                        Nivel actual
                    </span>
                    <select
                        value={level}
                        onChange={(event) => setLevel(event.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1C3044] outline-none transition focus:border-[#1C3044] focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-slate-400"
                    >
                        <option>Inicial</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                    </select>
                </label>

                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <div>
                        <h3 className="text-sm font-semibold text-[#1C3044] dark:text-white">
                            Notificaciones
                        </h3>
                        <p className="mt-1 text-xs text-[#6B8BA4] dark:text-slate-400">
                            Simula una preferencia configurable.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                        className={`relative h-7 w-12 rounded-full transition ${
                            notificationsEnabled ? "bg-[#00D084]" : "bg-slate-300 dark:bg-slate-600"
                        }`}
                    >
                        <span
                            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                                notificationsEnabled ? "left-6" : "left-1"
                            }`}
                        />
                    </button>
                </div>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-5 dark:bg-slate-800">
                <h3 className="font-bold text-[#1C3044] dark:text-white">
                    Vista previa
                </h3>
                <p className="mt-2 text-sm text-[#6B8BA4] dark:text-slate-400">
                    {profileName} - {role}
                </p>
                <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                    Nivel: {level}
                </p>
                <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                    Objetivo: {goal}
                </p>
            </div>
        </section>
    );
}