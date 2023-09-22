import { useState } from "react";
import { graduationCapIcon } from "../constants";
import { Input } from "../ui";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={graduationCapIcon} alt="" width="72" />
          <h1 class="h3 mb-3 fw-normal">Please register</h1>

          <Input
            label={"Username"}
            state={name}
            setState={setName}
          />
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

          <button className="btn btn-primary w-100 mt-4 py-2" type="submit">
          Register
          </button>
        </form>
      </main>
    </div>
  );
};
export default Register;
