import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import AboutProfile from "@/components/Dashboard/AboutProfile";

export const metadata = {
    title: "Sobre mi | Dilieef Dev",
    description: "Contexto personal, aprendizaje actual y direccion profesional.",
};

export default function AboutPage() {
    return (
        <DashboardLayout
            title="Sobre mi"
            description="Contexto personal, aprendizaje actual y direccion profesional."
        >
            <DashboardSection>
                <AboutProfile />
            </DashboardSection>
        </DashboardLayout>
    );
}