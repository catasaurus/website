export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "e",
    techs: ["ReactJS (NextJS)", "TRPC", "zod"],
    link: "https://github.com/catasaurus/e",
  },
  {
    title: "style transfer app",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://www.linablidi.fr/",
  },
  {
    title: "BART finetune",
    techs: ["Pytorch"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
