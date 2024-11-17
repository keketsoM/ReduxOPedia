import React from "react";
import { useSelector } from "react-redux";
const DestinationFact = () => {
  const destinationSelected = useSelector(
    (state) => state.destinationStore.destinationSelected
  );
  if (destinationSelected == undefined) {
    return (
      <div className="text-center pt-4 text-warning">Select a destination</div>
    );
  } else {
    return (
      <div className="text-center text-white border p-3 m-3">
        <h4 className="text-success">{destinationSelected.name}</h4>
        Days Recommened: {destinationSelected.days} <br />
        Fun Fact: {destinationSelected.fact}
      </div>
    );
  }
};

export default DestinationFact;
