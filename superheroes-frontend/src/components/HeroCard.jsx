function HeroCard({ hero }) {
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

    </div>
  )
}

export default HeroCard
