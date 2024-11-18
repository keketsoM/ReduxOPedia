import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Counter from "./app/components/Counter";
import Distination from "./app/components/Distination";
import Header from "./app/layout/Header";
import DestinationFact from "./app/components/DestinationFact";
import ResetApp from "./app/components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <ResetApp/>
      <Counter />
      <div className="border text-center">
        <div
          className="mb-2"
          style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}
        >
          Distination List
        </div>
        <Distination />
      </div>
      <DestinationFact/>
    </Provider>
  </React.StrictMode>
);
