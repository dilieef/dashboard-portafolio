import { Suspense } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import GithubProfile from "@/components/Dashboard/GithubProfile";
import GithubRepos from "@/components/Dashboard/GithubRepos";
import GithubSkeleton from "@/components/Dashboard/GithubSkeleton";

export const metadata = {
    title: "GitHub | Dilieef Dev",
    description: "Perfil publico y repositorios recientes conectados con la API de GitHub.",
};

export default function GithubPage() {
    return (
        <DashboardLayout
            title="GitHub"
            description="Perfil publico y repositorios recientes conectados con la API de GitHub."
        >
            <DashboardSection>
                <Suspense fallback={<GithubSkeleton />}>
                    <GithubProfile username="dilieef" />
                </Suspense>
            </DashboardSection>

            <DashboardSection>
                <Suspense fallback={<GithubSkeleton />}>
                    <GithubRepos username="dilieef" />
                </Suspense>
            </DashboardSection>
        </DashboardLayout>
    );
}