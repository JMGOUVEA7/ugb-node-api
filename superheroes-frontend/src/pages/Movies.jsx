import { useEffect, useCallback, useState } from 'react'

import {
  getMovies,
  createMovie,
} from '../services/api'

import MovieCard from '../components/MovieCard'
import MovieForm from '../components/MovieForm'

function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Buscar filmes na API
  const loadMovies = useCallback(async () => {
    try {
      setError('')

      const data = await getMovies()
      setMovies(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadMovies()
  }, [loadMovies])

  // Cadastrar filme
  async function handleSave(movie) {
    try {
      setError('')

      await createMovie(movie)

      await loadMovies()

      return true
    } catch (error) {
      setError(error.message)
      return false
    }
  }

  if (loading) {
    return (
      <p className="text-slate-500">
        Carregando filmes...
      </p>
    )
  }

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Filmes
        </h1>

        <p className="text-slate-500 mt-2">
          Gerencie os filmes cadastrados na API.
        </p>
      </div>

      {error && (
        <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-5">
          {error}
        </p>
      )}

      <MovieForm onSave={handleSave} />

      {movies.length === 0 ? (
        <p className="text-slate-500">
          Nenhum filme cadastrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}

        </div>
      )}

    </div>
  )
}

export default Movies