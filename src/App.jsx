import { Routes, Route } from "react-router-dom";
import RegisterForm from "./pages/Register";
import LoginForm from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};

export default App;
