import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../index";

const ErrorAlert = () => {
  const errorText = useSelector((state: RootState) => {
    return state.appReducer.error;
  });

  return (
    <Alert className="mt-4" variant="danger">
      {errorText}
    </Alert>
  );
};

export default ErrorAlert;
