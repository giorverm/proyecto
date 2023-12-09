import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Logo from "../../../public/logouleam.png";
import { NavLink, useNavigate } from "react-router-dom";
import './horario.css';

const Horario = () => {
  const navigate = useNavigate();
  const isloged = localStorage.getItem("isLogged") || false;
  //const userData = JSON.parse(localStorage.getItem("userData"));
  //const userName = userData ? userData.name : "Usuario";

  


  // Dentro de tu componente Horario
const currentUserId = localStorage.getItem("currentUserId");
const userData = JSON.parse(localStorage.getItem("userData")) || [];
const currentUser = userData.find(user => user.id.toString() === currentUserId);
const userName = currentUser ? currentUser.name : "Usuario";


  console.log(userName);
  const [horario, setHorario] = useState('');
  const [deseaEntrenador, setDeseaEntrenador] = useState(false);
  const [maquinaEspecifica, setMaquinaEspecifica] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("isLogged");
    toast.success("Cerraste sesion")
    navigate("/");
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    const horarioData = {
      horario,
      entrenador: deseaEntrenador ? 'Asignado' : 'No desea',
      maquina: deseaEntrenador ? 'El entrenador decide' : maquinaEspecifica,
    };
    localStorage.setItem("horarioData", JSON.stringify(horarioData));
    setFormSubmitted(true);
    toast.success('Información registrada con éxito.');
  };

  const horarioData = JSON.parse(localStorage.getItem("horarioData"));

  return (
    
    <div >
      <header>
        <div>
          <img src={Logo} alt="logo" id="logo" />
        </div>
        <div>
          <ul>
          <li>
              <NavLink to={"/"} >Inicio</NavLink>
            </li>
            <li>
              <NavLink  to={"/"}>Acerca de</NavLink>
            </li>
            <li>
              <NavLink  to={"/"}>Clases</NavLink>
            </li>
            <li>
              <NavLink  to={"/"}>Entrenadores</NavLink>
            </li>
           
            {isloged ? (
              <>
                <li><button onClick={handleLogOut}>Cerrar sesion</button></li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/register"}>
                    <button>Registro</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/login"}>
                    <button>Iniciar Sesion</button>
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to={"/horarios"}>
                <button>Horarios</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      {!formSubmitted ? (
      <form onSubmit={handleSubmit} className="horario-container">
        <h2>Elige tu horario</h2>
        <select value={horario} onChange={(e) => setHorario(e.target.value)}>
          <option value="">Selecciona un horario</option>
          <option value="Matutino">Matutino</option>
          <option value="Vespertino">Vespertino</option>
  
        </select>

        <div>
          <label>
            ¿Deseas un entrenador personal?
            <input 
              type="checkbox" 
              checked={deseaEntrenador} 
              onChange={(e) => setDeseaEntrenador(e.target.checked)} 
            />
          </label>
        </div>

        {!deseaEntrenador && (
          <div>
            <label>
              ¿Quieres alguna máquina en específico?
              <input 
                type="text" 
                value={maquinaEspecifica} 
                onChange={(e) => setMaquinaEspecifica(e.target.value)} 
                placeholder="Escribe la máquina aquí" 
              />
            </label>
          </div>
        )}

        <button type="submit">Confirmar Horario</button>
      </form>
         ) : (
          <div className="horario-table">
          <h2>Detalles de tu reserva</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Horario</th>
                <th>Entrenador</th>
                <th>Máquina</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userName}</td>
                <td>{horarioData.horario}</td>
                <td>{horarioData.entrenador}</td>
                <td>{horarioData.maquina}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Horario;
