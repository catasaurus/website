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
    techs: ["Tensorflow", "Django"],
    link: "/",
  },
  {
    title: "BART finetune",
    techs: ["Pytorch", "HuggingFace"],
    link: "/", 
  },
];

export default projects;
