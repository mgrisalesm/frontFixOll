"use client";

import { register } from "module";
import { use, useState, useEffect } from "react";
import { registrarUsuario} from "../../api/postRegister"


  
export default function SignupPage({data}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState(null);


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      nombre:name,
      email,
      password,
      direccion:address,
      telefono:phone,
      tipoUsuario:userType
    };
    console.log("Datos del formulario:", formData);

    try {
      const response = await registrarUsuario(formData);
      console.log("Usuario registrado:", response);
      
      
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setError("Error al registrar usuario. Por favor, inténtalo de nuevo.");
      console.log(error);
      
      
    }
    
     }
 

  

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-gray-300 border-solid border-3">
        <h2 className="text-2xl font-bold mb-6 text-center">Crear Cuenta</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre Completo</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              placeholder="tucorreo@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Direccion</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Tu direccion"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name="address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Telefono</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Tu telefono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tipo usuario
              <select className="w-full p-2 border rounded-lg"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                name="userType"
                >
                <option value="">(seleccione una opcion)</option>
                <option value="1">Cliente</option>  
                <option value="2">Tecnico</option>

              </select>
            </label>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" onClick={onSubmit}>
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-center">
          ¿Ya tienes una cuenta? <a href="/login" className="text-blue-600">Inicia sesión</a>
        </p>
      </div>
     
    </div>
    
  );
}
