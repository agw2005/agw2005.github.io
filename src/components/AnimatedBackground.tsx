interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

const AnimatedBackground = ({ children }: AnimatedBackgroundProps) => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
      >
        <source src="/animated-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
