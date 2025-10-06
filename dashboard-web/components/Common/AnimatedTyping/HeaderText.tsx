
import { TypeAnimation } from "react-type-animation";

const AnimatedHeader = ({message}) => {
  return (
    <TypeAnimation
      className="leading-relaxed tracking-tighter font-bold text-center"
      style={{
        whiteSpace: "pre-line",
      }}
      sequence={[message, 5000, "", 1000]}
      speed={4}
      wrapper="h1"
      repeat={Infinity}
    />
  );
};

export default AnimatedHeader;
