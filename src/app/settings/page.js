import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import SettingsPanel from "@/components/Dashboard/SettingsPanel";

export const metadata = {
    title: "Settings | Dilieef Dev",
    description: "Preferencias locales y configuracion del perfil.",
};

export default function SettingsPage() {
    return (
        <DashboardLayout
            title="Settings"
            description="Preferencias locales y configuracion del perfil."
        >
            <DashboardSection>
                <SettingsPanel />
            </DashboardSection>
        </DashboardLayout>
    );
}