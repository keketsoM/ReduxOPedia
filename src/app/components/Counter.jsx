import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementMultiplier,
  increment,
  incrementMultiplier,
} from "../../Redux/slice/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterStore.count);
  const [multiplier, setMultiplier] = useState(10);
  return (
    <div
      className="mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Counter: {counter}</div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <div
              className="mb-2"
              style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}
            >
              Basic Counter
            </div>
            <div className="row">
              <div className="col-6">
                <button
                  className="btn btn-primary form-control "
                  onClick={() => {
                    dispatch(increment());
                  }}
                >
                  Add
                </button>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-danger form-control"
                  onClick={() => {
                    dispatch(decrement());
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <div
              className="mb-2"
              style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}
            >
              Multiplier Counter
            </div>
            <div className="row">
              <div className="col-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter number to add..."
                  value={multiplier}
                  onChange={(e) => setMultiplier(e.target.value.trim())}
                ></input>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-primary form-control"
                  onClick={() => {
                    dispatch(incrementMultiplier(multiplier));
                  }}
                >
                  Add
                </button>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-danger form-control"
                  onClick={() => {
                    dispatch(decrementMultiplier(multiplier));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
