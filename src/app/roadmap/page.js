import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import RoadmapTable from "@/components/Dashboard/RoadmapTable";

export const metadata = {
    title: "Roadmap | Dilieef Dev",
    description: "Seguimiento de tareas, objetivos y progreso tecnico del roadmap.",
};

export default function RoadmapPage() {
    return (
        <DashboardLayout
            title="Roadmap"
            description="Seguimiento de tareas y próximos pasos técnicos."
        >
            <DashboardSection>
                <RoadmapTable />
            </DashboardSection>
        </DashboardLayout>
    );
}