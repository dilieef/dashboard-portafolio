import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/Data/Dashboard";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardSection from "@/components/Dashboard/DashboardSection";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    return {
        title: project
            ? `${project.name} | Dilieef Dev`
            : "Proyecto no encontrado | Dilieef Dev",
        description: project
            ? project.description
            : "No existe un proyecto con esta ruta.",
    };
}

export default async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) notFound();

    return (
        <DashboardLayout
            title={project.name}
            description={project.description}
        >
            <DashboardSection>
                <section className="rounded-2xl bg-white p-6 shadow-sm transition-colors dark:bg-slate-900">
                    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                                {project.status}
                            </span>
                            <h2 className="mt-4 text-2xl font-bold text-[#1C3044] dark:text-white">
                                Detalle del proyecto
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6B8BA4] dark:text-slate-400">
                                {project.description}
                            </p>
                        </div>
                        <Link
                            href="/projects"
                            className="inline-flex rounded-xl bg-[#1C3044] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24445F]"
                        >
                            Volver
                        </Link>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#1C3044] dark:text-white">
                            Stack utilizado
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-[#1C3044] dark:bg-slate-800 dark:text-slate-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </DashboardSection>
        </DashboardLayout>
    );
}