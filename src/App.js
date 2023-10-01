import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Main, Login, Register, Navbar } from "./components";
import AuthService from "./service/auth";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/persistence-storange";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) getUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
