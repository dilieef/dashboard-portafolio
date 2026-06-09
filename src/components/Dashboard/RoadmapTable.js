"use client";

import { useState } from "react";
import { roadmapTasks } from "@/Data/Dashboard";

const filters = ["Todos", "En progreso", "Planeado", "Pendiente", "Completado"];

const statusStyles = {
    "En progreso": "bg-blue-50 text-blue-600",
    Planeado: "bg-amber-50 text-amber-600",
    Pendiente: "bg-slate-100 text-slate-600",
};

const priorityStyles = {
    Alta: "bg-rose-50 text-rose-600",
    Media: "bg-emerald-50 text-emerald-600",
};

export default function RoadmapTable() {
    const [selectedStatus, setSelectedStatus] = useState("Todos");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTasks = roadmapTasks.filter((task) => {
        const matchesStatus =
            selectedStatus === "Todos" || task.status === selectedStatus;

        const matchesSearch =
            task.task.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.area.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesStatus && matchesSearch;
    });

    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h2 className="text-xl font-bold text-[#1C3044]">
                        Roadmap tecnico
                    </h2>
                    <p className="mt-1 text-sm text-[#6B8BA4]">
                        Proximas tareas para avanzar hacia fullstack
                    </p>
                </div>

                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Buscar tarea..."
                    className="w-full rounded-full bg-slate-100 px-4 py-2 text-sm text-[#1C3044] outline-none placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1C3044]/20 lg:w-64"
                />


                <div className="flex flex-wrap gap-2">
                    {filters.map((filter) => {
                        const isActive = selectedStatus === filter;

                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setSelectedStatus(filter)}
                                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                                    isActive
                                        ? "bg-[#1C3044] text-white shadow-sm"
                                        : "bg-slate-100 text-[#6B8BA4] hover:bg-slate-200"
                                }`}
                            >
                                {filter}
                            </button>
                        );
                    })}
                </div>
            </div>

            <p className="mb-4 text-sm font-medium text-[#6B8BA4]">
                Mostrando {filteredTasks.length} de {roadmapTasks.length} Tareas
            </p>

            {filteredTasks.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                    <h3 className="font-bold text-[#1C3044]">
                        No hay tareas para este filtro
                    </h3>
                    <p className="mt-2 text-sm text-[#6B8BA4]">
                        Cuando agregues tareas con este estado, apareceran aqui.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] border-collapse">
                        <thead>
                        <tr className="border-b border-slate-100 text-left text-xs uppercase text-slate-400">
                            <th className="pb-3 font-semibold">Tarea</th>
                            <th className="pb-3 font-semibold">Area</th>
                            <th className="pb-3 font-semibold">Estado</th>
                            <th className="pb-3 font-semibold">Prioridad</th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                        {filteredTasks.map((item) => (
                            <tr key={item.task} className="text-sm">
                                <td className="py-4 font-semibold text-[#1C3044]">
                                    {item.task}
                                </td>
                                <td className="py-4 text-[#6B8BA4]">
                                    {item.area}
                                </td>
                                <td className="py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.status]}`}>
                            {item.status}
                        </span>
                                </td>
                                <td className="py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[item.priority]}`}>
                            {item.priority}
                        </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}
