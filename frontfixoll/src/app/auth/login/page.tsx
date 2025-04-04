export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-gray-300 border-solid border-3">
            <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Correo Electrónico</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  placeholder="tucorreo@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contraseña</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-lg"
                  placeholder="********"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Iniciar Sesión
              </button>
            </form>
            <p className="mt-4 text-center">
              ¿No tienes una cuenta? <a href="/auth/signup" className="text-blue-600">Regístrate</a>
            </p>
          </div>
        </div>
      );
}