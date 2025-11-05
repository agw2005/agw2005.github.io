import { useState } from "react";
import BinaryButton from "./BinaryButton.tsx";
import CloseWindow from "./CloseWindow.tsx";
import MinimizeWindow from "./MinimizeWindow.tsx";
import RestoreWindow from "./RestoreWindow.tsx";
import { myOpinions } from "../assets/Data/MyOpinion.ts";

interface WindowBorderArrowsProps {
  title: string;
  prefix: string;
  startingIndex: number;
  endingIndex: number;
}

const WindowBorderArrows = ({
  title,
  prefix,
  startingIndex,
  endingIndex,
}: WindowBorderArrowsProps) => {
  const [pageIndex, setPageIndex] = useState(1);
  const HandleBackButtonData = () => {
    pageIndex === startingIndex
      ? setPageIndex(pageIndex)
      : setPageIndex(pageIndex - 1);
  };
  const HandleNextButtonData = () => {
    pageIndex === endingIndex
      ? setPageIndex(pageIndex)
      : setPageIndex(pageIndex + 1);
  };
  return (
    <div>
      <div className="bg-blue-500 w-full p-1 rounded-t-md px-2 flex justify-between items-center">
        <p className="select-none font-bold  text-white">
          {title} ({pageIndex}/{endingIndex})
        </p>
        <div className="flex gap-1 h-full">
          <MinimizeWindow />
          <RestoreWindow />
          <CloseWindow />
        </div>
      </div>

      <div className="relative w-full">
        <div
          className={`absolute top-2 left-2 w-full h-full rounded-md bg-blue-800 z-0`}
        ></div>
        <div
          className={`text-sm relative z-10 border border-blue-500 shadow-lg w-full p-1 bg-white rounded-b-md px-2`}
        >
          <div className="px-2 py-2">
            <div className="flex gap-2 mb-4 justify-center">
              <BinaryButton clickPasser={HandleBackButtonData}>
                Back
              </BinaryButton>
              <BinaryButton clickPasser={HandleNextButtonData}>
                Next
              </BinaryButton>
            </div>
            <div className="border-4 border-blue-200 rounded-xl p-2 text-justify">
              {myOpinions[pageIndex - 1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowBorderArrows;
