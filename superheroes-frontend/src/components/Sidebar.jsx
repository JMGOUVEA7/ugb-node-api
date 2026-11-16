function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        Superheroes
      </h1>

      <nav className="space-y-3">

        <a
          href="#"
          className="block bg-red-600 px-4 py-3 rounded-lg font-medium"
        >
            Heróis
        </a>

        <a
          href="#"
          className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
        >
            Filmes
        </a>

      </nav>

    </aside>
  )
}

export default Sidebar
