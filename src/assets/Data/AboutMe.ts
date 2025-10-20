interface AboutMe {
  Title: string;
  Description: string;
  a_n: string;
  Occupation: string;
  Occupation_Instance: string;
  Interest: string;
}

let aboutMeData: AboutMe = {
  Title: "About me",
  Description:
    "I am {a(n)} {Occupation} at {Occupation_Instance}. I have an interest in {Interest}.",
  a_n: "a",
  Occupation: "5th semester student",
  Occupation_Instance: "Universitas Negeri Semarang",
  Interest:
    "the application of Artificial Intelligence in the context of Computer Security, ranging from malware detections to censorship",
};

export const ReformatAboutMe = (): AboutMe => {
  const aboutMeDescription = aboutMeData.Description.replace(
    "{Occupation}",
    aboutMeData.Occupation
  )
    .replace("{a(n)}", aboutMeData.a_n)
    .replace("{Occupation_Instance}", aboutMeData.Occupation_Instance)
    .replace("{Interest}", aboutMeData.Interest);

  return { ...aboutMeData, Description: aboutMeDescription };
};

aboutMeData = ReformatAboutMe();

export default aboutMeData;
