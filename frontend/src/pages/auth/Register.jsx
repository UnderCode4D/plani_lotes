import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import googleLogo from "../../assets/img/google.svg";
import Navbar from "../../components/Navbars/AuthNavbar";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Empleado");
  const [state, setState] = useState(1)
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signup`, { name, email, password, role, state });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response.data.message || "Error al registrar usuario");
    }
  };

  return (
    <>
      <Navbar transparent />
      <div className="container mx-auto px-4 h-full mt-48">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Inicia sesión con
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={googleLogo}
                    />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>O regístrate con credenciales</small>
                </div>
                {error && (
                  <div className="text-red-500 text-center mb-3 font-bold">
                    <small>{error}</small>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="role"
                    >
                      Rol
                    </label>
                    <select
                      id="role"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="Empleado">Empleado</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Dueño">Dueño</option>
                    </select>
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Estoy de acuerdo con la {" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Política de Privacidad
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Crear Cuenta
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="">
              <div className="text-center">
                <Link to="/auth/login" className="text-blueGray-200">
                  <small>Iniciar Sesión</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}