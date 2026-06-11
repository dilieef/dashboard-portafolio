"use client";

import { skillChartData } from "@/Data/Dashboard";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    ReferenceLine,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-xl bg-[#1C3044] px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold text-[#8AAFC1]">{label}</p>
                <p className="mt-1 text-lg font-bold text-white">{payload[0].value}%</p>
            </div>
        );
    }
    return null;
};

export default function SkillsChart() {
    return (
        <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h2 className="text-xl font-bold text-[#1C3044] dark:text-white">
                        Skills overview
                    </h2>
                    <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                        Resumen visual de habilidades principales
                    </p>
                </div>
                <span className="rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Actualizado
                </span>
            </div>

            <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    data={skillChartData}
                    barSize={36}
                    margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="barGradientGreen" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00D084" stopOpacity={1} />
                            <stop offset="100%" stopColor="#00D084" stopOpacity={0.4} />
                        </linearGradient>
                        <linearGradient id="barGradientBlue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1C3044" stopOpacity={1} />
                            <stop offset="100%" stopColor="#1C3044" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>

                    <XAxis
                        dataKey="label"
                        tick={{ fill: "#6B8BA4", fontSize: 13, fontWeight: 600 }}
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
                        content={<CustomTooltip />}
                        cursor={{ fill: "rgba(0,208,132,0.06)", radius: 8 }}
                    />
                    <ReferenceLine
                        y={50}
                        stroke="#E2E8F0"
                        strokeDasharray="4 4"
                        label={{ value: "50%", fill: "#94A3B8", fontSize: 11, position: "right" }}
                    />
                    <Bar
                        dataKey="value"
                        radius={[10, 10, 0, 0]}
                        isAnimationActive={true}
                        animationDuration={800}
                        animationEasing="ease-out"
                    >
                        {skillChartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={index % 2 === 0 ? "url(#barGradientGreen)" : "url(#barGradientBlue)"}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#00D084]" />
                    <span className="text-xs text-[#6B8BA4] dark:text-slate-400">Habilidad principal</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#1C3044] dark:bg-slate-600" />
                    <span className="text-xs text-[#6B8BA4] dark:text-slate-400">En desarrollo</span>
                </div>
            </div>
        </section>
    );
}