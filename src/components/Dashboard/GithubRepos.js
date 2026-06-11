import { Star } from "lucide-react";
import { getGithubRepos } from "@/Lib/Github";

export default async function GithubRepos({ username = "dilieef" }) {
    const repos = await getGithubRepos(username);

    return (
        <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white">
                    Repositorios recientes
                </h2>
                <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                    Proyectos públicos obtenidos desde GitHub
                </p>
            </div>

            {repos.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-8 text-center">
                    <h3 className="font-bold text-[#1C3044] dark:text-white">
                        No hay repositorios públicos para mostrar
                    </h3>
                    <p className="mt-2 text-sm text-[#6B8BA4] dark:text-slate-400">
                        Cuando este perfil tenga repositorios públicos, aparecerán aquí.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                    {repos.map((repo) => (
                        <article
                            key={repo.id}
                            className="rounded-xl border border-slate-100 dark:border-slate-800 dark:bg-slate-800 p-5 transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="mb-4 flex items-start justify-between gap-4">
                                <h3 className="font-bold text-[#1C3044] dark:text-white">
                                    {repo.name}
                                </h3>
                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-900/30 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                                    <Star size={14} />
                                    {repo.stargazers_count}
                                </span>
                            </div>
                            <p className="min-h-12 text-sm leading-6 text-[#6B8BA4] dark:text-slate-400">
                                {repo.description || "Repositorio sin descripción pública."}
                            </p>
                            <div className="mt-5 flex items-center justify-between gap-4">
                                <span className="rounded-lg bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-medium text-[#1C3044] dark:text-slate-200">
                                    {repo.language || "Sin lenguaje"}
                                </span>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-semibold text-[#1C3044] dark:text-slate-200 transition hover:text-[#24445F] dark:hover:text-white"
                                >
                                    Ver repo
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}