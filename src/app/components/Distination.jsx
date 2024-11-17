import React from "react";
import { useSelector } from "react-redux";

const Distination = () => {
  const destinationList = useSelector(
    (state) => state.destinationStore.destination
  );
  console.log(destinationList);
  
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
          <button className="btn btn-success form-control m-1">Detail</button>
        </div>
      </div>
    );
  });
};

export default Distination;
