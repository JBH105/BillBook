import React, { useState } from "react";
// import "./Tooltip.css";

const Error = (props) => {
  return (
    <div className="Tooltip-Wrapper w-full">
      {/* Wrapping */}
      {/* {props.children} */}
      {props.active && (
        <div
          className={`Tooltip-Tip ${props.direction || "top"}`}
          style={{
            whiteSpace: "normal",
            width: "90%",
            background: "#f9d6d6",
            color: "#ff2500",
          }}
        >
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Error;
