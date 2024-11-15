import React from "react";
import ReactImage from "../../Images/React.png";

const Header = () => {
  return (
    <div className="pt-3 pl-2">
      <img
        src={ReactImage}
        style={{ height: "35px", verticalAlign: "top" }}
        alt="React"
      />
      <span className="h2 pt-4 text-white-50">React Course - ReduxOPedia</span>
    </div>
  );
};

export default Header;
