import { Code2, ExternalLink, Mail, MapPin, Rocket, Target } from "lucide-react";

const highlights = [
    { title: "Frontend moderno", description: "Construcción de interfaces con React, Next.js y TailwindCSS.", icon: Code2 },
    { title: "Roadmap fullstack", description: "Aprendizaje progresivo de APIs, backend, bases de datos y deploy.", icon: Target },
    { title: "Portfolio profesional", description: "Proyecto orientado a mostrar habilidades reales y conseguir oportunidades.", icon: Rocket },
];

const stack = ["Next.js", "React", "TailwindCSS", "JavaScript", "Git", "GitHub", "Vercel", "Node.js"];

export default function AboutProfile() {
    return (
        <div className="space-y-6">
            <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#1C3044] text-white text-3xl font-bold">
                        D
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#1C3044] dark:text-white">Dilieef</h2>
                        <p className="mt-1 text-sm font-medium text-[#00D084]">Frontend Developer & Software Engineering Student</p>
                        <div className="mt-2 flex items-center gap-2 text-sm text-[#6B8BA4] dark:text-slate-400">
                            <MapPin size={14} />
                            Colombia
                        </div>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B8BA4] dark:text-slate-400">
                            Estoy construyendo un dashboard portfolio como proyecto real para aprender desarrollo frontend y fullstack moderno. El objetivo es practicar arquitectura, componentes reutilizables, responsive design, consumo de APIs y buenas prácticas con herramientas actuales.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a href="https://github.com/dilieef" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#1C3044] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24445F]">
                                <ExternalLink size={14} />
                                GitHub
                            </a>
                            <a href="mailto:cabezasdilieef@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-[#1C3044] dark:border-slate-600 px-4 py-2 text-sm font-semibold text-[#1C3044] dark:text-white transition hover:bg-slate-50 dark:hover:bg-slate-800">
                                <Mail size={14} />
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white mb-4">Stack tecnológico</h2>
                <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                        <span key={tech} className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2 text-sm font-medium text-[#1C3044] dark:text-slate-200">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white mb-6">Enfoque actual</h2>
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                    {highlights.map((item) => {
                        const Icon = item.icon;
                        return (
                            <article key={item.title} className="rounded-xl border border-slate-100 dark:border-slate-800 p-5 transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-800">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700 text-[#1C3044] dark:text-white">
                                    <Icon size={22} />
                                </div>
                                <h3 className="font-bold text-[#1C3044] dark:text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[#6B8BA4] dark:text-slate-400">{item.description}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}