import about_me from "../Data/about-me.json";

const AboutMeDescription = (): string => {
  return about_me.Description.replace("{Occupation}", about_me.Occupation)
    .replace("{a(n)}", about_me.a_n)
    .replace("{Occupation_Instance}", about_me.Occupation_Instance);
};

const AboutMeTitle: string = about_me.Title;

export { AboutMeTitle, AboutMeDescription };
