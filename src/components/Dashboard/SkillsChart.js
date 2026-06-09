import { skillChartData } from "@/Data/Dashboard";

export default function SkillsChart() {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-[#1C3044]">
                    Skills overview
                </h2>
                <p className="mt-1 text-sm text-[#6B8BA4]">
                    Resumen visual de habilidades principales
                </p>
            </div>

            <div className="flex h-56 md:h-64 items-end justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 p-5">
                {skillChartData.map((item) => (
                    <div key={item.label} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                        <span className="text-sm font-bold text-[#1C3044]">
                            {item.value}%
                        </span>

                        <div className="flex h-full w-full max-w-16 items-end rounded-full bg-white p-1 shadow-inner">
                            <div
                                className="w-full rounded-full bg-[#00D084] transition-all duration-500"
                                style={{ height: `${item.value}%` }}
                            />
                        </div>

                        <span className="text-xs font-semibold text-[#6B8BA4]">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
