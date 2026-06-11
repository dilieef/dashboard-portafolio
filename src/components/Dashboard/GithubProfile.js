import { getGithubProfile } from "@/Lib/Github";
import Image from "next/image";

export default async function GithubProfile({ username = "dilieef" }) {
    const profile = await getGithubProfile(username);

    if (!profile) {
        return (
            <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white">
                    GitHub Profile
                </h2>
                <p className="mt-2 text-sm text-[#6B8BA4] dark:text-slate-400">
                    No se pudo cargar la información de GitHub.
                </p>
            </section>
        );
    }

    return (
        <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-[#1C3044] dark:text-white">
                    GitHub Profile
                </h2>
                <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                    Datos públicos obtenidos desde la API de GitHub
                </p>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <Image
                    src={profile.avatar_url}
                    alt={profile.login}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover"
                />

                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1C3044] dark:text-white">
                        {profile.name || profile.login}
                    </h3>
                    <p className="mt-1 text-sm text-[#6B8BA4] dark:text-slate-400">
                        @{profile.login}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6B8BA4] dark:text-slate-400">
                        {profile.bio || "Este perfil no tiene bio pública."}
                    </p>
                    <a
                        href={profile.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex rounded-xl bg-[#1C3044] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24445F]"
                    >
                        Ver perfil en GitHub
                    </a>

                    <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                        <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-3">
                            <p className="text-lg font-bold text-[#1C3044] dark:text-white">
                                {profile.public_repos}
                            </p>
                            <p className="text-xs text-[#6B8BA4] dark:text-slate-400">
                                Repos
                            </p>
                        </div>
                        <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-3">
                            <p className="text-lg font-bold text-[#1C3044] dark:text-white">
                                {profile.followers}
                            </p>
                            <p className="text-xs text-[#6B8BA4] dark:text-slate-400">
                                Followers
                            </p>
                        </div>
                        <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-3">
                            <p className="text-lg font-bold text-[#1C3044] dark:text-white">
                                {profile.following}
                            </p>
                            <p className="text-xs text-[#6B8BA4] dark:text-slate-400">
                                Following
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}