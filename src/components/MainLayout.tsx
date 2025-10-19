interface MainLayoutProps {
  left: React.ReactNode;
  middle: React.ReactNode;
  right: React.ReactNode;
  border?: boolean;
}

const MainLayout = ({
  left,
  middle,
  right,
  border = false,
}: MainLayoutProps) => {
  const showBorder = border ? "border-2" : "border-0"; // toggle border on/off

  return (
    <main className="flex justify-center">
      <div
        className={`flex-1 border-red-500 ${showBorder} p-4 flex flex-col gap-8`}
      >
        {left}
      </div>
      <div
        className={`flex-2 border-green-500 ${showBorder} p-4 flex flex-col gap-8`}
      >
        {middle}
      </div>
      <div
        className={`flex-1 border-blue-500 ${showBorder} p-4 flex flex-col gap-8`}
      >
        {right}
      </div>
    </main>
  );
};

export default MainLayout;
