import React from "react";
import { useDispatch } from "react-redux";
import { resetDestination } from "../../Redux/slice/distinationSlice";
const ResetApp = () => {
  const resetDestinationAndCount = () => {
    dispatch(resetDestination());
  };

  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={() => dispatch(resetDestinationAndCount)}
      >
        Reset App
      </button>
    </div>
  );
};

export default ResetApp;
