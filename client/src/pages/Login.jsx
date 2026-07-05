import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );
    console.log(response.data); 
    

    localStorage.setItem("token", response.data.token);

    alert("Login Successful!");

    navigate("/dashboard");

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>TeamFlow Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
        <p style={{ marginTop: "20px" }}>
  Don't have an account?{" "}
  <Link to="/register">
    Register
  </Link>
</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  card: {
    width: "350px",
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    marginTop: "20px",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Login;