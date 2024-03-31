import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div className="bg-fondo/50 lg:w-[450] w-auto flex flex-col round-lg rounded-xl md:p-8">
      <div className="p-8">
        <h3 className="text-primary/55 uppercase text-sm font-bold mb-2">
          Dashboard
        </h3>
        <h1 className="text-white text-6xl font-medium mb-2">
          Iniciar Sesión <span className="text-secondary-900">.</span>
        </h1>
        <span className="text-white/45 font-medium">Bienvenido de nuevo </span>
        <form action="mt-8">
          <div className="relative max-w-lg mb-4 mt-4">
            <CiMail className="top-1/2 left-2 -translate-y-1/2 absolute text-gray-500 h-5 w-5" />
            <input
              type="email"
              autoComplete="off"
              className="text-white w-full bg-[#343434] rounded-xl outline-none px-4 py-3 p-2 pl-10  group"
              placeholder="Email"
            />
          </div>
          <div className="relative mb-4">
            <CiLock className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500 h-5 w-5" />
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              className="appearance-none text-white w-full bg-[#343434] rounded-xl outline-none py-3 p-2 group px-10"
              placeholder="Password"
            />
            {showPassword ? (
              <FaEye
                onClick={() => {
                  setshowPassword(!showPassword);
                }}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 h-5 w-5 hover:cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => {
                  setshowPassword(!showPassword);
                }}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 h-5 w-5 hover:cursor-pointer"
              />
            )}
          </div>

          <div className="w-auto max-w-lg">
            <button className="bg-secondary-500 text-white w-full py-3 rounded-xl hover:bg-secondary-600 transition-colors">
              Iniciar
            </button>
          </div>
          <div className="max-w-lg flex justify-between mt-5 mb-0">
            <div>
              <Link className="text-white/50 font-medium hover:text-primary/80 transition-colors">
                Registrarse
              </Link>
            </div>

            <Link
              href=""
              className="text-secondary-100 font-medium hover:text-primary/80 transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </form>
        <div className="mt-7 flex justify-center">
          <h5>Iniciar con:</h5>
        </div>
        <div className="relative max-w-lg flex justify-center  mb-6">
          <br className="text-white bg-white" />
          <div className="flex justify-center gap-4 mt-4">
            {/* Botón de registro con Google */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black border border-secondary-100 text-white">
              <FaGoogle size={24} />
            </button>

            {/* Botón de registro con Facebook */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black border border-secondary-100 text-white">
              <FaFacebook size={24} />
            </button>

            {/* Botón de registro con Twitter */}
            <button
              type="submit"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black border border-secondary-100 text-white"
            >
              <FaXTwitter size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
