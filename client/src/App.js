import TodoPage from "./pages/TodoPage";
import { Container } from "./components/styles/Container.style";
import { GlobalStyles } from "./components/styles/Global";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import UserPage from "./pages/UserPage";
import { AuthContextProvider } from "./context";
import 'react-toastify/dist/ReactToastify.css';
import Protected from "./components/Protected";

function App() {
  return (
    <Router>
      <Container>
        <GlobalStyles />
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Protected><TodoPage /></Protected>}/>
            <Route path="/login" element={<UserPage />} />
            <Route path="/signup" element={<UserPage isSignUp />} />
          </Routes>
        </AuthContextProvider>
      </Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </Router>
  );
}

export default App;
