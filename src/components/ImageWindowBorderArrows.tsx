import { useEffect, useState } from "react";
import BinaryButton from "./BinaryButton.tsx";
import CloseWindow from "./CloseWindow.tsx";
import MinimizeWindow from "./MinimizeWindow.tsx";
import RestoreWindow from "./RestoreWindow.tsx";

interface ImageWindowBorderArrowsProps {
  title: string;
  folderName: string;
  alt: string;
  prefix: string;
  startingIndex: number;
  endingIndex: number;
  imageExtension: string;
}

const ImageWindowBorderArrows = ({
  title,
  folderName,
  alt,
  prefix,
  startingIndex,
  endingIndex,
  imageExtension,
}: ImageWindowBorderArrowsProps) => {
  const [pageIndex, setPageIndex] = useState(startingIndex);
  const HandleBackButtonData = () => {
    if (pageIndex > startingIndex) setPageIndex(pageIndex - 1);
  };
  const HandleNextButtonData = () => {
    if (pageIndex < endingIndex) setPageIndex(pageIndex + 1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = src;
  };

  useEffect(() => {
    for (let i = startingIndex; i <= endingIndex; i++) {
      preloadImage(`${folderName}/${prefix}${i}.${imageExtension}`);
    }
  }, []);

  return (
    <div>
      <div className="bg-blue-500 w-full p-1 rounded-t-md px-2 flex justify-between items-center">
        <p className="select-none font-bold tracking-widest text-white">
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
        >
        </div>
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
            <img
              src={`${folderName}/${prefix}${pageIndex}.${imageExtension}`}
              alt={`${alt} (${pageIndex})`}
              onClick={toggleModal}
              className="z-10 border-4 border-blue-200 rounded-xl w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div className="relative">
            <img
              src={`${folderName}/${prefix}${pageIndex}.${imageExtension}`}
              alt={`${alt} (${pageIndex}) zoomed`}
              className="max-w-[90vw] max-h-[90vh] rounded-lg border-4 border-blue-300 shadow-2xl transform scale-105 transition-transform"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWindowBorderArrows;
