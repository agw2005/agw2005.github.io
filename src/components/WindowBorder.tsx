import CloseWindow from "./CloseWindow.tsx";
import MinimizeWindow from "./MinimizeWindow.tsx";
import RestoreWindow from "./RestoreWindow.tsx";

interface WindowBorderProps {
  title: string;
  children: string;
}

const WindowBorder = ({ children, title }: WindowBorderProps) => {
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
        >
        </div>
        <div
          className={`text-sm relative z-10 border border-blue-500 shadow-lg w-full p-2 bg-white rounded-b-md text-justify`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default WindowBorder;
