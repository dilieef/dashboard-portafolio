import { Code2, Rocket, Target, User } from "lucide-react";

const highlights = [
    {
        title: "Frontend moderno",
        description: "Construccion de interfaces con React, Next.js y TailwindCSS.",
        icon: Code2,
    },
    {
        title: "Roadmap fullstack",
        description: "Aprendizaje progresivo de APIs, backend, bases de datos y deploy.",
        icon: Target,
    },
    {
        title: "Portfolio profesional",
        description: "Proyecto orientado a mostrar habilidades reales y conseguir oportunidades.",
        icon: Rocket,
    },
];

export default function AboutProfile() {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm transition-colors dark:bg-slate-900">
            <div className="mb-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1C3044] text-white">
                    <User size={26} />
                </div>

                <h2 className="text-2xl font-bold text-[#1C3044] dark:text-white">
                    Sobre mi proceso
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6B8BA4] dark:text-slate-400">
                    Estoy construyendo un dashboard portfolio como proyecto real para aprender desarrollo frontend y fullstack moderno. El objetivo es practicar arquitectura, componentes reutilizables, responsive design, consumo de APIs y buenas practicas con herramientas actuales.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                {highlights.map((item) => {
                    const Icon = item.icon;

                    return (
                        <article
                            key={item.title}
                            className="rounded-xl border border-slate-100 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-800"
                        >
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#1C3044] dark:bg-slate-700 dark:text-white">
                                <Icon size={22} />
                            </div>

                            <h3 className="font-bold text-[#1C3044] dark:text-white">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#6B8BA4] dark:text-slate-400">
                                {item.description}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}