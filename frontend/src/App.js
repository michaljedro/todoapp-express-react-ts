import { TodoProvider } from "./Context/ToDoContext";
import { ThemeStore } from "./Context/ThemeStore";
import Theme from "./styles/Global";
import ToDoForm from "./components/ToDoForm";
import { AplicationStyled } from "./styles/TodoForm.styled";
import Footer from "./components/Footer";
import { Container } from "./styles/App.styled";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeStore";
function App() {
  return (
    <ThemeStore>
      <Theme>
        <TodoProvider>
          <Container>
            <AplicationStyled>
              <ToDoForm />
            </AplicationStyled>
            <Footer />
          </Container>
        </TodoProvider>
      </Theme>
    </ThemeStore>
  );
}

export default App;
