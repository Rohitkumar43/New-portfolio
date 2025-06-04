const AnimatedBackground = () => {
  return (
    <>
      <div className="animated-background" />
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;
