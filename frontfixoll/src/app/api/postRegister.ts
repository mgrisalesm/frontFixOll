export interface UsuarioRegistroDTO {
    email: string;
    password: string;
    nombre: string;
    cedula?: string;
    direccion: string;
    telefono: string;
    tipoUsuario: TipoUsuario;
    roles?: Rol[];
  }
  
  export enum TipoUsuario {
    ADMIN = "ADMIN",
    USER = "USER",
    // Agrega más según los valores esperados en el backend
  }
  
  export interface Rol {
    id: number;
    nombre: string;
  }
  
  const userPrueba ={    
    nombre: "david Ramirez",
    email: "daramirezsu06@gmail.com",
    password: "123456Compa",
    direccion: "calle larga 33",
    telefono: "1562648648", 
    cedula: "",
    tipoUsuarioId: 2
}

  
  import axios from "axios";


export const registrarUsuario = async (usuario: UsuarioRegistroDTO) => {
 

  try {
    const response = await axios.post("http://localhost:8080/api/registro", userPrueba, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};
