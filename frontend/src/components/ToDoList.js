import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDo from "./ToDo";
function ToDoList() {
  const { todoList, deleteTodo } = useContext(TodoContext);
  // const [todo, setTodo] = useState(data);
  console.log(todoList?.length);
  return (
    <div
      style={{
        display: "block",
        // justifyContent: "center",
        // marginTop: "24px",
        borderRadius: "5px",
      }}
    >
      {todoList &&
        todoList.map((todo) => (
          <ToDo key={`todo_item-${todo._id}`} data={todo} />
        ))}
      <div
        className="btn-group"
        style={{
          backgroundColor: "coral",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{todoList?.length} items left</span>
        <div>
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>

        <button>Clear Completed</button>
      </div>
    </div>

    // <div>
    //   <div>
    //     {todo?.map((item, index) => {
    //       const { id, task, complete } = item;
    //       return (
    //         <div key={index} className={complete ? "strike" : ""}>
    //           <h1>{task}</h1>
    //           {/* <button onClick={() => handleToggle(id)}>Change status</button> */}
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <div style={{ margin: "10px" }}>
    //     {/* <button onClick={handleFilter}>Clear completed</button> */}
    //   </div>
    // </div>
  );
}

export default ToDoList;
