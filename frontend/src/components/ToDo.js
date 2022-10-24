import React, { useContext, useRef } from "react";
import { TodoContext } from "../Context/ToDoContext";
import Circle from "./Circle";

function ToDo({ data }) {
  const { deleteTodo } = useContext(TodoContext);
  const checkboxRef = useRef();

  return (
    <div
      style={{
        width: "540px",
        // height: "440px",
        borderRadius: "5px",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
      }}
    >
      <div
        style={{
          height: "40px",
          padding: "24px",
          border: "1px #E3E4F1 solid",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <Circle /> */}
        <input ref={checkboxRef} type="checkbox" id={data._id} />
        <label
          style={{
            color: "#494C6B",
            fontWeight: "normal",
            marginLeft: "34px",
          }}
          for={data._id}
        >
          {data.name}
        </label>
      </div>

      {/* <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #E3E4F1",
          borderBottom: "5px",
          paddingLeft: "25px",
          paddingRight: "25px",
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      > */}
      {/* <div
        //   style={{
        //     border: "1px solid red",
        //   }}
        >
          <p
            style={{
              fontSize: "12px",
            }}
          >
            5 items left
          </p>
        </div>
        <div
          style={{
            // border: "1px solid red",
            width: "166px",
            height: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              fontSize: "12px",
              color: "#9495A5",
              "&:hover": {
                color: "#3A7CFD",
              },
            }}
          >
            All
          </h3>
          <h3
            style={{
              fontSize: "12px",
              color: "#9495A5",
              "&:hover": {
                color: "#3A7CFD",
              },
            }}
          >
            Active
          </h3>
          <h3
            style={{
              fontSize: "12px",
              color: "#9495A5",
              "&:hover": {
                color: "#3A7CFD",
              },
            }}
          >
            Completed
          </h3>
        </div>
        <div
        //   style={{
        //     border: "1px solid red",
        //   }}
        >
          <p
            style={{
              fontSize: "12px",
            }}
          >
            Clear Completed
          </p>
        </div>
      </div>*/}
    </div>
  );
}

export default ToDo;
