import TodoPage from "./components/TodoPage";
import { Container } from "./components/styles/Container.style";
import { GlobalStyles } from "./components/styles/Global";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <TodoPage />
    </Container>
  );
}

export default App;
