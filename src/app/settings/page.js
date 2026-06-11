import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import SettingsPanel from "@/components/Dashboard/SettingsPanel";

export const metadata = {
    title: "Contacto | Dilieef Dev",
    description: "Contáctame para proyectos freelance o colaboraciones.",
};

export default function SettingsPage() {
    return (
        <DashboardLayout
            title="Contacto"
            description="Preferencias locales y configuracion del perfil."
        >
            <DashboardSection>
                <SettingsPanel />
            </DashboardSection>
        </DashboardLayout>
    );
}