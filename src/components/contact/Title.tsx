import React from "react";
import { LiaHandPointDown } from "react-icons/lia";
import { useResize } from "../../hooks/useResize";

const Title = () => {
  const screen = useResize();
  return (
    <div
      className={`container-60 mx-auto py-5 ${
        screen > 500 ? "" : "text-center"
      }`}
    >
      <h3 className="blue">CONTACT</h3>
      <span className="subtitle">
        Don't be shy! Hit me up! <LiaHandPointDown className="text-success" />
      </span>
    </div>
  );
};

export default Title;
