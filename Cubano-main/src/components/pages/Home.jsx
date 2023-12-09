import React from "react";
import Logo from "../../../public/logouleam.png";
import "./home.css";
import Header from "../../../public/header.png";
import About from "../../../public/about.png";
import { NavLink, useNavigate } from "react-router-dom";
import Class1 from "../../../public/class-1.jpg";
import Class2 from "../../../public/class-2.jpg";
import Class3 from "../../../public/class-3.jpg";
import Class4 from "../../../public/class-4.jpg";
import toast from "react-hot-toast";
const Home = () => {
  const navigate = useNavigate();
  const isloged = localStorage.getItem("isLogged") || false;
  const handleLogOut = () => {
    localStorage.removeItem("isLogged");
    toast.success("Cerraste sesion")
    navigate("/");
  }
  return (
    <div>
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

            {isloged ? (
              <>
                <li>              <NavLink  to={"/horarios"}>Horario</NavLink>            </li>

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
            
          </ul>
        </div>
      </header>
      <div className="root">
        <div className="first">
          <div className="firts-text">
            <h2 className="text-xl text-light">Construye tu cuerpo &</h2>
            <h1 className="text-xxl color-gray text-bold ">
              Formalo a tu estilo!
            </h1>
            <p className="color-paragraph ">
              Libera tu potencial y emprende un viaje hacia una persona más
              fuerte, más en forma y más segura de ti. ¡Regístrese en 'Make Your
              Body Shape' ahora y sea testigo de la increíble transformación de
              la que su cuerpo es capaz!
            </p>
          </div>
          <div className="first-image">
            <img src={Header} alt="" className="img-body" />
          </div>
        </div>
        <div className="second">
          <div className="second-image">
            <img src={About} alt="" className="img-body" />
          </div>
          <div className="second-text">
            <h1 className="text-xxl">Nuestra historia</h1>
            <p className="color-paragraph">
              Dirigida por nuestro equipo de instructores expertos y
              motivadores, "La clase que obtendrás aquí" es una sesión de alta
              energía orientada a resultados que combina una combinación
              perfecta de cardio, entrenamiento de fuerza y ejercicios
              funcionales.
            </p>
            <div className="text-about">
              <h3>Política de puerta abierta</h3>
              <p className="color-paragraph ">
                Creemos en brindar acceso sin restricciones a todas las
                personas, independientemente de su nivel de condición física,
                edad o antecedentes.
              </p>
            </div>
            <div className="text-about">
              <h3>Completamente asegurado</h3>
              <p className="color-paragraph ">
                Su tranquilidad es nuestra principal prioridad y nuestro
                compromiso con su seguridad se extiende a todos los aspectos de
                su viaje de acondicionamiento físico.
              </p>
            </div>
            <div className="text-about">
              <h3>Entrenador personal</h3>
              <p className="color-paragraph ">
                Con planes de entrenamiento personalizados adaptados a tus
                necesidades, nos aseguraremos de que aproveches al máximo tu
                experiencia en el gimnasio.
              </p>
            </div>
          </div>
        </div>
        <div className="third">
          <h1>Nuestas Clases</h1>
          <p className="color-paragraph">
            Descubra una amplia gama de clases emocionantes en nuestro gimnasio
            diseñado para atender a todos los niveles e intereses de condición
            física. Ya sea que sea un atleta experimentado o recién esté
            comenzando su viaje de acondicionamiento físico, nuestras clases
            ofrecen algo para todos.
          </p>
          <div className="card-container">
            <div className="card">
              <div>
                <img src={Class1} alt="" className="img-card" />
              </div>
              <div>
                <h3 className="color-white">Entrenamiento de fuerza</h3>
                <p className="color-white">Entrenamiento de resistencia</p>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={Class2} alt="" className="img-card" />
              </div>
              <div>
                <h3 className="color-white">Flexibilidad y movilidad</h3>
                <p className="color-white">Yoga y pilates</p>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={Class3} alt="" className="img-card" />
              </div>
              <div>
                <h3 className="color-white">HIIT</h3>
                <p className="color-white">Entrenamiento de circuito</p>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={Class4} alt="" className="img-card" />
              </div>
              <div>
                <h3 className="color-white">Fitness grupal</h3>
                <p className="color-white">zumba o baile</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fourth">
          <h1>Nuestros entrenadores</h1>
          <p className="color-paragraph">
            Nuestros entrenadores son más que simples expertos en ejercicio; Les
            apasiona ayudarle a alcanzar sus objetivos de salud y fitness.
            Nuestros entrenadores están equipados para adaptar programas de
            entrenamiento para satisfacer sus necesidades únicas.
          </p>
        </div>
        <footer>
          <h2>Contactanos Ahora</h2>
          <div>
            <input
              type="text"
              placeholder="Nombre completo"
              className="bad-input"
            />
            <input
              type="text"
              placeholder="Direccion email"
              className="bad-input"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Numero de telefono"
              className="bad-input"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Tu mensaje aqui"
              className=" bad-input"
            ></textarea>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
