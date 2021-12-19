import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../index";

const Loader = () => {
  const isLoading = useSelector((state: RootState) => {
    return state.appReducer.loading;
  });

  if (!isLoading) return null;

  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loader;
