function HeroCard({ hero, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition">
      <div className="flex items-center justify-center bg-blue-100 rounded-lg w-14 h-14 mb-4">
        <span className="text-2xl">🦸</span>
      </div>

      <h2 className="text-xl font-bold text-slate-800">
        {hero.name}
      </h2>

      <p className="text-sm text-slate-500 mt-1">
        Universo: {hero.universe}
      </p>

      <div className="mt-4">
        <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
          {hero.power}
        </span>
      </div>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => onEdit(hero)}
          className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg transition"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(hero.id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
        >
          Excluir
        </button>
      </div>
    </div>
  )
}

export default HeroCard
