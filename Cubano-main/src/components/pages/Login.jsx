import React, { useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("userData"));
    const user = users.find((u) => u.email === formData.email && u.password === formData.password);
    if(user) {
      toast.success("inicio de sesion exitoso");
      localStorage.setItem("isLogged", true);
      navigate("/")
    }
  };  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="login-main">
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesion</h2>
            <div className="input-field">
              <label htmlFor="">Correo Electronico</label>
              <input
                type="email"
                name="email"
                placeholder="Correo electronico"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="">Contrasena</label>
              <input
                type="password"
                name="password"
                placeholder="Contrasena"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>Iniciar sesion</button>
            </div>
          </form>
        </div>
        <div className="another">
          <h2>No tienes cuenta?</h2>
          <NavLink to={"/register"}>Registrate</NavLink>
          <br />
          <NavLink to={"/"}>Volver al inicio</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
