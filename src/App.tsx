import aboutMeData from "./assets/Data/AboutMe.ts";
import EmbedWindowBorderArrows from "./components/EmbedWindowBorderArrows.tsx";
import ImageWindowBorder from "./components/ImageWindowBorder.tsx";
import ImageWindowBorderArrows from "./components/ImageWindowBorderArrows.tsx";
import MainLayout from "./components/MainLayout.tsx";
import NavButton from "./components/NavButton.tsx";
import WindowBorder from "./components/WindowBorder.tsx";
import WindowBorderArrows from "./components/WindowBorderArrows.tsx";
import {
  myAIStackData,
  myDesktopStackData,
  myIoTStackData,
  myOtherStackData,
  myWebStackData,
} from "./assets/Data/myStack.ts";
import IterateStacks from "./components/IterateStacks.tsx";

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
        <NavButton focusNewTab={false} url="#">
          Resume (Not ready)
        </NavButton>
        <NavButton focusNewTab={false} url="#">
          Publication (Not ready)
        </NavButton>
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
              <ImageWindowBorder path="person.jpg" alt="A picture of me" />
              <WindowBorderArrows
                title="Title"
                prefix="some_data"
                startingIndex={1}
                endingIndex={8}
              />
              <ImageWindowBorderArrows
                title="My cat"
                folderName="My cats"
                alt="A picture of my cat"
                prefix="cat"
                startingIndex={1}
                endingIndex={8}
                imageExtension="jpg"
              />
            </>
          }
          middle={
            <>
              <WindowBorder title={aboutMeData.Title}>
                {aboutMeData.Description}
              </WindowBorder>

              <WindowBorder title="Title">
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
              </WindowBorder>

              <WindowBorder title="Title">
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
              </WindowBorder>

              <EmbedWindowBorderArrows
                title="Certification"
                folderName="My certification"
                prefix="cert"
                startingIndex={1}
                endingIndex={5}
              />
            </>
          }
          right={
            <>
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
