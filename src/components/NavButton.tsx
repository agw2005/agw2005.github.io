interface NavButtonProps {
  children: string;
  url: string;
  focusNewTab: boolean;
}

const NavButton = ({ children, url, focusNewTab }: NavButtonProps) => {
  const targetValue = focusNewTab ? "_blank" : "";
  return (
    <a href={url} target={targetValue}>
      <button className="font-bold py-1 px-8 border-b-3 border-blue-800 bg-blue-400 text-black active:bg-blue-500 hover:bg-blue-200 rounded-b-2xl">
        <p className="select-none">{children}</p>
      </button>
    </a>
  );
};

export default NavButton;
