import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import ProyectsOverview from "@/components/Dashboard/ProyectsOverview";

export const metadata = {
    title: "Proyectos | Dilieef Dev",
    description: "Vista detallada de proyectos y builds del roadmap fullstack.",
};

export default function ProjectsPage() {
    return (
        <DashboardLayout
            title="Proyectos"
            description="Vista detallada de builds y proyectos del roadmap."
        >
            <DashboardSection>
                <ProyectsOverview />
            </DashboardSection>
        </DashboardLayout>
    );
}
