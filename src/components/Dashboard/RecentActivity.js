import { activity } from "@/Data/Dashboard";

export default function RecentActivity() {
    return (
        <section className="rounded-2xl bg-white dark:bg-[#1E293B] p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white">
                    Actividad reciente
                </h2>
                <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                    Avances recientes dentro del roadmap
                </p>
            </div>

            <div className="space-y-4">
                {activity.map((item) => (
                    <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50"
                    >
                        <div className="mt-1 h-3 w-3 rounded-full bg-[#00FF84]" />

                        <div>
                            <h3 className="font-semibold text-[#1C3044] dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                                {item.description}
                            </p>
                            <span className="mt-2 block text-xs font-medium text-slate-400">
                {item.time}
              </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}