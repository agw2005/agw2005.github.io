const TranscriptEnglish = () => {
  const filename = "transcript-english";

  return (
    <embed
      src={`${filename}.pdf`}
      type="application/pdf"
      className="w-screen h-screen"
    />
  );
};

export default TranscriptEnglish;
