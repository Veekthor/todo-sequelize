import TodoPage from "./pages/TodoPage";
import { Container } from "./components/styles/Container.style";
import { GlobalStyles } from "./components/styles/Global";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import { AuthContextProvider } from "./context";

function App() {
  return (
    <Router>
      <Container>
        <GlobalStyles />
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/login" element={<UserPage />} />
            <Route path="/signup" element={<UserPage isSignUp />} />
          </Routes>
        </AuthContextProvider>
      </Container>
    </Router>
  );
}

export default App;
