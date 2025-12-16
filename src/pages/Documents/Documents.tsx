import { useState } from "react";
import BinaryButton from "../../components/BinaryButton.tsx";

const Documents = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const prefix = "cert";
  const folderName = "My certification";
  const startingIndex = 1;
  const endingIndex = 5;

  const HandleBackButtonData = () => {
    currentIndex === startingIndex
      ? setCurrentIndex(currentIndex)
      : setCurrentIndex(currentIndex - 1);
  };
  const HandleNextButtonData = () => {
    currentIndex === endingIndex
      ? setCurrentIndex(currentIndex)
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-black">
      <div className="flex-1 flex gap-4 my-2 justify-center items-center">
        <BinaryButton clickPasser={HandleBackButtonData}>Back</BinaryButton>
        <h1 className="text-white font-bold text-2xl">
          {currentIndex} / {endingIndex}
        </h1>
        <BinaryButton clickPasser={HandleNextButtonData}>Next</BinaryButton>
      </div>
      <embed
        src={`${folderName}/${prefix}${currentIndex}.pdf`}
        type="application/pdf"
        className="flex-24"
      />
    </div>
  );
};

export default Documents;
