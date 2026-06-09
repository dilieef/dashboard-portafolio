import { learningProgress } from "@/Data/Dashboard";

export default function LearningProgress() {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-[#1C3044]">
                    Progreso de aprendizaje
                </h2>
                <p className="mt-1 text-sm text-[#6B8BA4]">
                    Habilidades clave dentro del roadmap fullstack
                </p>
            </div>

            <div className="space-y-5">
                {learningProgress.map((item) => (
                    <div key={item.skill}>
                        <div className="mb-2 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="font-semibold text-[#1C3044]">
                                    {item.skill}
                                </h3>
                                <p className="text-xs font-medium text-[#6B8BA4]">
                                    {item.category}
                                </p>
                            </div>

                            <span className="text-sm font-bold text-[#1C3044]">
                                {item.progress}%
                            </span>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                            <div
                                className="h-full rounded-full bg-[#00D084] transition-all duration-500"
                                style={{ width: `${item.progress}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}