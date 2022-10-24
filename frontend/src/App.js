import { TodoContext, TodoProvider } from "./Context/ToDoContext";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import { AplicationStyled } from "./styles/TodoForm.styled";
import Footer from "./components/Footer";
function App() {
  // const [userInput, setUserInput] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addTask(userInput);
  //   setUserInput("");
  // };
  // const addTask = (userInput) => {
  //   let copy = [...toDoList];
  //   copy = [
  //     ...copy,
  //     { id: toDoList.length + 1, task: userInput, complete: false },
  //   ];
  //   setToDoList(copy);
  // };
  // const handleToggle = (id) => {
  //   console.log(id);
  //   let mapped = toDoList.map((task) => {
  //     return task.id === id
  //       ? { ...task, complete: !task.complete }
  //       : { ...task };
  //   });
  //   setToDoList(mapped);
  // };
  // const handleFilter = () => {
  //   let filtered = toDoList.filter((task) => {
  //     return !task.complete;
  //   });
  //   setToDoList(filtered);
  // };
  // const handleChange = (e) => {
  //   setUserInput(e.currentTarget.value);
  // };
  // let value = {
  //   toDoList,
  //   handleToggle,
  //   handleFilter,
  //   userInput,
  //   handleChange,
  //   handleSubmit,
  // };
  const theme = {
    colors: {
      light: "#FAFAFA",
      dark: "#171823",
      active: "#3A7CFD",
      grey: "#9495A5",
    },
    tablet: "992px",
    mobile: "576px",
  };
  return (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <GlobalStyles />
        <div
          style={{
            height: "100vh",
            backgroundColor: "#FAFAFA",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <AplicationStyled>
            <ToDoForm />
          </AplicationStyled>
          <Footer />
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
