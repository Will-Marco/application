import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ValidationError } from "./";
import { graduationCapIcon } from "../constants";
import { Input } from "../ui";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      dispatch(signUserSuccess(response.user));
      navigate("/")
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={graduationCapIcon} alt="" width="72" />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <ValidationError />
          <Input label={"Username"} state={name} setState={setName} />
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
            onClick={registerHandler}
          >
            {isLoading ? "Please wait..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};
export default Register;
