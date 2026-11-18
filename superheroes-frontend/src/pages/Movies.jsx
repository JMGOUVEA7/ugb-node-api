import { useEffect, useCallback, useState } from 'react'

import {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../services/api'

import MovieCard from '../components/MovieCard'
import MovieForm from '../components/MovieForm'

function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editingMovie, setEditingMovie] = useState(null)

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

  // Cadastrar ou atualizar filme
  async function handleSave(movie) {
    try {
      setError('')

      if (editingMovie) {
        await updateMovie(editingMovie.id, movie)
      } else {
        await createMovie(movie)
      }

      setEditingMovie(null)

      await loadMovies()

      return true
    } catch (error) {
      setError(error.message)
      return false
    }
  }

  // excluir filme
  async function handleDelete(id) {
    const confirmed = window.confirm(
      'Tem certeza que deseja excluir este filme?'
    )

    if (!confirmed) return

    try {
      setError('')

      await deleteMovie(id)

      // cancela a edicao se o filme excluido estava sendo editado
      if (editingMovie?.id === id) {
        setEditingMovie(null)
      }

      await loadMovies()
    } catch (error) {
      setError(error.message)
    }
  }

  if (loading) {
    return (
      <p className="text-black-500">
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

        <p className="text-black-500 mt-2">
          Gerencie os filmes cadastrados na API.
        </p>
      </div>

      {error && (
        <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-5">
          {error}
        </p>
      )}

      <MovieForm
        onSave={handleSave}
        editingMovie={editingMovie}
        onCancel={() => setEditingMovie(null)}
      />

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
              onEdit={setEditingMovie}
              onDelete={handleDelete}
            />
          ))}

        </div>
      )}

    </div>
  )
}

export default Movies