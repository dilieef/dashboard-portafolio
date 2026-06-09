export default function GithubSkeleton() {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <div className="h-6 w-48 animate-pulse rounded bg-slate-200" />
                <div className="mt-2 h-4 w-72 animate-pulse rounded bg-slate-100" />
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <div className="h-20 w-20 animate-pulse rounded-full bg-slate-200" />

                <div className="flex-1">
                    <div className="h-7 w-56 animate-pulse rounded bg-slate-200" />
                    <div className="mt-3 h-4 w-32 animate-pulse rounded bg-slate-100" />
                    <div className="mt-5 h-4 w-full max-w-xl animate-pulse rounded bg-slate-100" />
                    <div className="mt-3 h-4 w-full max-w-md animate-pulse rounded bg-slate-100" />

                    <div className="mt-5 grid grid-cols-3 gap-3">
                        <div className="h-16 animate-pulse rounded-xl bg-slate-100" />
                        <div className="h-16 animate-pulse rounded-xl bg-slate-100" />
                        <div className="h-16 animate-pulse rounded-xl bg-slate-100" />
                    </div>
                </div>
            </div>
        </section>
    );
}