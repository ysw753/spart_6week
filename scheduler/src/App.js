import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Detail from "./components/detail/Detail";
import Join from "./components/login/Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/:id/main" element={<Main />} />
        <Route path="/:id/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
