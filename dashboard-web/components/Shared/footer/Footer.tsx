import { AiFillSetting, AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer flex justify-between">
      <div className="flex justify-start">
        <div>
          <button>
            <Link to="/">
              <AiFillHome size={30} />
            </Link>
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <div>
          <button>
            <Link to="/settings">
              <AiFillSetting size={30} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
