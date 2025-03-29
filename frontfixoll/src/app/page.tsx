import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Bienvenido a Fixoll</h1>
        <p className="text-gray-700 mt-4 max-w-2xl">
          La plataforma de economía colaborativa donde puedes ofrecer y contratar servicios como reparaciones, fotografía, aseo y más.
        </p>
      </header>
      
      <img 
        src="https://static.vecteezy.com/system/resources/previews/002/885/416/large_2x/technician-repairing-inside-of-mobile-phone-by-soldering-iron-integrated-circuit-the-concept-of-data-hardware-technology-free-photo.jpg" 
        alt="Técnico reparando un dispositivo" 
        className="w-full max-w-3xl rounded-lg shadow-lg mb-8"
      />
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        <Link href="/auth/signup" >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600">Regístrate</h3>
          <p className="text-gray-600 mt-2">Crea una cuenta para comenzar a ofrecer o contratar servicios.</p>
        </div>
        </Link>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600">Explora Servicios</h3>
          <p className="text-gray-600 mt-2">Encuentra expertos en reparación, aseo, fotografía y más.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600">Gana Dinero</h3>
          <p className="text-gray-600 mt-2">Ofrece tus habilidades y consigue clientes de manera fácil.</p>
        </div>
      </div>
      
      <div className="mt-10">
        <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Únete Ahora
        </a>
      </div>
    </div>
  );
}
