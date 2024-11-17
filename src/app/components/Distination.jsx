import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { destinationClicked } from "../../Redux/slice/distinationSlice";

const Distination = () => {
  const destinationList = useSelector(
    (state) => state.destinationStore.destination
  );

  const dispatch = useDispatch();

  return destinationList.map((destination, Index) => {
    return (
      <div
        className="text-center text-white row"
        style={{ borderBottom: "1px solid #333" }}
        key={Index}
      >
        <div className="col-8 col-md-3 offset-md-3 pt-2">
          {destination.name}
        </div>

        <div className="col-4 col-md-2">
          <button
            className="btn btn-success form-control m-1"
            onClick={() => dispatch(destinationClicked(destination))}
          >
            Detail
          </button>
        </div>
      </div>
    );
  });
};

export default Distination;
