import React from "react";
import { FaCheck } from "react-icons/fa";
function Circle() {
  return (
    <div
      style={{
        border: "1px solid #E3E4F1",
        height: "24px",
        width: "24px",
        borderRadius: "50%",
        background: "#6B9DF6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <FaCheck /> */}

      <span
        style={{
          color: " white",
        }}
      >
        &#10003;
      </span>
    </div>
  );
}

export default Circle;
