export default function RequestPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-gray-300 border-solid border-3">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuevo Servicio</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Tipo de Servicio
                <select className="w-full p-2 border rounded-lg">
                  <option value="">-Selecciona un tipo de servicio-</option>
                  <option value="consultoria">Reparación</option>
                  <option value="desarrollo">Instalación</option>
                  <option value="mantenimiento">Mantenimiento</option>
                </select>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Descripción</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                placeholder="Descripción del servicio"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Precio</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                placeholder="Precio del servicio"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Crear Servicio
            </button>
          </form>
        </div>
      </div>
    );
  }
  