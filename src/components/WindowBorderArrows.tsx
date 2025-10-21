import BinaryButton from "./BinaryButton";
import CloseWindow from "./CloseWindow";
import MinimizeWindow from "./MinimizeWindow";
import RestoreWindow from "./RestoreWindow";

interface WindowBorderArrowsProps {
  title: string;
  children: string;
}

const WindowBorderArrows = ({ children, title }: WindowBorderArrowsProps) => {
  return (
    <div>
      <div className="bg-blue-500 w-full p-1 rounded-t-md px-2 flex justify-between items-center">
        <p className="select-none font-bold tracking-widest text-white">
          {title}
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
              <BinaryButton>Back</BinaryButton>
              <BinaryButton>Next</BinaryButton>
            </div>
            <div className="border-4 border-blue-200 rounded-xl p-2 text-justify">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowBorderArrows;
