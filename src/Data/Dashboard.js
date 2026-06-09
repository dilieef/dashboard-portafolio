import {
    BriefcaseBusiness,
    TrendingUp,
    Users,
    Clock,
} from "lucide-react";

export const stats = [
    {
        label: "Proyectos",
        value: "12",
        description: "Proyectos en curso 3",
        icon: BriefcaseBusiness,
    },
    {
        label: "Stack dominado",
        value: "6 tecnologías",
        description: "Progreso de skills este mes",
        icon: TrendingUp,
    },
    {
        label: "Colaboraciones",
        value: "4",
        description: "Proyectos independientes realizados 7",
        icon: Users,
    },
    {
        label: "Horas de codigo",
        value: "286",
        description: "Practicar hace al maestro",
        icon: Clock,
    },
];

export const activity = [
    {
        title: "Arquitectura organizada",
        description: "Separaste componentes por layout, dashboard, ui y data.",
        time: "Hoy",
    },
    {
        title: "Cards dinámicas",
        description: "Las métricas ahora se renderizan desde un arreglo de datos.",
        time: "Hoy",
    },
    {
        title: "Header separado",
        description: "Moviste la identidad de la página a un componente dedicado.",
        time: "Hace poco",
    },
];

export const projects = [
    {
        name: "Dashboard Portfolio",
        slug: "dashboard-portfolio",
        description: "Interfaz personal para practicar arquitectura frontend moderna.",
        status: "En progreso",
        stack: ["Next.js", "React", "Tailwind"],
    },
    {
        name: "Fullstack Roadmap",
        slug: "fullstack-roadmap",
        description: "Ruta práctica para aprender frontend, APIs, backend y deploy.",
        status: "Planeado",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
    },
    {
        name: "Freelance Starter",
        slug: "freelance-starter",
        description: "Base para crear sitios profesionales para clientes pequeños.",
        status: "Idea",
        stack: ["React", "Tailwind", "Vercel"],
    },
];

export const learningProgress = [
    {
        skill: "React fundamentals",
        progress: 78,
        category: "Frontend",
    },
    {
        skill: "Next.js App Router",
        progress: 62,
        category: "Frontend",
    },
    {
        skill: "TailwindCSS",
        progress: 70,
        category: "UI",
    },
    {
        skill: "APIs y async/await",
        progress: 35,
        category: "Fullstack",
    },
];

export const roadmapTasks = [
    {
        task: "Pulir layout responsive",
        area: "UI",
        status: "En progreso",
        priority: "Alta",
    },
    {
        task: "Agregar charts al dashboard",
        area: "Dashboard",
        status: "Planeado",
        priority: "Media",
    },
    {
        task: "Conectar primera API externa",
        area: "Fullstack",
        status: "Pendiente",
        priority: "Alta",
    },
    {
        task: "Preparar deploy en Vercel",
        area: "Deploy",
        status: "Pendiente",
        priority: "Media",
    },
];

export const skillChartData = [
    {
        label: "React",
        value: 78,
    },
    {
        label: "Next",
        value: 62,
    },
    {
        label: "Tailwind",
        value: 70,
    },
    {
        label: "APIs",
        value: 35,
    },
];