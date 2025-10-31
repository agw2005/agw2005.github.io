export interface StackItem {
  Key: string;
  Value: string[];
}

interface Stack {
  Title: string;
  Description?: string;
  Items: StackItem[];
}

export let myWebStackData: Stack = {
  Title: "Web Stack",
  Description: "Web Development",
  Items: [
    {
      Key: "Frontend",
      Value: ["React", "TailwindCSS"],
    },
    {
      Key: "Backend",
      Value: ["Laravel", "InertiaJS"],
    },
    {
      Key: "Database",
      Value: ["SQLite", "PostgreSQL"],
    },
    {
      Key: "Deployment",
      Value: [
        "Debian",
        "Nginx",
        "Digital Ocean",
        "Cloudflare Pages",
        "Github Pages",
        "Laravel Cloud",
      ],
    },
  ],
};

export let myAIStackData: Stack = {
  Title: "AI/ML Stack",
  Description: "AI/ML",
  Items: [
    {
      Key: "Framework",
      Value: ["PyTorch", "Scikit Learn"],
    },
    {
      Key: "Library",
      Value: ["Numpy", "Pandas", "PIL", "Matplotlib", "OpenCV"],
    },
    {
      Key: "Environment",
      Value: ["Kaggle", "Google Colab", "Chameleon Cloud"],
    },
    {
      Key: "Other",
      Value: ["YOLO", "Gemini API", "Llama API"],
    },
  ],
};

export let myDesktopStackData: Stack = {
  Title: "Desktop Stack",
  Description: "Desktop Application",
  Items: [
    {
      Key: "Framework",
      Value: ["Tauri"],
    },
    {
      Key: "Language",
      Value: ["Typescript", "Rust"],
    },
    {
      Key: "Database",
      Value: ["SQLite"],
    },
  ],
};

export let myIoTStackData: Stack = {
  Title: "IoT Stack",
  Description: "Internet of Things",
  Items: [
    {
      Key: "Board",
      Value: ["Arduino Nano", "ESP32", "OrangePi Zero 3"],
    },
    {
      Key: "OS",
      Value: ["Armbian"],
    },
    {
      Key: "Library",
      Value: ["Universal Telegram Bot"],
    },
  ],
};

export let myOtherStackData: Stack = {
  Title: "Other Stack",
  Items: [
    {
      Key: "Document",
      Value: ["Markdown", "Latex"],
    },
    {
      Key: "Encryption",
      Value: ["RSA", "Laravel's Bcrypt"],
    },
    {
      Key: "Language",
      Value: [
        "Python",
        "JavaScript",
        "TypeScript",
        "C++",
        "Rust",
        "Bash",
        "PowerShell",
      ],
    },
    {
      Key: "Library",
      Value: [
        "Eigen (CPP)",
        "ExpressJS (TS)",
        "Winston (TS)",
        "Chai (TS)",
        "Nyc (TS)",
        "Mocha (TS)",
        "Supertest (TS)",
        "Shutil (Py)",
        "Pathlib (Py)",
        "Sqlx (Rs)",
      ],
    },
    {
      Key: "JS Runtime",
      Value: ["NodeJS", "Deno"],
    },
  ],
};

// export const WebStack = (): Stack => {
//   return myWebStackData;
// };

// export const AIStack = (): Stack => {
//   return myAIStackData;
// };

// export const DesktopStack = (): Stack => {
//   return myDesktopStackData;
// };

// export const IoTStack = (): Stack => {
//   return myIoTStackData;
// };

// export const OtherStack = (): Stack => {
//   return myOtherStackData;
// };
