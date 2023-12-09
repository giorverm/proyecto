import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "./register.css"
import toast from 'react-hot-toast';
const Register = () => {
  const navigate = useNavigate(); 
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
    if(passwordRegex.test(password)) {
      return true;
    } else {
      return false;
    }
  }
  const [formData, setFormData] = useState ({
    name: "",
    date: "",
    direccion: "",
    email: "",
    telefono: "",
    cargo: "",
    password: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let currentUsers = JSON.parse(localStorage.getItem("userData"));
    if (!Array.isArray(currentUsers)) {
      currentUsers = []; // Si no es un array, inicializa como un array vacío
    }
    if(validateEmail(formData.email)) {
      if(validatePassword(formData.password)) {
        const nuevoId = Date.now();
        const nuevaData = { id: nuevoId, ...formData };
        setFormData((prevData) => [...prevData, nuevaData]);
        localStorage.setItem("userData", JSON.stringify([...currentUsers, nuevaData]));
        toast.success("Te has registrado con éxito");
        navigate("/login");
        return;
      } else {
        toast.error("La contraseña no tiene formato valido")
      }
    } else {
      toast.error("El correo electrocino no es valido");
    }
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="register-main">
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesion</h2>
            <div className="input-field">
              <label htmlFor="">Nombre completo</label>
              <input
                type="text"
                name="name"
                placeholder="Nombres"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="">Fecha de nacimiento</label>
              <input
                type="date"
                name="date"
                placeholder="Fecha de nacimiento"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="">Direccion</label>
              <input
                type="text"
                name="direccion"
                placeholder="Direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="">Correo Electronico</label>
              <input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="">Numero de telefono</label>
              <input
                type="text"
                name="telefono"
                placeholder="Numero de telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="">Cargo</label>
              <input
                type="text"
                name="cargo"
                placeholder="alumno, profesor, otros"
                value={formData.cargo}
                onChange={handleChange}
                required
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
                required
              />
            </div>
            <div>
              <button>Registrarse</button>
            </div>
          </form>
        </div>
        <div className="another">
          <h2>Ya tienes cuenta?</h2>
          <NavLink to={"/login"}>Iniciar Sesion</NavLink>
          <br />
          <NavLink to={"/"}>Volver al inicio</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Register