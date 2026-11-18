function MovieCard({ movie, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition">

      <h2 className="text-xl font-bold text-black-800">
        {movie.title}
      </h2>

      <p className="text-sm text-black-500 mt-2">
        Ano de lançamento: {movie.year}
      </p>

      <div className="flex gap-3 mt-5">

        <button
          onClick={() => onEdit(movie)}
          className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg transition"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(movie.id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
        >
          Excluir
        </button>

      </div>

    </div>
  )
}

export default MovieCard