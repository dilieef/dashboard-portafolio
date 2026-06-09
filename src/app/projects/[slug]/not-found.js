import Link from "next/link";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardSection from "@/components/Dashboard/DashboardSection";

export default function NotFound() {
    return (
        <DashboardLayout
            title="Proyecto no encontrado"
            description="No existe un proyecto con esta ruta."
        >
            <DashboardSection>
                <section className="rounded-2xl bg-white p-6 shadow-sm transition-colors dark:bg-slate-900">
                    <p className="text-sm text-[#6B8BA4] dark:text-slate-400">
                        Vuelve a la lista de proyectos para seleccionar uno disponible.
                    </p>
                    <Link
                        href="/projects"
                        className="mt-4 inline-flex rounded-xl bg-[#1C3044] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24445F]"
                    >
                        Volver a proyectos
                    </Link>
                </section>
            </DashboardSection>
        </DashboardLayout>
    );
}