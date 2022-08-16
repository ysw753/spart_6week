import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Detail from "./components/detail/Detail";
import Join from "./components/login/Join";
import { useContext, useEffect } from "react";
import AuthContext from "./contextStore/auth-context";
import WeekDetail from "./components/detail/WeekDetail";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        {/* <Route path="/detail" element={<Detail />} /> */}
        {/* <Route path="/:id/main" element={<Main />} /> */}
        {authCtx.isLoggedIn && <Route path="/detail" element={<Detail />} />}
        {/* {authCtx.isLoggedIn && (
          <Route path="/weekdetail" element={<WeekDetail />} />
        )} */}
        <Route path="/weekdetail" element={<WeekDetail />}/>
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
