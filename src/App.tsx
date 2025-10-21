import aboutMeData from "./assets/Data/AboutMe";
import EmbedWindowBorderArrows from "./components/EmbedWindowBorderArrows";
import ImageWindowBorder from "./components/ImageWindowBorder";
import ImageWindowBorderArrows from "./components/ImageWindowBorderArrows";
import MainLayout from "./components/MainLayout";
import NavButton from "./components/NavButton";
import WindowBorder from "./components/WindowBorder";
import WindowBorderArrows from "./components/WindowBorderArrows";

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
        <NavButton focusNewTab={true} url="https://agw2005.github.io">
          Home
        </NavButton>
        <NavButton focusNewTab={false} url="#">
          Resume (Not ready)
        </NavButton>
        <NavButton focusNewTab={false} url="#">
          Publication (Not ready)
        </NavButton>
        <NavButton
          focusNewTab={true}
          url="https://www.linkedin.com/in/agw2005/"
        >
          LinkedIn
        </NavButton>
        <NavButton focusNewTab={true} url="https://github.com/agw2005">
          Github
        </NavButton>
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
              <WindowBorderArrows title="Title">
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                Dolor Sit Amet
              </WindowBorderArrows>
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

              <EmbedWindowBorderArrows
                title="Certification"
                folderName="My certification"
                prefix="cert"
                startingIndex={1}
                endingIndex={5}
              />

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
            </>
          }
          right={
            <>
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
            </>
          }
        ></MainLayout>
      </div>
    </div>
  );
}

export default App;
