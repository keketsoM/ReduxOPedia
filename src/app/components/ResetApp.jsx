import React from "react";
import { useDispatch } from "react-redux";
import { resetReduxOPedia } from "../../Redux/action/actions";
const ResetApp = () => {
  const resetDestinationAndCount = () => {
    dispatch(resetReduxOPedia())
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
