interface NavButtonProps {
  children: string;
  url: string;
  focusNewTab?: boolean;
}

const NavButton = ({ children, url, focusNewTab = true }: NavButtonProps) => {
  const targetValue = focusNewTab ? "_blank" : "";
  return (
    <a href={url} target={targetValue}>
      <button
        type="button"
        className="font-bold py-1 px-8 border-b-3 border-blue-400 bg-blue-800 text-white active:bg-blue-400 hover:bg-blue-600 rounded-b-2xl"
      >
        <p className="select-none">{children}</p>
      </button>
    </a>
  );
};

export default NavButton;
