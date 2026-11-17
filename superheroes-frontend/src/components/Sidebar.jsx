function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="w-64 min-h-screen bg-blue-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        Superheroes
      </h1>

      <nav className="space-y-3">

        <button
          onClick={() => onNavigate('heroes')}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
            activePage === 'heroes'
              ? 'bg-red-600'
              : 'hover:bg-slate-800'
          }`}
        >
          Heróis
        </button>

        <button
          onClick={() => onNavigate('movies')}
          className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
            activePage === 'movies'
              ? 'bg-red-600'
              : 'hover:bg-slate-800'
          }`}
        >
          Filmes
        </button>

      </nav>

    </aside>
  )
}

export default Sidebar