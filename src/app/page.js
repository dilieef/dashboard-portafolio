import { Suspense } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import MetricsGrid from "@/components/Dashboard/MetricsGrid";
import RecentActivity from "@/components/Dashboard/RecentActivity";
import LearningProgress from "@/components/Dashboard/LearningProgress";
import SkillsChart from "@/components/Dashboard/SkillsChart";
import GithubProfile from "@/components/Dashboard/GithubProfile";
import GithubRepos from "@/components/Dashboard/GithubRepos";
import GithubSkeleton from "@/components/Dashboard/GithubSkeleton";
import ProyectsOverview from "@/components/Dashboard/ProyectsOverview";
import RoadmapTable from "@/components/Dashboard/RoadmapTable";

export const metadata = {
    title: "Dashboard | Dilieef Dev",
    description: "Dashboard portfolio construido con Next.js, React y TailwindCSS.",
};

export default function Home() {
    return (
        <DashboardLayout
            title="Dilieef — Frontend Dev"
            description="Construyo interfaces modernas con React y Next.js"
        >
            <DashboardSection>
                <MetricsGrid />
            </DashboardSection>

            <DashboardSection>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <RecentActivity />
                    <LearningProgress />
                </div>
            </DashboardSection>

            <DashboardSection>
                <SkillsChart />
            </DashboardSection>

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

            <DashboardSection>
                <ProyectsOverview />
            </DashboardSection>

            <DashboardSection>
                <RoadmapTable />
            </DashboardSection>
        </DashboardLayout>
    );
}