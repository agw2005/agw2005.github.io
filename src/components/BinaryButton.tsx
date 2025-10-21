interface BinaryButtonProps {
  children: string;
  clickPasser: () => void;
}

const BinaryButton = ({ children, clickPasser }: BinaryButtonProps) => {
  const handleClick = () => {
    clickPasser();
  };

  return (
    <button onClick={handleClick}>
      <div className="border-2 p-4 font-extrabold h-6 aspect-square flex items-center justify-center select-none border-blue-400 bg-blue-800 text-white active:bg-blue-400 hover:bg-blue-600 rounded-lg">
        {children}
      </div>
    </button>
  );
};

export default BinaryButton;
