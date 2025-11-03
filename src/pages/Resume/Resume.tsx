const Resume = () => {
  const filename = "resume";

  return (
    <embed
      src={`${filename}.pdf`}
      type="application/pdf"
      className="w-screen h-screen"
    />
  );
};

export default Resume;
