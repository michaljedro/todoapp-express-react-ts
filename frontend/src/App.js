import { TodoProvider } from "./Context/ToDoContext";
import { ThemeStore } from "./Context/ThemeStore";
import Theme from "./styles/Global";
import ToDoForm from "./components/ToDoForm";
import Footer from "./components/Footer";
import { useContext } from "react";
import { Container } from "./styles/App.styled";
import { ThemeContext } from "./Context/ThemeStore";
function App() {
  return (
    <ThemeStore>
      <Theme>
        <TodoProvider>
          <Container>
            <ToDoForm />
            <Footer />
          </Container>
        </TodoProvider>
      </Theme>
    </ThemeStore>
  );
}

export default App;
