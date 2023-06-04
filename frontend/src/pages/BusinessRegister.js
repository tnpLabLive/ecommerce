import axios from "axios";
import { useContext, useState } from "react";
import { userAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function BusinessRegister() {
  const navigate = useNavigate();
  
  const {setAuthData } = useContext(userAuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      setAuthData(data);
      if (data) {
        navigate("/dashboard");
      }
      setEmail("");
      setPassword("");
      console.log("data:", data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user", {
        name,
        email,
        password,
        role: "admin",
      });
      setAuthData(data);
      if (data) {
        navigate("/dashboard");
      }
      console.log("data:", data);
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.log("error:", error.message);
      alert("Not created Account");
    }
  };

  return (
    <div className="container">
      <h1>Business</h1>
      <div className="row bg-light p-3 mt-5">
        <div className="col-sm-6">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm-6">
          <h1>Create Account</h1>
          <form onSubmit={handleCreateAccount}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BusinessRegister;
