import StatCard from "./StatCard";
import { stats } from "@/Data/Dashboard";

export default function MetricsGrid() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((stat) => (
                <StatCard
                    key={stat.label}
                    title={stat.label}
                    value={stat.value}
                    description={stat.description}
                    icon={stat.icon}
                />
            ))}
        </section>
    );
}