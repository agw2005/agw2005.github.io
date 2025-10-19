interface ImageWindowBorderProps {
  path: string;
  alt: string;
}

const ImageWindowBorder = ({ path, alt }: ImageWindowBorderProps) => {
  return (
    <div className="relative inline-block">
      <img src={path} alt={alt} className="relative z-10 rounded-xl w-full" />
      <div
        className={`absolute top-2 left-2 w-full h-full bg-blue-800 rounded-xl z-0`}
      ></div>
    </div>
  );
};

export default ImageWindowBorder;
