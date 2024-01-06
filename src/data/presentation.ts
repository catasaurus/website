type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "me@sebastianlarson.com",
  title: "Hi, I’m Sebastian 👋",
  // profile: "/profile.webp",
  description:
    "I'm a software developer, mainly full stack web dev but currently getting into more low level programming.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/seblarsonn",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sebastian-larson/",
    },
    {
      label: "Github",
      link: "https://github.com/catasaurus",
    },
  ],
};

export default presentation;
