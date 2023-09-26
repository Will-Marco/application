import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { graduationCapIcon } from "../constants";
import { Input } from "../ui";
import {
  loginUserFailure,
  loginUserStart,
  loginUserSuccess,
} from "../slice/auth";
import AuthService from "../service/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      console.log(response);
      dispatch(loginUserSuccess());
    } catch (error) {
      dispatch(loginUserFailure());
    }
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={graduationCapIcon} alt="" width="72" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

          <Input
            label={"Email address"}
            type={"email"}
            state={email}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
          />

          <button
            className="btn btn-primary w-100 mt-4 py-2"
            type="submit"
            disabled={isLoading}
            onClick={loginHandler}
          >
            {isLoading ? "loading..." : "Login"}
          </button>
        </form>
      </main>
    </div>
  );
};
export default Login;
