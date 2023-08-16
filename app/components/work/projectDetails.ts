import {
    SiCplusplus,
    SiExpress,
    SiFramer,
    SiGithub, SiMongodb, SiNeovim,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Think Big Technology",
        description:
            "Site for the agency I own and manage.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/omarh19921",
        demo: "https://www.thinkbigtechnology.com/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 1,
        name: "Poseidon Software",
        description:
            "A full suite of apps with advanced features for contractors",
        technologies: [SiReact, SiNodedotjs, SiTailwindcss],
        techNames: ["React", "NodeJs", "Tailwind CSS"],
        techLinks: ["https://react.dev/", "https://www.nodejs.org/", "https://tailwindcss.com/"],
        github: "https://github.com/omarh19921",
        demo: "http://www.poseidon-fire.com/admin",
        image: "/projects/construction.webp",
        available: true,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiZig],
        techNames: ["Zig"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://github.com/omarh19921",
        demo: "https://github.com/omarh19921",
        image: "/projects/construction.webp",
        available: false,
    },
];
