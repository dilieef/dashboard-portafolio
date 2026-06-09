"use client";

import { skillChartData } from "@/Data/Dashboard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function SkillsChart() {
    return (
        <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white">
                    Skills overview
                </h2>
                <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                    Resumen visual de habilidades principales
                </p>
            </div>

            <ResponsiveContainer width="100%" height={220}>
                <BarChart data={skillChartData} barSize={40}>
                    <XAxis
                        dataKey="label"
                        tick={{ fill: "#6B8BA4", fontSize: 13 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        domain={[0, 100]}
                        tick={{ fill: "#6B8BA4", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip
                        formatter={(value) => [`${value}%`, "Nivel"]}
                        contentStyle={{
                            backgroundColor: "#1C3044",
                            border: "none",
                            borderRadius: "12px",
                            color: "#fff",
                        }}
                        cursor={{ fill: "rgba(0,208,132,0.08)" }}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                        {skillChartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={index % 2 === 0 ? "#00D084" : "#1C3044"}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
}