import { TypeAnimation } from "react-type-animation";

const BodyText = ({ message="", sequence=[message, 5000], repeat=false, cursor=false, className = "" }) => {
    const repeatCount = repeat ? Infinity : 0;

    return (
        <TypeAnimation
            className={className}
            sequence={sequence}
            speed={1}
            wrapper="div"
            cursor={cursor}
            repeat={repeatCount}
        />
    );
};

export default BodyText;
