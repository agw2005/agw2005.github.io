import { Link } from "react-router";

interface NavPageButtonProps {
  children: string;
  url: string;
}

const NavPageButton = ({ children, url }: NavPageButtonProps) => {
  return (
    <Link to={url}>
      <button
        type="button"
        className="font-bold py-1 px-8 border-b-3 border-blue-400 bg-blue-800 text-white active:bg-blue-400 hover:bg-blue-600 rounded-b-2xl"
      >
        <p className="select-none">{children}</p>
      </button>
    </Link>
  );
};

export default NavPageButton;
