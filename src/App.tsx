import ImageWindowBorder from "./components/ImageWindowBorder";
import MainLayout from "./components/MainLayout";
import NavButton from "./components/NavButton";
import WindowBorder from "./components/WindowBorder";

function App() {
  const IS_DEBUGGING = false;
  const DEBUG_MAIN_BORDER_COLOR = "black";
  return (
    <div className="my-16">
      <h1 className="text-6xl text-center mb-8">Danial Al Ghazali Walangadi</h1>
      <div className="flex justify-center mx-[25rem]">
        <hr className="w-full h-[3px] bg-black" />
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
              <ImageWindowBorder
                path="public\person.jpg"
                alt="danial_al-ghazali_walangadi.png"
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
          middle={
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
            </>
          }
        ></MainLayout>
      </div>
    </div>
  );
}

export default App;
