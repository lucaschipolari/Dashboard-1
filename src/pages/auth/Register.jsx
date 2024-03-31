import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";

const Register = () => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div className="bg-fondo/50 lg:w-[450] w-auto flex flex-col round-lg rounded-xl md:p-8">
      <div className="p-8">
        <h3 className="text-primary/55 uppercase text-sm font-bold mb-2">
          Dashboard
        </h3>
        <h1 className="text-6xl text-white font-medium mb-2">
          Crea una cuenta<span className="text-secondary-100">.</span>
        </h1>
        <span className="text-gray-500 font-medium">
          ¿Ya eres usuario?{" "}
          <a href="#" className="text-secondary-100 hover:underline">
            Ingresa
          </a>
        </span>
        <form className="mt-8">
          <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <input
              type="text"
              autoComplete="off"
              className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
              placeholder="Nombre(s)"
            />
            <input
              type="text"
              autoComplete="off"
              className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
              placeholder="Apellidos"
            />
          </div>
          <div className="max-w-lg mb-4">
            <input
              type="email"
              autoComplete="off"
              className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
              placeholder="Correo electrónico"
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
          <div className="relative mb-4">
            <CiLock className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500 h-5 w-5" />
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              className="appearance-none text-white w-full bg-[#343434] rounded-xl outline-none py-3 p-2 group px-10"
              placeholder="Confirm Password"
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
          <div className="w-auto">
            <button
              type="submit"
              className="bg-secondary-500 text-white w-full py-3 rounded-xl hover:bg-secondary-600 transition-colors"
            >
              Crear una cuenta
            </button>
          </div>
          <div className="mt-7 flex justify-center">
            <h5>Registrarse con:</h5>
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
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-1000 border border-secondary-100 text-white">
                <FaXTwitter size={24} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
