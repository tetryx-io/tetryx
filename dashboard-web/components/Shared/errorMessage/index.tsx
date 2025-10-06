import { Fragment } from "react";
// import "./index.scss";

interface IErrorMessage {
  errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: IErrorMessage) => {
  return (
    <Fragment>
      <div className="error-message-model">
        <div className="_container">
          <div className="header m-2">{"Error Message :"}</div>
          <div className="body ml-4">{errorMessage}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorMessage;
