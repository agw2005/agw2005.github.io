import aboutMeData from "./assets/Data/AboutMe.ts";
import ImageWindowBorderArrows from "./components/ImageWindowBorderArrows.tsx";
import MainLayout from "./components/MainLayout.tsx";
import NavButton from "./components/NavButton.tsx";
import WindowBorder from "./components/WindowBorder.tsx";
import {
  myAIStackData,
  myDesktopStackData,
  myIoTStackData,
  myOtherStackData,
  myWebStackData,
} from "./assets/Data/MyStacks.ts";
import IterateStacks from "./components/IterateStacks.tsx";
import NavPageButton from "./components/NavPageButton.tsx";

function App() {
  const IS_DEBUGGING = false;
  const DEBUG_MAIN_BORDER_COLOR = "black";

  return (
    <div className="my-64">
      <h1 className="text-6xl text-center mb-8 font-extrabold text-white tracking-wider">
        Danial Al Ghazali Walangadi
      </h1>
      <div className="flex justify-center mx-[25rem]">
        <hr className="w-full h-2 bg-white" />
      </div>
      <nav className="flex gap-8 justify-center mb-4">
        <NavButton url="https://agw2005.github.io">Home</NavButton>
        <NavPageButton url="/resume">Resume</NavPageButton>
        <NavPageButton url="documents">Documents</NavPageButton>
        <NavButton url="https://www.linkedin.com/in/agw2005/">
          LinkedIn
        </NavButton>
        <NavButton url="https://github.com/agw2005">Github</NavButton>
      </nav>
      <div
        className={`${
          IS_DEBUGGING ? `border-${DEBUG_MAIN_BORDER_COLOR} border-2` : ""
        } mx-96`}
      >
        <MainLayout
          border={IS_DEBUGGING}
          left={
            <>
              <ImageWindowBorderArrows
                title="My cat"
                folderName="My cats"
                alt="A picture of my cat"
                prefix="cat"
                startingIndex={1}
                endingIndex={8}
                imageExtension="jpg"
              />
              <IterateStacks
                StackTitle={myWebStackData.Title}
                StackDescription={myWebStackData.Description}
                StackData={myWebStackData.Items}
              />

              <IterateStacks
                StackTitle={myAIStackData.Title}
                StackDescription={myAIStackData.Description}
                StackData={myAIStackData.Items}
              />
            </>
          }
          middle={
            <>
              <WindowBorder title={aboutMeData.Title}>
                {aboutMeData.Description}
              </WindowBorder>

              <WindowBorder title="Project - License Plate Extractor">
                <p className="mb-2">
                  This project employs CRNN architecture where CNN extracts
                  image features, and RNN processes them as sequences, followed
                  by a fully connected layer mapping outputs to character
                  classes. Combined with YOLO for license plate detection, the
                  model focuses on the plate region to recognize text.
                  Implemented in PyTorch on Kaggle's GPU environment, it uses
                  1,526 training and 169 evaluation samples from various
                  synthetic and real datasets (Indonesian, LPC-DOCR, Polish, and
                  European License Plates).
                </p>
                <img
                  src="License Plate Extractor\lpr.png"
                  alt="snippet of the project"
                />
              </WindowBorder>

              <WindowBorder title="Project - Reproduction of EDSR">
                <p className="mb-2">
                  This project aims to replicate a state-of-the-art super
                  resolution model called Enhanced Deep Super-Resolution Network
                  (EDSR), intended to improve the quality of low-resolution
                  images. EDSR is an advancement of SRResNet that removes batch
                  normalization layers to prevent feature distortion and
                  maintain stability. The implementation was developed in
                  PyTorch and trained using the DIV2K dataset and the Image
                  Super Resolution dataset by Aditya Chandrasekhar (Kaggle
                  dataset). Because the DIV2K dataset only provides
                  high-resolution (HR) images, the implementation included a
                  custom DIV2KDataset class that generates low-resolution (LR)
                  pairs on-the-fly using bicubic downsampling. The model was
                  measured using Peak Signal-to-Noise Ratio (PSNR) and
                  Structural Similarity Index (SSIM).
                </p>
                <img src="EDSR\edsr.png" alt="snippet of the project" />
              </WindowBorder>

              <WindowBorder title="Project - Ngiprit Money">
                <p className="mb-2">
                  Ngiprit Money is a web application that serves as a
                  multi-tenant ledger interface for tracking transactions,
                  debts, and receivables. It is developed using Laravel with
                  React. The project utilizes InertiaJS for routings and form
                  submissions. Additionally, it also uses Shadcn/UI for
                  streamlined styling of React components. The web application
                  is not currently deployed due to monetary constraints, but the
                  project is available for anyone to deploy under the AGPL-3.0
                  license. Thanks to Laravel's ORM (Eloquent), the application
                  supports multiple databases, including SQLite, MySQL, and
                  PostgreSQL.
                </p>
                <img src="Ngiprit\ngiprit.png" alt="snippet of the project" />
              </WindowBorder>
            </>
          }
          right={
            <>

              <IterateStacks
                StackTitle={myDesktopStackData.Title}
                StackDescription={myDesktopStackData.Description}
                StackData={myDesktopStackData.Items}
              />

              <IterateStacks
                StackTitle={myIoTStackData.Title}
                StackDescription={myIoTStackData.Description}
                StackData={myIoTStackData.Items}
              />

              <IterateStacks
                StackTitle={myOtherStackData.Title}
                StackDescription={myOtherStackData.Description}
                StackData={myOtherStackData.Items}
              />
            </>
          }
        >
        </MainLayout>
      </div>
    </div>
  );
}

export default App;
