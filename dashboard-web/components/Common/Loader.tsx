// @ts-nocheck
import { ThreeDots } from "react-loader-spinner";
const Loader = (props) => {
  return (
    <ThreeDots
      height="60"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName={props.className}
      visible={true}
    />
  );
};

export default Loader;
