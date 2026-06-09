import Link from "next/link";
import { projects } from "@/Data/Dashboard";

const statusStyles = {
    "En progreso": "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    "Planeado": "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    "Idea": "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
};

export default function ProyectsOverview() {
    return (
        <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white">
                    Proyectos
                </h2>
                <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                    Ideas y builds activos dentro del roadmap
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                {projects.map((project) => (
                    <article
                        key={project.name}
                        className="rounded-xl border border-slate-100 dark:border-slate-800 p-5 transition hover:-translate-y-1 hover:shadow-md dark:hover:shadow-slate-800"
                    >
                        <div className="mb-4 flex items-start justify-between gap-4">
                            <h3 className="font-bold text-[#1C3044] dark:text-white">
                                {project.name}
                            </h3>

                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[project.status] ?? statusStyles["Idea"]}`}>
                                {project.status}
                            </span>
                        </div>

                        <p className="text-sm leading-6 text-[#6B8BA4] dark:text-slate-400">
                            {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-[#1C3044] dark:text-slate-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <Link
                            href={`/projects/${project.slug}`}
                            className="mt-5 inline-flex rounded-xl bg-[#1C3044] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24445F]"
                        >
                            Ver detalle
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}